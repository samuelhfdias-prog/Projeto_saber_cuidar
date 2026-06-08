import { Injectable } from '@angular/core';

import { MOCK_WELLNESS_QUESTIONS } from '../data/wellness.mock';
import type { WellnessCheckInDraft, WellnessQuestion } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WellnessService {
  getQuestions(): readonly WellnessQuestion[] {
    return MOCK_WELLNESS_QUESTIONS;
  }

  saveCheckIn(_draft: WellnessCheckInDraft): void {}
}
