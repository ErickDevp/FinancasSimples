import ContainerLandingPage from "../../components/layout/ContainerLandingPage.jsx";
import Button from '../../components/common/Button.jsx'
import '../../assets/styles/ContactFormSection.css'

export default function ContactFormSection() {
    return (
        <ContainerLandingPage background='#fff'>
            <section className="contact_form_section">
                <div className="text_contact">
                    <h1>Contato</h1>
                    <p>Você tem mais alguma dúvida? Por favor, entre em contato.</p>
                </div>

                <form>
                    <div className="inputs_div">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" name="name"/>
                    </div>
                    <div className="inputs_div">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div className="inputs_div">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea name="mensagem" id="mensagem"></textarea>
                    </div>

                    <div style={{textAlign: 'center'}}>
                        <p style={{ padding: '20px 0 40px'}}>NÂO SOU UM ROBO</p>
                        <Button textBtn='Enviar'/>
                    </div>
                </form>
            </section>

        </ContainerLandingPage>
    )
}