import React from 'react'
import {Editor} from '@tinymce/tinymce-react'

const RTE = () => {
  return (
    <Editor
    initialValue='Defult Value'
    init={
        {branding: false,
            height: 500,
            members: true,
            plugins: [
                ''
            ]
        }
    }
    />
  )
}

export default RTE