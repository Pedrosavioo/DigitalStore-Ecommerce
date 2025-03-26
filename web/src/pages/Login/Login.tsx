/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUser } from "../../context/UserContext";
import MessageBox from "../../components/MessageBox/MessageBox";
import { IUser } from "../../interfaces/IUser";

const Login = () => {
   const { getInfoMe } = useUser();

   const navigate = useNavigate();

   const inputLoginRef = useRef<HTMLInputElement>(null);
   const inputPasswordRef = useRef<HTMLInputElement>(null);

   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

   // Função para verificar se campos foram preenchidos
   const checkInputs = () => {
      const loginValue = inputLoginRef.current?.value;
      const passwordValue = inputPasswordRef.current?.value;

      if (loginValue && passwordValue) {
         setIsButtonDisabled(false);
      } else {
         setIsButtonDisabled(true);
      }
   };

   const { setUser } = useUser();

   // função que será executada quando o formulário for submetido
   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      // obtém os valores dos inputs
      const email = (event.target as HTMLFormElement).login.value;
      const password = (event.target as HTMLFormElement).password.value;

      // validação dos campos
      if (!email || !password) {
         toast.error("Preencha todos os campos!", { duration: Infinity });
         return;
      }

      const promise = new Promise((resolve, reject) => {
         fetch("http://localhost:3001/v1/login", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
         })
            .then((response) => response.json())
            .then((data) => {
               if (data.error) {
                  reject(new Error(data.message)); // Rejeita passando a mensagem de erro
               } else {
                  resolve(data); // Sucesso
               }
            })
            .catch((error) => {
               reject(new Error(error.message || "Erro na requisição"));
            });
      });

      toast.promise(promise, {
         loading: "Validando dados...",
         success: (data) => {
            getInfoMe();
            
            setTimeout(() => {
               navigate("/");
            }, 1000);
            
            return `Login realizado com sucesso!`;
         },
         error: (error) => error.message || "Erro ao realizar login!",
      });
   }

   return (
      <>
         <Header onlyTheLogo />
         <main>
            <section id="login">
               <section id="content-login">
                  <div id="div-form">
                     <h1>Acesse sua conta</h1>
                     <p>
                        Novo cliente? Então registre-se <span>aqui</span>
                     </p>
                     <form onSubmit={handleSubmit}>
                        <label htmlFor="">
                           Login *
                           <input
                              type="text"
                              name="login"
                              placeholder="Digite seu login ou email"
                              ref={inputLoginRef}
                              onChange={checkInputs}
                           />
                        </label>
                        <label htmlFor="">
                           Senha *
                           <input
                              type="text"
                              name="password"
                              placeholder="Insira sua senha"
                              ref={inputPasswordRef}
                              onChange={checkInputs}
                           />
                        </label>
                        <button type="submit" disabled={isButtonDisabled}>
                           Acessar conta
                        </button>
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
               <MessageBox />
            </section>
         </main>
      </>
   );
};

export default Login;
