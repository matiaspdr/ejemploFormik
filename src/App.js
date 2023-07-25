//importar elementos 
import React from "react";
import { useFormik } from "formik";

//aplicación 1.usar formik 2. inicializar email y password
function App() {
  const formik = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    
//función de botón
    onSubmit: (values) =>{
      alert("Ha ingresado correctamente");},

//validaciónes y errores      
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'fiel required';
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values.email)) {
          errors.email = 'Formato de correo electrónico inválido';
        }
      }
      if (!values.password) errors.password = 'field required';
      return errors;
    },
  });

//elemento retornado de funciones

const mystyle = {
  display: "grid",
  textAlign:"center",
  itemAlign:"center",
  color:"white",
  width: "25%",
  backgroundColor: "Blue",
  padding: "10px",
  margin: "auto",
  fontSize: "15pt",
  fontFamily: "Arial",
};

  return (
    <div style={mystyle}>
       <form onSubmit={formik.handleSubmit}>
        <div>Correo:</div>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password:</div>
        <input
          id="pswField"
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
