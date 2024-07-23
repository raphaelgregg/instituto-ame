import { Facebook, Heart, Instagram, Mail } from "lucide-react";

export function Header() {
    return (
        <nav className="max-w-7xl m-auto h-20 flex items-center gap-8">
            <div className="flex justify-between flex-1">
                <a href="/">
                    <img src="./logo.svg" alt="logo ama+" />
                </a>
                
                <ul className="flex flex-1 justify-center items-center gap-8">
                    <li><a href="/">Instituto</a></li>
                    <li><a href="/about">Como ajudar?</a></li>
                    <li><a href="/project">Projetos</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <a target="_blank" href="https://www.facebook.com/Institutoamemais"><Facebook size={20} /></a>
                    <a target="_blank" href="mailto:dalilla.gestora@gmail.com"><Mail size={20} /></a>
                    <a target="_blank" href="https://www.instagram.com/institutoamemais/"><Instagram size={20} /></a>
                </div>
            </div>

            <button className="flex items-center gap-2 text-white font-semibold bg-torch-500 px-4 py-2 rounded-md">
                <Heart size={20} />
                Doar agora?
            </button>
        </nav>
    )
}