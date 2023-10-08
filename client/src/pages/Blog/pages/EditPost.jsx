import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import Header from '../components/Header/Header'
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';






const EditPost = () => {
    const {id} = useParams()
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState('');
    const [cover, setCover] = useState(false);

    useEffect(() => {
      fetch('http://localhost:4000/post/' +id).then(response => {
        response.json().then(postInfo => {
            setTitle(postInfo.title);
            setContent(postInfo.content);
            setSummary(postInfo.summary);
        })
      })
    
      
    }, [])
    

    const updatePost = async (ev) => {
        ev.preventDefault();
        const data = new FormData();
        data.append('title', title);
        data.append('summary', summary);
        data.append('content', content);
        data.append('id', id);

        // Check if files are selected before appending to FormData
        if (files?.[0]) {

                data.append('files', files?.[0]); // Append all selected files
            
        }


        const response = await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        })
        if(response.ok) {
            setRedirect(true);

        }
    }

    if (redirect) {
        return <Navigate to={'/post/' + id} />;
    }



  return (
            <div className='p-10 w-sm mx-0.5 my-0.5 mb-5 '>
            <Header />
            <form className='flex flex-col' onSubmit={updatePost}>
                <input
                    className='text-black'
                    type='text'
                    placeholder={'Title'}
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}
                />
                <div className='h-5'></div>
                <input
                    className='text-black'
                    type='text'
                    placeholder={'Summary'}
                    value={summary}
                    onChange={(ev) => setSummary(ev.target.value)}
                />
                <div className='h-5' />
                <input
                    type="file"
                    multiple // Allow multiple file selection
                    onChange={(ev) => setFiles(ev.target.files)}
                    className='block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100'
                />
                <div className='h-5' />

                <Editor onChange={setContent} value={content}/>

                <button className='mt-5 bg-white text-gray-800 rounded hover:rounded-lg'>Update Post</button>
            </form>
        </div>

  )
}

export default EditPost