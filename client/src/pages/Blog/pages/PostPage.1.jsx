import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { Link, useParams } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import { UserContext } from '../bloghooks/UserContext';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';

export const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInform } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if (!postInfo) return '';

  const newLocal = "text-sm text-center leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400";
  return (
    <div className='p-10 w-sm  mx-0.5 my-3 px-4 mb-5 '>
      <Header />

      <h1 className='mt-1 text-lg text-center font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white'>{postInfo.title}</h1>
      <div className="text-center">
        <p className={newLocal}>{postInfo.summary}</p>
        <time className='text-sm text-center leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div className=""></div>

        {postInfo.author && (
          <a href="" className="author">
            By @{postInfo.author.username}
          </a>
        )}
      </div>
      {userInform.id === postInfo.author._id && (
        <div className='items-center text-center'>
          <Link to={`/edit/${postInfo._id}`}>

            <button type='button' className="bg-indigo-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
              <CreateSharpIcon /> Edit this post
            </button>
          </Link>
        </div>
      )}
      <div className="max-w-md mx-auto dark:bg-slate-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-4 px-6 py-8 ring-1 ring-slate-900/5">
        <div className="md:flex items-center justify-center md:max-xl:flex">

          <div className="md:shrink-0 items-center">
            <img src={`http://localhost:4000/${postInfo.cover}`} alt="" className='h-full w-full object-cover md:h-full md:w-96 rounded-xl' />
          </div>
        </div>

        <div className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left mt-2 text-slate-100 inline-col text-center sm:text-left ml-5 mr-5" dangerouslySetInnerHTML={{ __html: postInfo.content }} />

      </div>
    </div>
  );
};
