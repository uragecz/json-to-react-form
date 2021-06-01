import React from 'react'

import Form from 'json-to-react-form'
import basicValidationInputs from './forms/basicValidationForm.json';

const App = () => {
  return <Form layout={[3,7]} inputs={basicValidationInputs} onSubmit={console.log}/>
}

export default App
