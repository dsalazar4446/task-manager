# ToggleComponent

Un componente tipo interruptor deslizante (toggle slide) visualmente estilizado con Tailwind.

## Props

| Prop          | Tipo                  | Descripción                   |
| ------------- | --------------------- | ----------------------------- |
| checked       | boolean               | Estado actual del toggle      |
| checkedChange | EventEmitter<boolean> | Se emite al cambiar de estado |

## Temas

- Usa colores del `ThemeService`
  - `accent`: para `true`
  - `danger`: para `false`

## Uso

```html
<app-toggle-slide [(checked)]="activo"></app-toggle-slide>