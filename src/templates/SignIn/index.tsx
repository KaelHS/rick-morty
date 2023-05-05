"use client"
import { Input } from '@/components/Input'
import { useAuth } from '@/context/FakeAuthContext'
import { useState } from 'react'

export const SignIn = () => {
  const { signIn } = useAuth();
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      signIn(name)
    } catch (err) {
      console.log(err)
    }
  }

    return (
        <section className="w-screen h-screen overflow-hidden flex relative justify-start items-center bg-[url('/backgroundImage2.jpg')] bg-cover bg-no-repeat bg-center">
          <div className="ml-12 flex items-center justify-center flex-col h-full backdrop-blur-md p-4 w-1/4 border-0 shadow bg-indigo-600 bg-opacity-5">
            <div className="flex flex-col items-center">
              <img src='/logo.png' className='w-3/4 h-auto'/>
            </div>
            <form className="m-0 p-0 w-full">
              <div className="mt-10 flex flex-col w-full">
                <h1 className='font-bold text-stone-900 text-xl'>LOGIN</h1>
                <Input label='Nome' value={name} onChange={({ target }) => setName(target.value)} />
                <Input label='E-mail' value={email} onChange={({ target }) => setEmail(target.value)} />
              </div>
              <button onClick={(e) => onSubmit(e)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Entrar
              </button>

            </form>
          </div>
        </section>
      )
}