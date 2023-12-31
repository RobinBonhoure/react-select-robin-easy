# Select Component

A component that renders a select input element.

## Props

- **data** (Array): The array of data to populate the select options.
- **value** (function): The function to be called when the select value changes.
- **name** (string): The name to be displayed as the default option.

## Returns

- **JSX.Element**: The rendered select input element.

## Usage

```jsx
import React from 'react';
import Select from './Select';

function App() {
  const data = [
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3' },
  ];

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    // Do something with the selected option
  };

  return (
    <Select data={data} value={handleSelectChange} name="Default Option" />
  );
}

export default App;
