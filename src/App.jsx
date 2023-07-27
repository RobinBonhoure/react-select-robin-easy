import React from 'react'
import Select from './lib'

const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    }
];
const stateValue = (e) => {
    setState(e.target.value)
}

const App = () => {
  return (
    <Select name={"State"} data={states} value={stateValue} />
  )
}

export default App
