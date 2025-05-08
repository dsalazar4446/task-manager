import { LocalStorageService } from './localstorage.service';
import { Injectable } from '@angular/core';
import { Theme } from '../types/theme.type';
import { Variant } from '../types/variant.type';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themes: Record<string, Record<Variant, string>> = {
    dark: {
      primary: 'bg-blue-900 text-white',
      secondary: 'bg-sky-950 text-white',
      accent: 'bg-indigo-900 text-white',
      info: 'bg-green-600 text-black',
      warning: 'bg-amber-500 text-black',
      danger: 'bg-rose-900 text-white',
      base: 'bg-slate-900 text-white',
    },
    light: {
      primary: 'bg-blue-700 text-white',
      secondary: 'bg-sky-800 text-white',
      accent: 'bg-indigo-600 text-white',
      info: 'bg-green-500 text-black',
      warning: 'bg-amber-400 text-black',
      danger: 'bg-rose-800 text-white',
      base: 'bg-slate-100 text-black',
    },
  };
  private currentTheme = 'light';
  constructor( private localStorage: LocalStorageService) {}

  setTheme(name: string) {
    
    if (this.themes[name]) {
      this.currentTheme = name;
    } else {
      console.warn(`Theme '${name}' not found. Keeping current theme.`);
    }
  }

  getThemeClasses(variant: Variant): string {
    const theme = this.themes[this.currentTheme];
    return theme[variant] ?? theme['primary'];
  }

  // (opcional) permite registrar nuevos temas dinámicamente
  registerTheme(name: string, theme: Theme) {
    this.themes[name] = theme;
  }

  
  saveCurrentTheme() {
    this.localStorage.setItem('currentTheme', this.currentTheme);
  }

  get current(): string {
    const storedTheme = this.localStorage.getItem('currentTheme');
    if (storedTheme) {
      this.currentTheme = storedTheme;
    } else {
      this.localStorage.setItem('currentTheme', this.currentTheme);
    }
    return this.currentTheme;
  }


}
