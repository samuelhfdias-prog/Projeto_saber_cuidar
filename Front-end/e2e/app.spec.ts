import { expect, test } from '@playwright/test';

test.describe('CuidaBem app', () => {
  test('opens onboarding and reaches the home tab through login', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveURL(/\/onboarding$/);
    await expect(page.getByRole('heading', { name: /Cuidado diário/ })).toBeVisible();

    await page.getByRole('link', { name: 'Entrar no sistema' }).click();
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole('heading', { name: 'Bem-vindo de volta' })).toBeVisible();

    await page.getByPlaceholder('seu@email.com').fill('cuidador@cuidabem.test');
    await page.getByPlaceholder('Sua senha').fill('SenhaTeste#2026');
    await page.getByRole('button', { name: 'Entrar no sistema' }).click();
    await expect(page).toHaveURL(/\/tabs\/home$/);
    await expect(page.getByRole('heading', { name: 'Paciente Exemplo' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tarefas de Hoje' })).toBeVisible();
  });

  test('navigates across the main bottom tabs', async ({ page }) => {
    await page.goto('/tabs/home');

    const nav = page.locator('nav.bottom-nav');

    await nav.getByRole('link', { name: /Guia/ }).click();
    await expect(page).toHaveURL(/\/tabs\/agenda$/);
    await expect(page.getByRole('heading', { name: 'Guia Pratico' })).toBeVisible();

    await page.getByRole('link', { name: 'Abrir Proteção do Idoso' }).click();
    await expect(page).toHaveURL(/\/violence$/);
    await expect(page.getByRole('heading', { name: 'Proteção do Idoso' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Ligar 100' })).toBeVisible();
    await page.getByRole('link', { name: 'Voltar para Guia' }).click();
    await expect(page).toHaveURL(/\/tabs\/agenda$/);

    await page.getByRole('link', { name: 'Abrir guia Banho de Leito' }).click();
    await expect(page).toHaveURL(/\/guia-pratico\/banho-de-leito$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Banho de Leito' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Passo a passo' })).toBeVisible();
    await page.getByRole('button', { name: 'Assistir demonstração' }).click();
    await expect(page.locator('iframe[title="Banho de leito"]')).toBeVisible();
    await page.getByRole('link', { name: 'Voltar para Guia' }).click();
    await expect(page).toHaveURL(/\/tabs\/agenda$/);

    await nav.getByRole('link', { name: /IA Saude/ }).click();
    await expect(page).toHaveURL(/\/tabs\/medications$/);
    await expect(page.getByRole('heading', { name: 'Modulo de Saude' })).toBeVisible();

    await nav.getByRole('link', { name: /Exercicios/ }).click();
    await expect(page).toHaveURL(/\/tabs\/health$/);
    await expect(page.getByRole('heading', { name: 'Central de Exercicios' })).toBeVisible();

    await nav.getByRole('link', { name: /Bem-estar/ }).click();
    await expect(page).toHaveURL(/\/tabs\/profile$/);
    await expect(page.getByRole('heading', { name: 'Bem-estar do Cuidador' })).toBeVisible();
  });

  test('opens emergency information from the floating SOS link', async ({ page }) => {
    await page.goto('/tabs/home');

    await page.getByRole('link', { name: 'Abrir emergencia' }).click();

    await expect(page).toHaveURL(/\/emergency$/);
    await expect(page.getByRole('heading', { name: 'Acionar ajuda' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Ligar para emergencia' })).toHaveAttribute('href', 'tel:192');
    await expect(page.getByText('Profissional de Saude Exemplo')).toBeVisible();
  });

  test('shows a friendly 404 page for unknown routes', async ({ page }) => {
    await page.goto('/rota-inexistente');

    await expect(page.getByRole('heading', { name: 'Pagina nao encontrada' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Voltar ao inicio' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Tentar novamente' })).toBeVisible();
  });
});
