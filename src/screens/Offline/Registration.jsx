// Import module
import axios from 'axios'
import React, { useState } from 'react'
import { redirect } from 'react-router-dom'

// Import constant
import { apiRoot } from '../../constants/apiConstant'
import { useAuthContext } from '../../tools/AuthContext'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  const { signIn } = useAuthContext()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    axios
      .post(`${apiRoot}/register`, {
        email,
        password,
        nickname
      })
      .then((res) => {
        console.log(res);
        if (res.data.email) {
          const user = {
            userId: res.data.id,
            email: res.data.email,
            isGuest: "standard"
          }
          try {
            signIn(user)
            return redirect('/')
          } catch (err) {
            console.log('ERROR : ', err);
          }
          return null
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='flex flex-1 h-screen flex-col justify-start items-center bg-black'>
      <h2 className='text-white font-bold text-xl pb-5'>INSCRIVEZ VOUS </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-green_06 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green_06 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-green_06 font-bold mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green_06 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mot de passe"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="nickname" className="block text-green_06 font-bold mb-2">
            Pseudo
          </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green_06 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Pseudo"
            value={nickname}
            onChange={(evt) => setNickname(evt.target.value)}
          />
        </div>
        <div className="flex items-center justify-center pt-5">
          <button
            className="bg-green_06 hover:bg-green_top w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            S'inscrire
          </button>
        </div>
      </form>
      <div className='bg-white rounded p-3 mt-8'>
        <p>
          Vous avez un compte : <a href="/" className='text-green_08 hover:text-green_06 font-bold'>Connectez-vous</a>
        </p>
      </div>
    </div>
  )
}

export default Registration