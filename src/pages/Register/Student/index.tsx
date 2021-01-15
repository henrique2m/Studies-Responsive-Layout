import React from 'react';
import Comment from '../../../components/Comment';
import Container from '../../../components/Container';
import lara from '../../../assets/Images/lara.png';
export default function Student() {
  return (
    <Container>
      <section>
        <main>
          <h1>Formulário Aluno</h1>
        </main>
        <aside>
          <Comment
            avatar={lara}
            username="@lara"
            text="Eu tinha acabado de sair de um relacionamento, e eu e a Annie 
            estávamos começando a sair com mulheres e estávamos as duas nervosas 
            e indo devagar por um tempo! A gente se apaixonou perdidamente muito 
            rápido e sabíamos que tínhamos encontrado companheiras rapidamente."
          />
        </aside>
      </section>
    </Container>
  );
}
