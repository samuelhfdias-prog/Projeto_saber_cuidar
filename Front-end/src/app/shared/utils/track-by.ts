export interface Identifiable {
  id: string;
}

export function trackById<T extends Identifiable>(_index: number, item: T): string {
  return item.id;
}
