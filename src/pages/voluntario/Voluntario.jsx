import s from './voluntario.module.scss'

const Vonluntario = () => {
  return (
    <main>
          <section className={s.sectionVoluntario}>
            <div className={s.voluntario}> 
            <h2>Seja Voluntário</h2>
            <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
            </div>
    
            <div className={s.boxCardsVoluntario}>
              <article>
                <h3>Impacto Direto</h3>
                <p>Sua dedicação salva vidas e transforma comunidades</p>
              </article>
              <article>
                <h3>Crescimento Pessoal</h3>
                <p>Desenvolva habilidades e cresça profissionalmente</p>
              </article>
              <article>
                <h3>Comunidade</h3>
                <p>Faça parte de uma rede de profissionais comprometidos</p>
              </article>              
            </div>
          </section>
    
          <section className={s.sectionInscricao}>
            <div className={s.inscricao}>
              <h2>Inscrição para Voluntários</h2>

              <form className={s.form}>
                <h3>Dados Pessoais</h3>

                <div className={s.formInscricao}>
                  <input type="text" placeholder="Seu Nome *" />
                  <input type="email" placeholder="Seu Email *" />
                </div>

                <input className={s.telefone} type="tel" placeholder="Seu Telefone *" />

                <h3>Mensagem Adicional</h3>

                <textarea placeholder="Conte-nos porque você quer ser voluntário..."  />

                <p className={s.mensagem}> Entraremos em contato para mais informações </p>

                <button type="submit">Enviar Inscrição</button>
                
              </form>
            </div>
          </section>
    
          
        </main>
  )
}

export default Vonluntario