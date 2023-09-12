import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: any): void {
    if (!key || !value) { return; }

    // Si el valor es un objeto o array, lo convertimos a cadena JSON
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }

  get(key: string): any {
    const value = localStorage.getItem(key);
    try {
      // Intentamos convertir la cadena guardada a un objeto o array
      return JSON.parse(value);
    } catch (e) {
      // Si no es posible, retornamos la cadena tal cual
      return value;
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
