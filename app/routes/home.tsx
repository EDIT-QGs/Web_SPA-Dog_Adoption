import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teste CI/CD router cloud" },
    { name: "description", content: "Teste bem sucedido!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
