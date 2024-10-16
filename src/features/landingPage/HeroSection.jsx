import { Link } from "react-router-dom"
import imgAlta from "../../assets/images/alta.png"
import Button from "../../components/common/Button.jsx"
import '../../assets/styles/HeroSection.css'
import ContainerLandingPage from "../../components/layout/ContainerLandingPage.jsx"

export default function HeroSection() {
    return (
        <ContainerLandingPage>
            <section className="hero_section">
                <section className="secao_textos">
                    <h1>Controle seu <span>dinheiro</span> e alcance seus <span>objetivos financeiros!</span></h1>
                    <p>Sabemos que organizar suas finanças é desafiador. Por isso, criamos uma plataforma simples e segura para ajudá-lo a alcançar suas metas com facilidade.</p>
                    <Link to='/register'>
                        <Button textBtn="Cadastre-se Grátis" btnOther='btn_other'/>
                    </Link>
                </section>
                <div className="img">
                    <img src={imgAlta} alt="img ilustrativa" />
                </div>
            </section>
        </ContainerLandingPage>
    )
}