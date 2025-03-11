/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Header from "../../components/Header/Header";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { useUser } from "../../context/UserContext";

const Login = () => {
   const navigate = useNavigate();

   // const {  } = useUser();

   // função que será executada quando o formulário for submetido
   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      // obtém os valores dos inputs
      const email = (event.target as HTMLFormElement).login.value;
      const password = (event.target as HTMLFormElement).password.value;

      // validação dos campos
      if (!email || !password) {
         alert("Preencha todos os campos!");
         return;
      }

      // faz a requisição para a API
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
               alert(data.message);
               return;
            }

            toast.success("Login realizado com sucesso!");

            setTimeout(() => {
               navigate("/");
            }, 1000);
         })
         .catch((error) => {
            console.error("Erro:", error);
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

                  {/* // Add component Toaster (Message) */}
                  <Toaster />
               </section>
            </section>
         </main>
      </>
   );
};

export default Login;
