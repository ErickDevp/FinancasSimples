import CustomerReviewCard from "../../components/common/CustomerReviewCard";
import ContainerLandingPage from "../../components/layout/ContainerLandingPage";
import '../../assets/styles/FeedbackSection.css'

export default function FeedbackSection() {
    return (
        <ContainerLandingPage>
            <section className="feedback_section">
                <h1>Depoimentos de Clientes  <br /> <span>Satisfeitos</span></h1>
                <section className="feedbacks">
                    <CustomerReviewCard 
                        feedback='O uso da plataforma transformou a forma como eu gerencio minhas finanças. Com relatórios claros e gráficos detalhados, finalmente consigo acompanhar meus investimentos e despesas com facilidade. Recomendo para todos!' 
                        name='Ana Souza, Empresária'
                    />
                    <CustomerReviewCard 
                        feedback='Nunca foi tão simples organizar minhas finanças. A ferramenta é intuitiva e me ajuda a manter o controle dos meus gastos e a planejar meus próximos passos financeiros. Estou muito satisfeito!' 
                        name='João Pereira, Engenheiro'
                    />
                </section>
            </section>
        </ContainerLandingPage>
    )
}