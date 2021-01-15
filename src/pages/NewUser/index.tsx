import React from 'react';
import Comment from '../../components/Comment';
import { ContainerButtons } from './styles';
import nine from '../../assets/Images/nine.png';

import { Link } from 'react-router-dom';
import Container from '../../components/Container';

export default function NewUser() {
  return (
    <Container>
      <section>
        <main>
          <ContainerButtons>
            <h1>Você deseja entrar como ?</h1>

            <div>
              <Link to="/teacher">
                <button type="button"> PROFESSOR </button>
              </Link>
              <Link to="/student">
                <button type="button"> ALUNO </button>
              </Link>
            </div>
          </ContainerButtons>
        </main>
        <aside>
          <Comment
            avatar={nine}
            username="@nine"
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
