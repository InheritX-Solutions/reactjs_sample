export class StorageService {
  private storage: Storage;

  constructor(storage: Storage = localStorage) {
    this.storage = storage;
  }

  get<T>(key: string): T | null {
    try {
      const item = this.storage.getItem(key);
      if (!item) return null;
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error retrieving ${key} from storage:`, error);
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting ${key} in storage:`, error);
    }
  }

  remove(key: string): void {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from storage:`, error);
    }
  }

  clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}

export const storageService = new StorageService();
