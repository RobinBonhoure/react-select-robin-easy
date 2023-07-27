import React from 'react'

/**
 * Select Component
 * 
 * A component that renders a select input element.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.data - The array of data to populate the select options.
 * @param {function} props.value - The function to be called when the select value changes.
 * @param {string} props.name - The name to be displayed as the default option.
 * 
 * @returns {JSX.Element} - The rendered select input element.
 */
function Select ({data, value, name}) {
    return(
        <select className="input_employee" onChange={value}>
            <option value={name}>{name}</option>
            {data.map((dataMap, index) => {
                return(
                    <option value={dataMap.name} key={index}>{dataMap.name}</option>
                )
            })}
        </select>
    )
}

export default Select