import s from './footer.module.scss'
import Logo from '../../assets/logo.png'
import Frame from '../../assets/frame.png'
import Telefone from '../../assets/telefone.png'
import Localizacao from '../../assets/localizacao.png'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerTop}>
        <div className={s.BoxLogo}>
          <img src={Logo} alt="Imagem de logo do site Médicos Voluntários" />
          <h2>Médicos & Dentistas</h2>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={s.BoxContato}>
          <h2>Contato</h2>

          <div className={s.item}>
            <img src={Frame} alt="Email" />
            <p>contato@medico-dentista.org</p>
          </div>

          <div className={s.item}>
            <img src={Telefone} alt="Telefone" />
            <p>(11) 3000-0000</p>
          </div>

          <div className={s.item}>
            <img src={Localizacao} alt="Localização" />
            <p>São Paulo, Brasil</p>
          </div>
        </div>


        <div className={s.BoxRedes}>
          <h2>Redes Sociais</h2>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>

        <div className={s.direitos}>
        © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.
        </div>
        
      </div>

      
    </footer>
  )
}

export default Footer
