export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
  appUrl: '',
  supportUrl: '',
  maxImageUploadBytes: 5 * 1024 * 1024,
  maxVideoUploadBytes: 50 * 1024 * 1024,
  allowedImageMimeTypes: ['image/jpeg', 'image/png', 'image/webp'],
  allowedVideoMimeTypes: ['video/mp4', 'video/webm', 'video/quicktime'],
  allowedExternalHosts: ['www.youtube.com', 'youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com']
} as const;
