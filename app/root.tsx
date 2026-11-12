import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  NavLink
} from "react-router";

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
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            
            {/* Logo Simples */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                W
              </div>
              <span className="font-semibold text-lg tracking-tight text-slate-800">
                Workspace
              </span>
            </div>

            {/* Links de Navegação */}
            <nav className="flex gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                Início
              </NavLink>
              <NavLink
                to="/teste"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                Ambiente de Teste
              </NavLink>
            </nav>
          </div>
        </header>

        {/* Área de Conteúdo */}
        <main className="flex-1 w-full max-w-5xl mx-auto p-6 md:p-8 animate-in fade-in duration-500">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            {children}
          </div>
        </main>

        {/* Rodapé */}
        <footer className="py-6 text-center text-sm text-slate-500 font-medium">
          &copy; {new Date().getFullYear()}
        </footer>

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