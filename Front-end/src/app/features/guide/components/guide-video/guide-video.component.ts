import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { environment } from '../../../../../environments/environment';
import type { TutorialVideo } from '../../models';

@Component({
  selector: 'app-guide-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide-video.component.html',
  styleUrls: ['./guide-video.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideVideoComponent implements OnChanges {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() video: TutorialVideo | null = null;
  @Input() videoUrl = '';
  @Input() loadImmediately = false;
  @Output() readonly closeVideo = new EventEmitter<void>();

  playerOpen = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['video'] || changes['videoUrl'] || changes['loadImmediately']) {
      this.playerOpen = this.loadImmediately && this.safeVideoUrl !== null;
    }
  }

  get safeVideoUrl(): SafeResourceUrl | null {
    const embedUrl = this.toYoutubeEmbedUrl(this.video?.youtubeId ?? this.videoUrl);

    if (embedUrl === null) {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  get title(): string {
    return this.video?.title ?? 'Vídeo auxiliar';
  }

  get description(): string {
    return this.video?.description ?? 'Este espaço está preparado para receber um vídeo auxiliar do procedimento.';
  }

  get externalUrl(): string {
    return this.video?.externalUrl ?? this.videoUrl;
  }

  openPlayer(): void {
    if (this.safeVideoUrl !== null) {
      this.playerOpen = true;
    }
  }

  closePlayer(): void {
    this.playerOpen = false;
    this.closeVideo.emit();
  }

  private toYoutubeEmbedUrl(value: string): string | null {
    const videoId = this.extractYoutubeId(value);

    if (videoId === null) {
      return null;
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0`;
  }

  private extractYoutubeId(value: string): string | null {
    const normalizedValue = value.trim();

    if (/^[A-Za-z0-9_-]{6,}$/.test(normalizedValue) && !normalizedValue.includes('/')) {
      return normalizedValue;
    }

    if (normalizedValue.length === 0) {
      return null;
    }

    try {
      const parsedUrl = new URL(normalizedValue);
      const hostname = parsedUrl.hostname.replace(/^www\./, '');
      let videoId = '';

      if (
        parsedUrl.protocol !== 'https:' ||
        !environment.allowedExternalHosts.some((allowedHost) => allowedHost === parsedUrl.hostname)
      ) {
        return null;
      }

      if (hostname === 'youtube.com' || hostname === 'm.youtube.com') {
        videoId = parsedUrl.searchParams.get('v') ?? parsedUrl.pathname.replace('/embed/', '');
      }

      if (!/^[A-Za-z0-9_-]{6,}$/.test(videoId)) {
        return null;
      }

      return videoId;
    } catch {
      return null;
    }
  }
}
