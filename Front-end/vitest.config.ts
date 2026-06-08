import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.spec.ts'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default']
  }
});
