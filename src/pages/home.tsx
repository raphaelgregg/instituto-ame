import { HandCoins, HandHeart, Handshake } from "lucide-react"
import { Carousel } from "../components/carousel";

export function Home() {
    const settings = {
        spaceBetween: 32,
        slidesPerView: 4,
    }

    return (
        <div>
            {/* BRIEF */}
            <div className="bg-banner-brief bg-no-repeat bg-cover bg-center h-160">
                <div className="bg-azure-500/35 w-full h-full ">
                    <div className="max-w-7xl m-auto h-full flex flex-col items-start gap-10 pt-56">
                        <h1 className="text-5xl font-bold text-azure-50">Desperte o conhecimento,<br/>escolha educar</h1>

                        <p className="text-neutral-200 text-2xl">Transformamos estudo em aventura, desafios<br /> em conquistas e cada criança em um universo<br /> de possibilidades. Apoiar a educação é <br /> construir um futuro brilhante para cada <br /> coração.</p>
                    </div>
                </div>            
            </div>

            {/* DONATION */}
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

            {/* About */}
            <div className="max-w-7xl flex gap-20 justify-center m-auto py-10">
                <img src="/children1.png" alt="criança escrevendo" />
                <div className="px-5 py-9 flex flex-col gap-5 max-w-xl">
                    <h2 className="text-4xl font-bold">Descubra Nossa Trajetória</h2>
                    <p>Somos uma ONG dedicada ao bem-estar e ao futuro das crianças. Nosso projeto de reforço escolar visa proporcionar oportunidades educacionais excepcionais para crianças de comunidades carentes. Acreditamos que cada criança merece acesso igualitário à educação e, por isso, oferecemos suporte acadêmico personalizado para ajudá-las a alcançar seu pleno potencial. Com uma equipe dedicada de educadores e voluntários apaixonados, trabalhamos incansavelmente para inspirar e capacitar nossos alunos a construir um futuro brilhante. </p>

                    <p className="font-bold">Junte-se a nós nesta missão de transformar vidas através da educação</p>

                    <ol className="flex flex-col gap-4 list-decimal pl-5">
                        <li>Educação para todos</li>
                        <li>Transformando vidas através da educação</li>
                        <li>Juntos por um futuro melhor</li>
                    </ol>
                </div>
            </div>

            {/* objective */}
            <div className="max-w-7xl flex justify-evenly m-auto py-24">
                <div className="max-w-72 flex flex-col gap-6">
                    <header className="flex items-center gap-3">
                        <img src="/target.svg"/>
                        <h3 className="text-3xl text-azure-800 font-bold">Missão</h3>
                    </header>

                    <p className="text-azure-800">Nosso objetivo é promover a inclusão social de crianças, adolescentes e famílias em situação de vulnerabilidade através de atividades socioeducativas, culturais e esportivas. Junte-se a nós para construir um futuro mais justo e igualitário para todos</p>
                </div>

                <div className="max-w-72 flex flex-col gap-6">
                    <header className="flex items-center gap-3">
                        <img src="/eyes.svg"/>
                        <h3 className="text-3xl text-azure-800 font-bold">Missão</h3>
                    </header>

                    <p className="text-azure-800">Nosso objetivo é cultivar o bem-estar físico e emocional das crianças da comunidade, capacitando-as a se tornarem adultos resilientes e contribuírem para o progresso da sociedade. Junte-se a nós nesta jornada de fortalecimento e transformação!</p>
                </div>

                <div className="max-w-72 flex flex-col gap-6">
                    <header className="flex items-center gap-3">
                        <img src="/diamond.svg"/>
                        <h3 className="text-3xl text-azure-800 font-bold">Missão</h3>
                    </header>

                    <p className="text-azure-800">Pertencimento, Comprometimento, Empatia, Família, Responsabilidade social</p>
                </div>
            </div>

            {/* ODS */}
            <div className="max-w-7xl flex flex-col items-center gap-10 m-auto py-24">
                <img className="w-80 h-80" src="/ods.png" />
                <h3 className="text-3xl text-center font-bold max-w-4xl">Estamos fazendo a nossa parte para alcançar os Objetivos de Desenvolvimento Sustentável</h3>

                <div className="grid grid-cols-3 gap-x-14 gap-y-5">
                    <img src="/ods-3.png" />
                    <img src="/ods-4.png" />
                    <img src="/ods-5.png" />
                    <img src="/ods-8.png" />
                    <img src="/ods-10.png" />
                    <img src="/ods-17.png" />
                </div>
            </div>

            {/* PROJECTS */}
            <div className="max-w-7xl flex justify-evenly m-auto py-24">
                <h2 className="text-4xl font-bold">Nossos projetos</h2>
                <p className="text-gray-700">Projetos que Transformam Vidas e Constroem Futuros Brilhantes</p>

                <div>

                </div>
            </div>

            {/* PARCERIAS */}
            <div className="max-w-7xl flex flex-col items-center gap-4 m-auto py-24">
                <h2 className="text-4xl font-bold">Empresas parceiras</h2>
                <p className="text-gray-700">Seja uma empresa parceira dos nossos projetos agora! <a href="#" className="font-bold text-red-500">[Aqui]</a></p>

            </div>
        </div>
    )
}