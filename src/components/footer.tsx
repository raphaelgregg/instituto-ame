import { Facebook, Mail, Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <div className="bg-azure-500 text-azure-100 py-8 absolute inset-x-0 bottom-0">
            <div className="max-w-7xl m-auto flex flex-col gap-8">
                <div className="flex justify-between items-center">
                    <img
                        className="h-28" 
                        src="./logo2.svg" 
                        alt="logotipo" />

                    <div className="space-y-4">
                        <div className="flex gap-8">
                            <a target="_blank" href="tel:+5527999993945" className="flex gap-3 items-center">
                                <Phone /> (27) 99999-3945
                            </a>
                            <a target="_blank" href="mailto:dalilla.gestora@gmail.com" className="flex gap-3 items-cente">
                                <Mail /> dalilla.gestora@gmail.com
                            </a>
                        </div>
                
                        <a target="_blank" href="https://www.google.com/maps/place/R.+da+Estiva,+439+-+Santa+Martha,+Vit%C3%B3ria+-+ES,+29048-065/@-20.2857616,-40.3111702,17z/data=!3m1!4b1!4m6!3m5!1s0xb817fd892684f7:0x92014723e278cefe!8m2!3d-20.2857616!4d-40.3085953!16s%2Fg%2F11csl9kbw8?entry=ttu" className="flex gap-3 items-center">
                            <MapPin />R. da Estiva, 439 - Santa Martha, Vitória - ES, 29048-065
                        </a>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <div className="text-lg leading-5">Instituto <br />Ame Mais</div>
                        
                        <span className="border-solid border-l border-white" />

                        <div className="flex items-center gap-4 ">
                            <a target="_blank" href="https://www.facebook.com/Institutoamemais">
                                <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full">
                                    <Facebook size={20} />
                                </div>
                            </a>
                            
                            <a target="_blank" href="mailto:dalilla.gestora@gmail.com" className="flex gap-3 items-cente">
                                <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full">
                                    <Mail size={20} />
                                </div>
                            </a>

                            <a target="_blank" href="https://www.instagram.com/institutoamemais/" className="flex gap-3 items-cente">
                                <div className="w-10 h-10 flex items-center justify-center border-2 rounded-full">
                                    <Instagram size={20} />
                                </div>
                            </a>
                        </div>
                    </div>
                    <span className="flex items-center">© 2024 Raphael Gregg. All rights reserved</span>
                </div>
            </div>
        </div>
    )
}