import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { Header, Footer } from "./components/organisms";

import type { Route } from "./+types/root";
import "./app.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teste CI/CD" },
    { name: "description", content: "Teste bem sucedido!" },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col selection:bg-blue-200 selection:text-blue-900">
        
        {/* Navbar Moderna */}
        <Header/>

        {/* Área de Conteúdo */}
        <main className="flex-1 w-full max-w-5xl mx-auto p-6 md:p-8 animate-in fade-in duration-500">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            {children}
          </div>
        </main>

        {/* Rodapé */}
        <Footer/>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Ops! Ocorreu um erro inesperado.";
  let details = "Nossa equipe já foi notificada. Tente novamente mais tarde.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "Página não encontrada" : `Erro ${error.status}`;
    details =
      error.status === 404
        ? "A página que você está procurando não existe ou foi movida."
        : error.statusText;
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[70vh]">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-inner">
          !
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">{message}</h1>
        <p className="text-slate-500 mb-8">{details}</p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 hover:shadow-md transition-all active:scale-95"
        >
          Voltar para o Início
        </a>
      </div>
    </main>
  );
}