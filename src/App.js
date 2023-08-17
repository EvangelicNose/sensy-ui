import React, { useState } from 'react';
import './App.css';
import SyInput from './components/input';
import Logo from './components/logo';
import Button from './components/button';
import TwitterIcon from './assets/icons/icon_social_twitter.svg';
import FacebookIcon from './assets/icons/icon_social_facebook.svg';
import SyModal from './components/modal';
import SecureIcon from './assets/icons/icon_secure_attention.svg';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <div className="bg-container">
        <div className='bg-image'></div>
      </div>
      <div className='content'>
        <div className='logo-container'>
          <Logo />
        </div>
        <SyInput
          placeholder="Informe o email cadastrado"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          label={'E-mail'}
          type={'email'}
        />

        <SyInput
          placeholder="Sua senha de segurança"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          label={'Senha'}
          type={'password'}
        />
        <div className='full-width sy-forgot-pw'>
          {/* eslint-disable-next-line */}
          <a href='#'>Esqueci minha senha</a>
        </div>

        <div className='login-button-container'>
          <Button onClick={() => setIsModalOpen(!isModalOpen)} isLoading={isLoading}>
            Acessar a minha conta
          </Button>
        </div>
        <div className='flex-row divider'>
          <span className='left'></span>
          ou
          <span className='right'></span>
        </div>

        <div className='sy-social-login'>
          <Button variant="transparent" onClick={() => setIsLoading(!isLoading)} isLoading={isLoading}>
            <span className='sy-social-btn-content'>
              <img src={TwitterIcon} alt="icon_social_twitter.svg" />
              <span>
                Entrar com Twitter
              </span>
            </span>
          </Button>
          <Button variant="transparent" onClick={() => setIsLoading(!isLoading)} isLoading={isLoading}>
            <span className='sy-social-btn-content'>
              <img src={FacebookIcon} alt="icon_social_facebook.svg" />
              <span>
                Entrar com Facebook
              </span>
            </span>
          </Button>
        </div>

        <div className='sign-up-container'>
          {/* eslint-disable-next-line */}
          Ainda não tem uma conta?&nbsp;<a href='#'>Cadastre-se</a>
        </div>

        <SyModal isOpen={isModalOpen} handleClose={() => setIsModalOpen(!isModalOpen)} icon={SecureIcon}>
          <h2>Algo deu errado</h2>
          <div className='sy-modal-err-msg'>Não foi possível realizar a autenticação, confira se o e-mail ou senha foram digitados corretamente e tente novamente</div>
          <Button onClick={() => setIsModalOpen(!isModalOpen)} isLoading={isLoading}>
            Entendi
          </Button>
        </SyModal>


      </div>
    </div>
  );
}

export default App;
