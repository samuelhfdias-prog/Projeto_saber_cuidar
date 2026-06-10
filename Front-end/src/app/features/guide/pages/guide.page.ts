import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageShellComponent } from '../../../shared/components/page-shell/page-shell.component';
import { trackById } from '../../../shared/utils';
import { GuideCardComponent, GuideVideoComponent } from '../components';
import type { GuideItem, GuideItemGroup, GuideTutorialItem, TutorialVideo } from '../models';
import { GuideService } from '../services/guide.service';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, GuideCardComponent, GuideVideoComponent, PageShellComponent, RouterLink],
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.css'],
  encapsulation: ViewEncapsulation.None
})
export class GuidePage implements OnInit {
  private readonly guideService = inject(GuideService);

  featuredGuide: any = {};
  guideGroups: GuideItemGroup[] = [];
  tutorialItems: GuideTutorialItem[] = [];
  readonly trackByGroupId = trackById<GuideItemGroup>;
  readonly trackByGuideId = trackById<GuideItem>;
  readonly trackByTutorialId = trackById<GuideTutorialItem>;

  videoModalOpen = false;
  activeTutorialVideo: TutorialVideo | null = null;
  loadingGuides = true;

  ngOnInit() {
    this.guideService.getFeaturedGuide().subscribe(data => {
      this.featuredGuide = data;
    });

    this.guideService.getGuideItemGroups().subscribe(data => {
      this.guideGroups = data;
    });

    this.guideService.getTutorialItems().subscribe({
      next: (tutorials) => {
        this.tutorialItems = tutorials;
        this.loadingGuides = false;
      },
      error: () => {
        this.tutorialItems = [];
        this.loadingGuides = false;
      }
    });
  }

  openVideoModal(tutorial: GuideTutorialItem): void {
    if (!tutorial.videoId) return;
    this.guideService.getTutorialVideoById(tutorial.videoId).subscribe(video => {
      if (video) {
        this.activeTutorialVideo = video;
        this.videoModalOpen = true;
      }
    });
  }

  closeVideoModal(): void {
    this.videoModalOpen = false;
    this.activeTutorialVideo = null;
  }
}
