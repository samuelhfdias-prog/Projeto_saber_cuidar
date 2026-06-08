export type GuideTone = 'blue' | 'green' | 'orange' | 'purple' | 'cyan';

export interface GuideItem {
  id: string;
  slug?: string;
  route?: string;
  title: string;
  tag: string;
  detail: string;
  steps?: number;
  meta: string;
  icon: string;
  tone: GuideTone;
  status?: 'published' | 'draft';
}

export interface GuideItemGroup {
  id: string;
  title: string;
  items: readonly GuideItem[];
}

export interface GuideFeatureItem {
  id: string;
  link: string;
  title: string;
  detail: string;
  source: string;
  icon: string;
  badge: string;
}

export interface GuideTutorialItem {
  id: string;
  title: string;
  category: string;
  detail: string;
  link: string;
  icon: string;
  videoId: string;
  youtubeId: string;
  videoUrl: string;
}
