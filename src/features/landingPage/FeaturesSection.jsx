import ContentBlock from '../../components/common/ContentBlock.jsx'
import ContainerLandingPage from '../../components/layout/ContainerLandingPage.jsx'
import '../../assets/styles/FeaturesSection.css'

export default function FeaturesSection() {
    return (
        <ContainerLandingPage background='#fff'>
            <section className='features_section'>
                <h1>Transforme Suas Finanças 
                com  <br /> <span>Simplicidade e Eficiência</span></h1>
                <section className='info_section'>
                    <ContentBlock 
                        title='Controle' 
                        text='Gerencie todas as suas finanças em um só lugar.'
                    />
                    <ContentBlock 
                        title='Planejamento' 
                        text='Crie metas financeiras e acompanhe seu progresso com relatórios personalizados.'
                    />
                    <ContentBlock 
                        title='Visão' 
                        text='Veja suas despesas, investimentos e metas de forma simples e organizada.'
                    />
                </section>
                <div className='bar'></div>
            </section>
        </ContainerLandingPage>
    )
}