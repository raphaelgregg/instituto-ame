import { HandCoins, HandHeart, Handshake } from "lucide-react"

export function Home() {
    return (
        <div>
            <div className="bg-banner-brief bg-no-repeat bg-cover bg-center h-160">
                <div className="bg-azure-500/35 w-full h-full ">
                    <div className="max-w-7xl m-auto h-full flex flex-col items-start gap-10 pt-56">
                        <h1 className="text-5xl font-bold text-azure-50">Desperte o conhecimento,<br/>escolha educar</h1>

                        <p className="text-neutral-200 text-2xl">Transformamos estudo em aventura, desafios<br /> em conquistas e cada criança em um universo<br /> de possibilidades. Apoiar a educação é <br /> construir um futuro brilhante para cada <br /> coração.</p>
                    </div>
                </div>            
            </div>

            <div className="max-w-7xl flex gap-5 justify-center m-auto py-10">
                <div className="w-96 h-28 flex items-center gap-5 bg-azure-500 rounded-xl p-4 shadow-custom">
                    <HandHeart className="text-neutral-100" size={100} strokeWidth="1" />
                    <div>
                        <h6 className="text-2xl text-neutral-100">Como ajudar?</h6>
                        <p className="text-base text-neutral-100">Precisamos de toda colaboração, que a solidariedade inspire</p>
                    </div>
                </div>

                <div className="w-96 h-28 flex items-center gap-5 bg-azure-50 rounded-xl p-4 shadow-custom">
                    <Handshake className="text-azure-500" size={90} strokeWidth="1" />
                    <div>
                        <h6 className="text-2xl text-azure-500">Como ajudar?</h6>
                        <p className="text-base text-neutral-700">Precisamos de toda colaboração, que a solidariedade inspire</p>
                    </div>
                </div>

                <div className="w-96 h-28 flex items-center gap-5 bg-azure-50 rounded-xl p-4 shadow-custom">
                    <HandCoins className="text-azure-500" size={100} strokeWidth="1" />
                    <div>
                        <h6 className="text-2xl text-azure-500">Como ajudar?</h6>
                        <p className="text-base text-neutral-700">Precisamos de toda colaboração, que a solidariedade inspire</p>
                    </div>
                </div>
            </div>
        </div>
    )
}