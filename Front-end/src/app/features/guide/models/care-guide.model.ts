import type { GuideTone } from './guide-item.model';

export type GuideSectionType =
  | 'introduction'
  | 'materials'
  | 'steps'
  | 'list'
  | 'warning'
  | 'video'
  | 'exercise-list'
  | 'position-cards';

export type ExerciseGroup = 'Pernas' | 'Braços' | 'Mãos';
export type ExerciseFilter = 'Todos' | ExerciseGroup;
export type GuideStatus = 'published' | 'draft';

export interface GuideStep {
  id: string;
  order: number;
  title: string;
  description: string;
  tip?: string;
  duration?: string;
}

export interface PositionCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  orientation: string;
}

export interface Exercise {
  id: string;
  number: number;
  title: string;
  group: ExerciseGroup;
  objective: string;
  positioning: string[];
  execution: string[];
  suggestedRepetitions?: string;
  pause?: string;
  videoId?: string;
  warning?: string;
}

export interface TutorialVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  externalUrl: string;
  source?: string;
  relatedGuideSlug: string;
  relatedExerciseIds?: string[];
}

export interface GuideSection {
  id: string;
  title: string;
  description?: string;
  type: GuideSectionType;
  items?: readonly string[];
  steps?: readonly GuideStep[];
  exercises?: readonly Exercise[];
  videoId?: string;
  positionCards?: readonly PositionCard[];
}

export interface PracticalGuide {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  icon: string;
  tone: GuideTone;
  stepsCount?: number;
  cardMeta?: string;
  hasTips?: boolean;
  hasVideo?: boolean;
  status?: GuideStatus;
  sections: readonly GuideSection[];
  videos?: readonly TutorialVideo[];
}

export interface GuideCategoryGroup {
  id: string;
  title: string;
  guides: readonly PracticalGuide[];
}

export interface GuideWarning {
  id: string;
  text: string;
}

export type CareGuide = PracticalGuide;
export type CareGuideStep = GuideStep;
export type CareGuideMaterial = { id: string; label: string };
export type CareGuideWarning = GuideWarning;
