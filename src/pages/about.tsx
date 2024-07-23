export function About() {
    return (
        <div className="flex flex-col gap-10">
            <div className="bg-banner-header bg-no-repeat bg-cover h-64">
                <div className="bg-azure-500/35 w-full h-full ">
                    <div className="max-w-7xl m-auto h-full flex items-end py-14">
                        <h1 className="text-5xl font-bold text-azure-50">O instituto</h1>
                    </div>
                </div>
                
            </div>

            <section className="max-w-7xl m-auto flex gap-5">
                <img className="w-500 h-full rounded-3xl" src="/children1.png" alt="criança escrevendo no caderno" />

                <div className="max-w-3xl px-5 flex flex-col gap-5">
                    <h2 className="text-4xl font-bold text-neutral-700">Nossa Trajetória</h2>

                    <p className="text-neutral-600">
                    Somos uma organização não-governamental comprometida com o bem-estar e o futuro das crianças. Nosso instituto de acolhimento é dedicado a oferecer um ambiente seguro, acolhedor e estimulante para crianças em situação de vulnerabilidade, com foco especial em sua educação e desenvolvimento integral.
                    <br />
                    <br />
                    Nosso projeto de reforço escolar é uma das principais iniciativas, proporcionando oportunidades educacionais de alta qualidade para crianças de comunidades carentes. Acreditamos que cada criança tem o direito a uma educação igualitária e de excelência, e, por isso, oferecemos suporte acadêmico personalizado, adaptado às necessidades individuais de cada aluno.
                    <br />
                    <br />
                    Contamos com uma equipe dedicada de educadores experientes e voluntários apaixonados, que trabalham incansavelmente para criar um ambiente de aprendizado envolvente e motivador. Nossa metodologia inclui aulas de reforço em disciplinas fundamentais, atividades lúdicas e culturais, além de suporte emocional e psicológico, visando o desenvolvimento completo das crianças.
                    <br />
                    <br />
                    Além das atividades acadêmicas, promovemos workshops, oficinas e eventos que estimulam a criatividade, a autoestima e a socialização, preparando nossos alunos não apenas para o sucesso escolar, mas também para a vida. Nossa missão é inspirar e capacitar essas crianças, ajudando-as a desenvolver habilidades e competências que serão essenciais para seu futuro.
                    <br />
                    <br />
                    Acreditamos que, ao investir na educação e no desenvolvimento integral das crianças, estamos plantando as sementes de um futuro mais justo e promissor. Nosso compromisso é contínuo e nossa visão é de um mundo onde todas as crianças tenham a oportunidade de alcançar seu pleno potencial e contribuir positivamente para a sociedade.
                    <br />
                    <br />
                    Junte-se a nós nessa missão e ajude a transformar vidas por meio da educação. Cada criança que acolhemos representa uma nova esperança, e juntos podemos fazer a diferença.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl m-auto grid grid-cols-4 gap-10 py-16">
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
                <img className="w-52 h-52 rounded-xl" src="/children2.png" />
            </section>

            <section className="max-w-7xl m-auto flex flex-col gap-5 py-10">
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl font-bold text-neutral-700">Quem faz parte</h2>
                    <p className="text-neutral-600 max-w-xl">Educadores, profissionais e membros da comunidade, todos unidos pelo compromisso de proporcionar um futuro melhor para as crianças</p>
                </div>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="flex flex-col items-center">
                            <img src="/member1.png" />
                            <h4 className="text-2xl text-neutral-700 mt-2">Dalilla Pereira</h4>
                            <span className="text-neutral-500 mt-1">Presidente</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/member1.png" />
                            <h4 className="text-2xl text-neutral-700 mt-2">Dalilla Pereira</h4>
                            <span className="text-neutral-500 mt-1">Presidente</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/member1.png" />
                            <h4 className="text-2xl text-neutral-700 mt-2">Dalilla Pereira</h4>
                            <span className="text-neutral-500 mt-1">Presidente</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/member1.png" />
                            <h4 className="text-2xl text-neutral-700 mt-2">Dalilla Pereira</h4>
                            <span className="text-neutral-500 mt-1">Presidente</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/member1.png" />
                            <h4 className="text-2xl text-neutral-700 mt-2">Dalilla Pereira</h4>
                            <span className="text-neutral-500 mt-1">Presidente</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <img src="/member1.png" />
                            <h4 className="text-2xl text-neutral-700 mt-2">Dalilla Pereira</h4>
                            <span className="text-neutral-500 mt-1">Presidente</span>
                        </div>
                    </div>
            </section>
        </div>
    )
}