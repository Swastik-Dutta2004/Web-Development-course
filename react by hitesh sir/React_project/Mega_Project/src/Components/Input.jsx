import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    lable,
    type = "text",
    classname = "",
    ...prpos
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {lable && <lable className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {lable}
            </lable>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-200 w-full ${classname}`}
                ref={ref}
                {...prpos}
                id={id}
            />
        </div>
    )
})

export default Input