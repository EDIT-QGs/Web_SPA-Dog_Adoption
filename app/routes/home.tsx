import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teste CI/CD" },
    { name: "description", content: "Bem-vindo ao teste" },
  ];
}

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h2>Página Inicial</h2>
      <p>O ambiente de teste está limpo e pronto a ser utilizado.</p>
    </div>
  );
}