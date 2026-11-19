import {Link} from "react-router"
import Logo from '../../assets/pata-background.svg'

interface NavItem {
  label: string;
  to: string;
  destaque?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Sobre", to: "/sobre" },
  { label: "Cuidado pet", to: "/cuidado-pet" },
  { label: "Quero adotar", to: "/quero-adotar" },
  { label: "Como funciona", to: "/como-funciona" },
  { label: "Pet perdido", to: "/pet-perdido", destaque: true },
];

export function Header(){
    return (
        <header className="bg-[#F2EBDD] backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 text-[#30291F]">
            <div className="max-w-7xl mx-auto gap-10 px-4 h-20 flex items-center justify-between">
            
                {/* Logo e Título */}
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-13 rounded-xl bg-[#FFFCF7]" />

                    <div className="flex w-fit flex-col">
                        <span className="text-[30px] leading-none font-semibold">
                            PataNova
                        </span>
                        <span className="-mt-0.5 self-end text-[12px] leading-tight">
                            adoção que aproxima
                        </span>
                    </div>
                </div>

                {/* Botões de ações */}
                <nav className="flex items-center gap-0.5 text-sm font-medium text-[#3D2E24]">
                    {NAV_ITEMS.map((item) => (
                        <Link
                        key={item.to}
                        to={item.to}
                        className={`rounded-lg px-3 py-1.5 transition-colors ${
                            item.destaque
                            ? "bg-[#F3E5CE] hover:bg-[#ead6b5]"
                            : "hover:bg-[#F3E5CE]/60"
                        }`}
                        >
                        {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Cadastro e Divulgar */}
                <div className="flex items-center gap-5">
                    <Link 
                    to="/entrar"
                    className="text-sm font-semibold text-[#2B2118] transition-opacity hover:opacity-75"
                    >
                        Entrar
                    </Link>

                    <Link
                    to="/divulgar-animal"
                    className="rounded-xl bg-[#E5A93B] px-5 py-2.5 text-sm font-medium text-[#2B2118] transition-colors hover:bg-[#d69a2e]"
                    >
                        Divulgar um animal
                    </Link>
            
                </div>
            </div>
        </header>
        
    );
}