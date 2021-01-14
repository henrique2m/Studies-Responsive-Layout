import React, { FormEvent, useState } from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(email, password);
  }

  return (
    <Container>
      <section>
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
                <Link to="/">Criar uma conta</Link>
              </span>
              <p>
                <Link to="/">Recuperar senha</Link>
              </p>
            </div>
          </form>
        </main>
        <aside>
          <h1>Conteúdo informativo...</h1>
        </aside>
      </section>
    </Container>
  );
}
