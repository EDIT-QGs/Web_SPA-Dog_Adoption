import { useState } from "react";
import type { Route } from "./+types/home";

import { Badge , Input } from "../components/atoms";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teste CI/CD" },
    { name: "description", content: "Bem-vindo ao teste" },
  ];
}

export default function Home() {
  const [nome, setNome] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="p-6" style={{ fontFamily: 'sans-serif' }}>
      <h2>Página Inicial</h2>
      <p>O ambiente de teste está limpo e pronto a ser utilizado.</p>

      {/* Teste das variações do componente <Badge/> */}
      <div className="flex gap-2 mt-4">
        <Badge variant="success" label="Disponível" />
        <Badge variant="warning" label="Médio Porte" />
        <Badge variant="neutral">Cachorro</Badge>
      </div>

      {/* Teste do Input */}
      <div className="flex flex-col gap-4 mt-6 max-w-md">
        <Input
          label="Nome do Pet"
          placeholder="Ex: Bento"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <Input
          label="Senha"
          type={mostrarSenha ? "text" : "password"}
          placeholder="Digite sua senha"
          rightIcon={
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
            >
              {mostrarSenha ? "Ocultar" : "Ver"}
            </button>
          }
        />

        <Input
          label="E-mail"
          type="email"
          defaultValue="email-invalido.com"
          error="Por favor, insira um endereço de e-mail válido."
        />
      </div>
    </div>
  );
}