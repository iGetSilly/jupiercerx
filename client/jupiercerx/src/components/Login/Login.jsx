import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

// Componentes

import Cabecalho from "../Cabecalho/cabecalho";
import Footer from "../Footer/Footer";
import Hero from "../Hero/hero";

const handleClickLogin = (values) => {
  Axios.post("http://localhost:3001/login", {
    email: values.email,
    password: values.password,
  }).then((response) => {
    alert(response.data.msg);
  })
};
const handleClickRegister = (values) => {
  Axios.post("http://localhost:3001/register", {
    email: values.email,
    password: values.password,
  }).then((response) => {
    alert(response.data.msg);
  })
};

const validationLogin = yup.object().shape({
  email: yup
    .string()
    .email("Não é um email")
    .required("Este campo é obrigatorio"),
  password: yup
    .string()
    .min(8, "A senha deve ter 8 caracteres")
    .required("Este campo é obrigatorio"),
});

const validationRegister = yup.object().shape({
  email: yup
    .string()
    .email("Não é um email")
    .required("Este campo é obrigatorio"),
  password: yup
    .string()
    .min(8, "A senha deve ter 8 caracteres")
    .required("Este campo é obrigatorio"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
    .required("Este campo é obrigatorio"),
});
function Login() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Hero></Hero>
      <section className="flex_colunm center">
        <h1 className="h1">Login</h1>

        {/* ---------------- Login ------------------*/}

        <Formik
          initialValues={{}}
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
        >
          <Form className="login_form">
            <div className="login_form_group">
              <Field
                name="email"
                className="form_field"
                placeholder="Email"
              ></Field>
              <ErrorMessage
                component="span"
                name="email"
                className="form_error"
              ></ErrorMessage>
            </div>
            <div className="password_form_group">
              <Field
                name="password"
                className="form_field"
                placeholder="Senha"
              ></Field>
              <ErrorMessage
                component="span"
                name="password"
                className="form_error"
              ></ErrorMessage>
            </div>
            <button className="button_login" type="submit">
              Entrar
            </button>
          </Form>
        </Formik>

        {/* ------------------- Registro ------------------- */}

        <h1 className="h1">Ou</h1>
        <h1 className="h1">Registre-se</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleClickRegister}
          validationSchema={validationRegister}
        >
          <Form className="login_form">
            <div className="login_form_group">
              <Field
                name="email"
                className="form_field"
                placeholder="Email"
              ></Field>
              <ErrorMessage
                component="span"
                name="email"
                className="form_error"
              ></ErrorMessage>
            </div>
            <div className="password_form_group">
              <Field
                name="password"
                className="form_field"
                placeholder="Senha"
              ></Field>
              <ErrorMessage
                component="span"
                name="password"
                className="form_error"
              ></ErrorMessage>
            </div>
            <div className="password_form_group">
              <Field
                name="confirm_password"
                className="form_field"
                placeholder="Confirme sua senha"
              ></Field>
              <ErrorMessage
                component="span"
                name="confirm_password"
                className="form_error"
              ></ErrorMessage>
            </div>
            <button className="button_login" type="submit">
              Registrar
            </button>
          </Form>
        </Formik>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Login;
