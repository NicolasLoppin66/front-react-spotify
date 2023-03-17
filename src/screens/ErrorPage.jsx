import React from 'react'
import { useRouteError } from 'react-router-dom'
import { CiWarning } from 'react-icons/ci'

const ErrorPage = () => {
  // On appelle le hook de react-router pour gérer les erreurs de routes
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='flex flex-col items-center justify-center h-screen bg-black text-white'>
      <CiWarning style={{ fontSize: 50, color: 'red' }} />
      <h1>Oops !!</h1>
      <p>Désoler, mais une erreur s'est produite</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className='text-green_06 hover:text-green pt-5'>
        Revenir en lieu sûr
      </a>
    </div>
  )
}

export default ErrorPage