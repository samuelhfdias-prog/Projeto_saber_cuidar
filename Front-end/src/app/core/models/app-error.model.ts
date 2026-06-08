export type AppErrorStatus = 0 | 400 | 401 | 403 | 404 | 408 | 413 | 422 | 429 | 500;

export interface AppErrorMessage {
  status: AppErrorStatus;
  message: string;
}
