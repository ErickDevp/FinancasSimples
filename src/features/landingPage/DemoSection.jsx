import ContainerLandingPage from '../../components/layout/ContainerLandingPage.jsx'
import '../../assets/styles/DemoSection.css'

export default function DemoSection() {
    return (
        <ContainerLandingPage background='#fff'>
            <section className='demo_section'>
                <section className='demo_text'>
                    <h1>Veja Como É Fácil Gerenciar <br /> <span style={{color: '#008F5A'}}>Suas Finanças</span></h1>
                    <p>Assista ao vídeo e descubra como nossa plataforma transforma a gestão financeira em algo simples e eficiente, com gráficos claros, relatórios detalhados e um planejamento de metas intuitivo.</p>
                </section>
                <div className='video'>
                <iframe
                    src="https://www.youtube.com/embed/L3Mwktq4GEg?si=pmQVfX0BnRc6BdND"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
                </div>
            </section>
        </ContainerLandingPage>
    )
}