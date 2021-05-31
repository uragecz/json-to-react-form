import React from 'react'

import Form from 'json-to-react-form'
import 'json-to-react-form/dist/index.css';
import loginInputs from './login.json';

const App = () => {
  return <Form layout={[1,7]} inputs={loginInputs} onSubmit={console.log}/>
}

export default App
