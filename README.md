PataNova - Web_SPA-Dog_Adoption

## Estrutura de arquivos abordados devido ao Atomic Design

```text
app/
├── assets/                 # Imagens, vídeos e SVGs estáticos
├── components/
│   ├── atoms/              # Blocos básicos e indivisíveis
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   └── index.ts
│   ├── molecules/          # Combinações simples de átomos
│   │   └── index.ts
│   ├── organisms/          # Seções complexas e independentes da UI
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── index.ts
│   └── templates/          # Esqueletos de layout (estrutura sem dados)
│       └── index.ts
└── routes/                 # Camada de "Pages" (recebe dados reais)
    └── home.tsx
```

>![Aviso](https://img.shields.io/badge/Aviso-0969da)
>Em cada pasta contém um arquivo `index.ts`, conhecido na comunidade TypeScript/React como **Barrel File** (arquivo barril). A função dele é centralizar as exportações de todos os componentes daquela pasta em um único ponto de entrada, deixando os imports no restante do projeto mais curtos e organizados. Exemplo:
>
> dentro de `app/components/atoms/index.ts`
> ```ts
> export { Badge } from "./Badge";
> export { Button } from "./Button";
> export { Input } from "./Input";
> export { Label } from "./Label";
> ```
>
> Dentro de qualquer outro arquivo a chamada segue mais simples 
> ```ts 
>import { Badge, Button, Input } from "../components/atoms";
>```


## Apresentação de Integrantes

Olá, me chamo **Cleandson Kayque** e estou completamente ansioso para prosseguir com o projeto. Além de poder conhecer novas ferramentas/tecnologias vou conseguir desenvolver minhas habilidades em conjunto com ótimos companheiros e tutores, estou animado para desenvolver projetos atrativos e de uma importância considerável.

Olá, me chamo **Yasmin** e espero que seja um local de aprendizado e de conexões.

Olá, me chamo **Lucas** e espero que este projeto seja uma oportunidade de aprender desenvolvimento web na prática, colaborar com a equipe e desenvolver uma boa aplicação.