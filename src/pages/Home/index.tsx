import React, { FormEvent, useState } from 'react';

import { Main } from './styles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Comment from '../../components/Comment';
import nine from '../../assets/Images/nine.png';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(email, password);
  }

  return (
    <Container>
      <Main>
        <main>
          <form>
            <img src={logo} alt="logo" />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              ENTRAR
            </button>

            <div>
              <span>
                <Link to="/newuser">Criar uma conta</Link>
              </span>
              <p>
                <Link to="/forgot">Recuperar senha</Link>
              </p>
            </div>
          </form>
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
      </Main>
    </Container>
  );
}
