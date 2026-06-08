export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  appUrl: 'http://localhost:8100',
  supportUrl: '',
  maxImageUploadBytes: 5 * 1024 * 1024,
  maxVideoUploadBytes: 50 * 1024 * 1024,
  allowedImageMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
  allowedVideoMimeTypes: ['video/mp4', 'video/webm', 'video/quicktime'],
  allowedExternalHosts: ['www.youtube.com', 'youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com']
} as const;
