# ButtonComponent

Un componente de boton visualmente estilizado con Tailwind.


## Props

| Prop          | Tipo                  | Descripción                   |
| ------------- | --------------------- | ----------------------------- |
| vatriant       | Variant               | color de theming             |
| type           | ButtonType            | tipo del boton               |
| disabled       | boolean               | activa o desactiva el boton  |

## Temas

- Usa colores del `ThemeService`
  - `primary`
  - `secondary`
  - `accent`
  - `info`
  - `base`

default `primary`
## Type
- Usa colores del `ThemeService`
  - `button`
  - `submit`

default `button`
## Uso

```html
<todo-button variant="primary" type="submit">Aceptar</todo-button>
<todo-button variant="secondary" [disabled]="true">>Aceptar</todo-button>
<todo-button variant="accent">>Aceptar</todo-button>
<todo-button variant="info">>Aceptar</todo-button>
<todo-button variant="base"></todo-button>
