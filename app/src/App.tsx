import './App.css'
import {
  Formik,
  Form,
  Field,
  ErrorMessage
} from 'formik'
import * as yup from 'yup'

function App() {
  const handleClickLogin = (values:any) =>{
    console.log(values)
  }
  const validationLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik 
        initialValues={{}}
        onSubmit={handleClickLogin} 
        validationSchema={validationLogin}
      >
        <Form className="login-form">

          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="email"/>
            <ErrorMessage 
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field name="password" className="form-field" placeHolder="senha"/>
            <ErrorMessage 
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">Login</button>
        </Form>
      </Formik>

      {/*  */}

      <h1>Cadastrar</h1>
      <Formik 
        initialValues={{}}
        onSubmit={handleClickLogin} 
        validationSchema={validationLogin}
      >
        <Form className="login-form">

          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="email"/>
            <ErrorMessage 
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="login-form-group">
            <Field name="password" className="form-field" placeHolder="senha"/>
            <ErrorMessage 
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default App
