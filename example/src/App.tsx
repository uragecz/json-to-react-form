import React from 'react'

import Form from 'json-to-react-form'
import 'json-to-react-form/dist/index.css'
import basicValidationInputs from './forms/basicValidationForm.json';

const App = () => {
  return <Form layout={[3,7]} inputs={basicValidationInputs} onSubmit={console.log}/>
}

export default App
