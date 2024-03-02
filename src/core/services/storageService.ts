import {Task} from "@core/types/task";

export const StorageService = {
  saveValue: async (value: Task[]) => {
    try {
      const valueToSave = value || [];
      localStorage.setItem('tasks', JSON.stringify(valueToSave));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getValue: async () => {
    try {
      const savedValue = localStorage.getItem('tasks');
      return Promise.resolve(savedValue ? JSON.parse(savedValue) as Task[] : []);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};