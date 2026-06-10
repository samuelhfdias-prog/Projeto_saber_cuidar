import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

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
  private readonly http = inject(HttpClient);

  getPracticalGuides(): Observable<PracticalGuide[]> {
    return this.http.get<{dados: PracticalGuide[]}>(`${environment.apiUrl}/api/educational/guides`).pipe(
      map(res => res.dados)
    );
  }

  getFeaturedGuide(): Observable<GuideFeatureItem> {
    return this.http.get<{dados: GuideFeatureItem}>(`${environment.apiUrl}/api/educational/featured-guide`).pipe(
      map(res => res.dados)
    );
  }

  getGuideItemGroups(): Observable<GuideItemGroup[]> {
    return this.http.get<{dados: GuideItemGroup[]}>(`${environment.apiUrl}/api/educational/guide-groups`).pipe(
      map(res => res.dados)
    );
  }

  getTutorialItems(): Observable<GuideTutorialItem[]> {
    return this.http.get<{dados: GuideTutorialItem[]}>(`${environment.apiUrl}/api/educational/tutorials`).pipe(
      map(res => res.dados)
    );
  }

  getPracticalGuideBySlug(slug: string): Observable<PracticalGuide | undefined> {
    return this.http.get<{dados: PracticalGuide}>(`${environment.apiUrl}/api/educational/guides/slug/${slug}`).pipe(
      map(res => res.dados)
    );
  }

  getCareGuideBySlug(slug: string): Observable<PracticalGuide | undefined> {
    return this.getPracticalGuideBySlug(slug);
  }

  getTutorialVideoById(videoId: string): Observable<TutorialVideo | undefined> {
    return this.http.get<{dados: TutorialVideo}>(`${environment.apiUrl}/api/educational/videos/${videoId}`).pipe(
      map(res => res.dados)
    );
  }

  getTutorialVideoByYoutubeId(youtubeId: string): Observable<TutorialVideo | undefined> {
    return this.http.get<{dados: TutorialVideo}>(`${environment.apiUrl}/api/educational/videos/youtube/${youtubeId}`).pipe(
      map(res => res.dados)
    );
  }
}
