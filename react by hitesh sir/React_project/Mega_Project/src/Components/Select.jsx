import React, { useId } from 'react'

const Select = ({
    options,
    label,
    classnamme,
    ...props
},ref) => {
    const id = useId()
  return (
    <div>Select</div>
  )
}

export default Select