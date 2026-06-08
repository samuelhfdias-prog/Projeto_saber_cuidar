import { Injectable } from '@angular/core';

import {
  MOCK_CARE_GUIDES,
  MOCK_GUIDE_FEATURE,
  MOCK_GUIDE_GROUPS,
  MOCK_GUIDE_ITEMS,
  MOCK_GUIDE_TUTORIALS
} from '../data/care-guides.mock';
import type {
  GuideCategoryGroup,
  GuideFeatureItem,
  GuideItem,
  GuideItemGroup,
  GuideTutorialItem,
  PracticalGuide,
  TutorialVideo
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class GuideService {
  getFeaturedGuide(): GuideFeatureItem {
    return MOCK_GUIDE_FEATURE;
  }

  getPracticalGuides(): readonly PracticalGuide[] {
    return MOCK_CARE_GUIDES;
  }

  getGuideGroups(): readonly GuideCategoryGroup[] {
    return MOCK_GUIDE_GROUPS;
  }

  getGuideItemGroups(): readonly GuideItemGroup[] {
    return MOCK_GUIDE_GROUPS.map((group) => ({
      id: group.id,
      title: group.title,
      items: group.guides
        .map((guide) => MOCK_GUIDE_ITEMS.find((item) => item.id === guide.id))
        .filter((item): item is GuideItem => item !== undefined)
    }));
  }

  getGuideItems(): readonly GuideItem[] {
    return MOCK_GUIDE_ITEMS;
  }

  getTutorialItems(): readonly GuideTutorialItem[] {
    return MOCK_GUIDE_TUTORIALS;
  }

  getGuideById(id: string): GuideItem | undefined {
    return MOCK_GUIDE_ITEMS.find((item) => item.id === id);
  }

  getPracticalGuideBySlug(slug: string): PracticalGuide | undefined {
    return MOCK_CARE_GUIDES.find((guide) => guide.slug === slug);
  }

  getCareGuideBySlug(slug: string): PracticalGuide | undefined {
    return this.getPracticalGuideBySlug(slug);
  }

  getTutorialVideoById(videoId: string): TutorialVideo | undefined {
    return MOCK_CARE_GUIDES.flatMap((guide) => guide.videos ?? []).find((video) => video.id === videoId);
  }

  getTutorialVideoByYoutubeId(youtubeId: string): TutorialVideo | undefined {
    return MOCK_CARE_GUIDES.flatMap((guide) => guide.videos ?? []).find((video) => video.youtubeId === youtubeId);
  }
}
