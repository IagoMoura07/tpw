import Containers from "../../components/Containers";
import styles from "./Login.module.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';




function Login() {



  return (

    <div className={styles.login}>

      <h1 class="teste">Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <Form className="create-form">
        <>

          <FloatingLabel controlId="floatingName"  label="Seu Nome">
            <Form.Control className="mb-3" id = "Nome" type="text" placeholder="Seu nome" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email "
            className="mb-3"
          >

            <Form.Control type="email" id = "email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Senha">
            <Form.Control className="mb-3" type="password" id="senha" placeholder="Password" />
          </FloatingLabel>
          <Button className="mb-3" onClick={criar} variant="success">Enviar</Button>
        </>
      </Form>

    </div>
  );
}
function criar() {
  var NOME = document.getElementById("Nome")['value'];
  var EMAIL = document.getElementById("email")['value'];
  var SENHA = document.getElementById("senha")['value'];

  axios.post('URL do servidor', {
    NOME,
    EMAIL,
    SENHA
  })
}






export default Login;
