import React from 'react'
import {Editor} from '@tinymce/tinymce-react'

const RTE = ({name, control, label, deffaultvalue = ""}) => {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
    </div>
  )
}

export default RTE