import { CommonModule } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
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
export class GuidePage {
  private readonly guideService = inject(GuideService);

  readonly featuredGuide = this.guideService.getFeaturedGuide();
  readonly guideGroups = this.guideService.getGuideItemGroups();
  readonly tutorialItems = this.guideService.getTutorialItems();
  readonly trackByGroupId = trackById<GuideItemGroup>;
  readonly trackByGuideId = trackById<GuideItem>;
  readonly trackByTutorialId = trackById<GuideTutorialItem>;

  videoModalOpen = false;
  activeTutorialVideo: TutorialVideo | null = null;

  openVideoModal(tutorial: GuideTutorialItem): void {
    const video = this.guideService.getTutorialVideoById(tutorial.videoId);

    if (!video) {
      return;
    }

    this.activeTutorialVideo = video;
    this.videoModalOpen = true;
  }

  closeVideoModal(): void {
    this.videoModalOpen = false;
    this.activeTutorialVideo = null;
  }
}
