
import s from './footer.module.scss'
import Logo  from '../../assets/logo.png'
import Frame  from '../../assets/frame.png'
import Telefone  from '../../assets/telefone.png'
import Localizacao  from '../../assets/localizacao.png'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.BoxLogo}>
        <img src={Logo} alt="Imagem de logo do site Médicos Voluntários" />        
        <h2>Médicos & Dentistas</h2>        
        <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
      </div>

      <div className={s.BoxContato}>              
        <h2>Contato</h2>  
        <img src={Frame} alt="Imagem de email" />        
        <p>contato@medico-dentista.org</p>

        <img src={Telefone} alt="Imagem de telefone" />        
        <p>(11) 3000-0000</p>

        <img src={Localizacao} alt="Imagem de localizacao" />        
        <p>São Paulo, Brasil</p>
      </div>

      <div className={s.BoxRedes}>              
        <h2>Redes Sociais</h2>  
            
        <a href="https://facebook.com" target="_blank">Facebook</a>
            
        <a href="https://instagram.com" target="_blank">Instagram</a>
           
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>

      <div className={s.direitos}>
        <h2>© 2025 Médicos e Dentistas pela Comunidade. Todos os direitos reservados.</h2>
      </div>
      
      
    </footer>
  )
}

export default Footer