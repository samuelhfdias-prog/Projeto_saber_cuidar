import { expect, test } from '@playwright/test';

const newGuideCards = [
  ['Higiene Bucal', 'higiene-bucal'],
  ['Prevenção de Assaduras', 'prevencao-assaduras'],
  ['Transferência e Posicionamento do Idoso', 'transferencia-posicionamento-idoso'],
  ['Prevenção de Quedas', 'prevencao-quedas'],
  ['Independência e Autonomia', 'independencia-autonomia']
] as const;

test.describe('Guia Prático', () => {
  test('shows the new cards without duplicating Troca de Fralda', async ({ page }) => {
    await page.goto('/tabs/agenda');

    for (const [title, slug] of newGuideCards) {
      await expect(page.getByRole('link', { name: `Abrir guia ${title}` })).toHaveAttribute(
        'href',
        `/guia-pratico/${slug}`
      );
    }

    await expect(page.getByRole('link', { name: 'Abrir guia Troca de Fralda' })).toHaveCount(1);
    await expect(page.getByRole('link', { name: 'Abrir guia Exercícios para o Idoso e o Cuidador' })).toHaveCount(0);
  });

  test('loads the expected guide videos only after request', async ({ page }) => {
    await page.goto('/guia-pratico/higiene-bucal');
    await expect(page.locator('iframe')).toHaveCount(0);
    await page.getByRole('button', { name: 'Assistir demonstração' }).click();
    await expect(page.locator('iframe')).toHaveAttribute('src', /youtube-nocookie\.com\/embed\/Ub1W0_kV57o/);

    await page.goto('/guia-pratico/troca-de-fralda');
    await expect(page.locator('iframe')).toHaveCount(0);
    await page.getByRole('button', { name: 'Assistir demonstração' }).click();
    await expect(page.locator('iframe')).toHaveAttribute('src', /youtube-nocookie\.com\/embed\/PX13v8miNRI/);

    await page.goto('/guia-pratico/prevencao-assaduras');
    await expect(page.getByRole('heading', { name: 'Vídeo tutorial' })).toBeVisible();
    await expect(page.locator('iframe')).toHaveCount(0);
    await page.getByRole('button', { name: 'Assistir demonstração' }).click();
    await expect(page.locator('iframe')).toHaveAttribute('src', /youtube-nocookie\.com\/embed\/ono7FGI-MyU/);

    await page.goto('/guia-pratico/prevencao-quedas');
    await expect(page.getByRole('heading', { name: 'Demonstração em vídeo' })).toBeVisible();
    await expect(page.locator('iframe')).toHaveCount(0);
    await page.getByRole('button', { name: 'Assistir demonstração' }).click();
    await expect(page.locator('iframe')).toHaveAttribute('src', /youtube-nocookie\.com\/embed\/3YyDC203_qg/);
  });

  test('runs the daily exercise session with complete, undo and reset actions', async ({ page }) => {
    await page.addInitScript(() => {
      for (const key of Object.keys(localStorage)) {
        if (key.startsWith('cuidaBemExercisesProgress_')) {
          localStorage.removeItem(key);
        }
      }
    });
    await page.goto('/tabs/health');

    await expect(page.getByText('0/10 exercicios')).toBeVisible();
    await page.getByRole('button', { name: /Abrir tutorial de Elevar os calcanhares/ }).click();
    const exerciseDialog = page.getByRole('dialog', { name: 'Elevar os calcanhares' });
    await expect(exerciseDialog).toBeVisible();
    await expect(page.getByText('Este exercicio ainda nao possui video cadastrado.')).toBeVisible();

    await exerciseDialog.getByRole('button', { name: 'Concluir exercicio' }).click();
    await expect(page.getByText('1/10 exercicios')).toBeVisible();
    await expect(exerciseDialog.getByRole('button', { name: 'Desfazer conclusao' })).toBeVisible();

    await exerciseDialog.getByRole('button', { name: 'Desfazer conclusao' }).click();
    await expect(page.getByText('0/10 exercicios')).toBeVisible();

    await exerciseDialog.getByRole('button', { name: 'Concluir exercicio' }).click();
    await exerciseDialog.getByRole('button', { name: 'Fechar', exact: true }).click();
    await expect(page.getByText('1/10 exercicios')).toBeVisible();

    await page.getByRole('button', { name: 'Reiniciar sessao de hoje' }).click();
    await expect(page.getByText('0/10 exercicios')).toBeVisible();
  });

  test('shows friendly not found state and keeps deep links after refresh', async ({ page }) => {
    await page.goto('/guia-pratico/rota-invalida');
    await expect(page.getByText('Guia não encontrado')).toBeVisible();

    await page.goto('/guia-pratico/higiene-bucal');
    await page.reload();
    await expect(page.getByRole('heading', { level: 1, name: 'Higiene Bucal' })).toBeVisible();
  });

  test('keeps guide cards responsive from desktop to mobile', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 900 });
    await page.goto('/tabs/agenda');

    const desktopColumns = await page.locator('.guide-list').first().evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').length
    );
    expect(desktopColumns).toBe(2);

    await page.setViewportSize({ width: 390, height: 844 });
    const mobileColumns = await page.locator('.guide-list').first().evaluate((element) =>
      getComputedStyle(element).gridTemplateColumns.split(' ').length
    );
    expect(mobileColumns).toBe(1);
  });
});
