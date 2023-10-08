import ReactQuill from 'react-quill'

import React from 'react'

const modules = {
    toolbar: [
        [{'header': [1,2,false] }],
        [['bold', 'italic','underline', 'strike', 'blackqoute']],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }], 
         [{ 'indent': '-1'}, { 'indent': '+1' }],      
         ['link', 'image'],
         ['clean']

    ]
}

const fornmats = [
    'header',
    'bold', 'italic','underline', 'strike', 'blackqoute',
    'list', 'bullet', 'ident',
    'link', 'image'
]


const Editor = ({value,onChange}) => {

  return (
    <ReactQuill
    value={value}
    onChange={onChange}
    module={modules}
    theme={'snow'}
    />
  )
}

export default Editor