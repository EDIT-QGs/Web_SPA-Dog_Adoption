import {Link} from 'react-router'

import Logo from '../../assets/pata-no_background.svg'

const col_sobre = [
    {label: "Divulgar um animal", do: ""},
    {label: "Quero adotar", do: ""},
    {label: "Sou uma instituição", do: ""},
]
const col_ajuda = [
    {label: "Fale com a gentel", do: ""},
    {label: "Central de segurança", do: ""},
    {label: "Denunciar um anúncio", do: ""},
]

export function Footer(){
    return (
        <footer className="bg-[#30291F] text-[#F6EAD4] w-full py-6 ">
            
            <div className="max-w-7xl mx-auto flex flex-col gap-5">

                {}
                <div className="grid grid-cols-3">
                    {/* Logo e Título */}
                    <div className="flex flex-col gap-2">

                        <div className="flex items-center ">
                            <img src={Logo} alt="Logo" className="w-13 rounded-xl " />
                            <span className="text-[30px] leading-none font-semibold">
                                PataNova
                            </span>
                        </div>
                        <div className='flex flex-col gap-2'>                            
                            <span className="-mt-0.5  text-[12px] leading-tight">
                                Adoção que aproxima. Amor que fica
                            </span>
                            <span className='text-[12px] leading-tight'>
                                Adote com cuidado. 
                            </span>
                            <span className='text-[12px] leading-tight'>
                                Doe com responsabilidade.
                            </span>
                        </div>
                
                    </div>

                    <div></div>
                    
                    <div className='grid grid-cols-2 pt-2'>
                        {/* Explorar */}
                        <div className='flex  justify-end '>
                            <div className='flex flex-col gap-3'>
                                <span className='text-[15px]'>Explorar</span>
                                <div className='flex flex-col gap-1 text-[13px] '>
                                    {col_ajuda.map((item) => (
                                            <Link
                                            key={item.do}
                                            to={item.do}
                                            >
                                            {item.label}
                                            </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Precisa de ajuda */}
                        <div className='flex justify-end '>
                            <div className='flex flex-col gap-3'>
                                <span className='text-[15px]'>Precisa de Ajuda?</span>
                                <div className='flex flex-col gap-1 text-[13px] '>
                                    {col_sobre.map((item) => (
                                            <Link
                                            key={item.do}
                                            to={item.do}
                                            >
                                            {item.label}
                                            </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Copy e termo */}
                <div className="grid grid-cols-2 border-t pt-5 text-[11px]">
                    <div>
                        &copy; {new Date().getFullYear()}
                    </div>
                    <div className="flex gap-5 justify-end">
                        <span>Privacidade</span>
                        <span>Termo de uso</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}