import { describe, expect, it } from 'vitest';

import { GuideService } from './guide.service';

describe('GuideService', () => {
  it('lists all new practical guide cards with the expected routes', () => {
    const guideService = new GuideService();
    const guideItems = guideService.getGuideItems();
    const expectedCards = [
      ['higiene-bucal', 'Higiene Bucal'],
      ['prevencao-assaduras', 'Prevenção de Assaduras'],
      ['transferencia-posicionamento-idoso', 'Transferência e Posicionamento do Idoso'],
      ['prevencao-quedas', 'Prevenção de Quedas'],
      ['independencia-autonomia', 'Independência e Autonomia']
    ];

    for (const [slug, title] of expectedCards) {
      const item = guideItems.find((guideItem) => guideItem.slug === slug);

      expect(item?.title).toBe(title);
      expect(item?.route).toBe(`/guia-pratico/${slug}`);
    }
  });

  it('keeps exercises out of the practical guide catalog', () => {
    const guideService = new GuideService();

    expect(guideService.getGuideItems().some((guideItem) => guideItem.slug === 'exercicios-idoso-cuidador')).toBe(false);
    expect(guideService.getPracticalGuideBySlug('exercicios-idoso-cuidador')).toBeUndefined();
  });

  it('keeps Troca de Fralda as a single completed guide', () => {
    const guideService = new GuideService();
    const diaperGuides = guideService.getPracticalGuides().filter((guide) => guide.slug === 'troca-de-fralda');
    const diaperGuide = diaperGuides[0];
    const stepsSection = diaperGuide.sections.find((section) => section.type === 'steps');

    expect(diaperGuides).toHaveLength(1);
    expect(diaperGuide.title).toBe('Troca de Fralda');
    expect(diaperGuide.cardMeta).toBe('6 passos · inclui dicas e vídeo');
    expect(stepsSection?.steps).toHaveLength(6);
  });

  it('links each guide video by video id and YouTube id', () => {
    const guideService = new GuideService();

    expect(guideService.getTutorialVideoById('video-higiene-bucal-acamada')?.youtubeId).toBe('Ub1W0_kV57o');
    expect(guideService.getTutorialVideoById('video-troca-fralda-idoso')?.youtubeId).toBe('PX13v8miNRI');
    expect(guideService.getTutorialVideoById('video-prevencao-assaduras')?.youtubeId).toBe('ono7FGI-MyU');
    expect(guideService.getTutorialVideoById('video-prevencao-quedas')?.youtubeId).toBe('3YyDC203_qg');
    expect(guideService.getTutorialVideoByYoutubeId('Ub1W0_kV57o')?.relatedGuideSlug).toBe('higiene-bucal');
    expect(guideService.getTutorialVideoByYoutubeId('PX13v8miNRI')?.relatedGuideSlug).toBe('troca-de-fralda');
    expect(guideService.getTutorialVideoByYoutubeId('ono7FGI-MyU')?.relatedGuideSlug).toBe('prevencao-assaduras');
    expect(guideService.getTutorialVideoByYoutubeId('3YyDC203_qg')?.relatedGuideSlug).toBe('prevencao-quedas');
  });

  it('adds video sections to rash and fall prevention guides', () => {
    const guideService = new GuideService();
    const rashGuide = guideService.getPracticalGuideBySlug('prevencao-assaduras');
    const fallGuide = guideService.getPracticalGuideBySlug('prevencao-quedas');

    expect(rashGuide?.sections.find((section) => section.type === 'video')?.videoId).toBe('video-prevencao-assaduras');
    expect(fallGuide?.sections.find((section) => section.type === 'video')?.videoId).toBe('video-prevencao-quedas');
  });

  it('keeps Independência e Autonomia as preparation content only', () => {
    const guideService = new GuideService();
    const autonomyGuide = guideService.getPracticalGuideBySlug('independencia-autonomia');

    expect(autonomyGuide?.status).toBe('draft');
    expect(autonomyGuide?.sections).toHaveLength(1);
    expect(autonomyGuide?.sections[0].description).toBe('Este conteúdo está em preparação.');
  });
});
