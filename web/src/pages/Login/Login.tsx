import React from "react";
import Header from "../../components/Header/Header";
import "./Login.css";

const Login = () => {
   return (
      <>
         <Header onlyTheLogo />
         <section id="login">
            <section id="content-login">
               <div id="div-form">
                  <h1>Acesse sua conta</h1>
                  <p>
                     Novo cliente? Então registre-se <span>aqui</span>
                  </p>
                  <form>
                     <label htmlFor="">
                        Login *
                        <input
                           type="text"
                           name="login"
                           placeholder="Digite seu login ou email"
                        />
                     </label>
                     <label htmlFor="">
                        Senha *
                        <input
                           type="text"
                           name="password"
                           placeholder="Insira sua senha"
                        />
                     </label>
                     <button type="submit">Acessar conta</button>
                  </form>

                  <p id="recover-password">Esqueci minha senha</p>
               </div>
               <div id="div-images">
                  <img
                     src="./assets/image-login-1.png"
                     alt="front tennis"
                     id="img-login-1"
                  />
                  <img
                     src="./assets/image-login-2.png"
                     alt="back tennis"
                     id="img-login-2"
                  />
               </div>
            </section>
         </section>
      </>
   );
};

export default Login;
