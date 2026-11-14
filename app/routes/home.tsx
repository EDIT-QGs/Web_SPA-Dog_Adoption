import type { Route } from "./+types/home";
import { Badge } from "../components/badge";

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

      {/* Teste das variações do componente <Badge/> */}
      <div className="flex gap-2 mt-4">
        <Badge variant="success" label="Disponível" />
        <Badge variant="warning" label="Médio Porte" />
        <Badge variant="neutral">Cachorro</Badge>
      </div>
    </div>
  );
}