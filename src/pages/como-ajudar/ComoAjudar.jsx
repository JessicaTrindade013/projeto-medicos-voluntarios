import s from './comoAjudar.module.scss'

const ComoAjudar = () => {
  return (
    <main className={s.container}>
      <section className={s.header}>
        <h1>Como você pode ajudar</h1>
        <p>Existem várias formas de contribuir para que esse projeto continue transformando vidas.</p>
      </section>

      <section className={s.cards}>
        <article>
          <h2>Seja Voluntário</h2>
          <p>
            Profissionais da área da saúde podem doar seu tempo e conhecimento
            para atender quem mais precisa.
          </p>
        </article>

        <article>
          <h2>Doe Recursos</h2>
          <p>
            Contribuições financeiras ajudam na compra de materiais médicos,
            medicamentos e equipamentos.
          </p>
        </article>

        <article>
          <h2>Divulgue o Projeto</h2>
          <p>
            Compartilhe nossa iniciativa e ajude a alcançar mais pessoas que
            precisam de atendimento.
          </p>
        </article>
      </section>
    </main>
  )
}

export default ComoAjudar
