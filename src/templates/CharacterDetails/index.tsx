"use client"
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '@/graphql/queries/character';
import { getClient } from '@/services/apollo';
import { CharacterQuery, CharacterQueryVariables, Character } from '@/graphql/generated/types';
import { useState } from 'react';
import { Input } from '@/components/Input';
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

interface IPageProps {
    params: {
        id: string
    }
}

export default function CharacterDetails({ params }: IPageProps) {
    const [characterData, setCharacterData] = useState<any>(undefined)

    const client = getClient()

    const { data } = useQuery<CharacterQuery, CharacterQueryVariables>(QUERY_CHARACTER, {
        variables: {
            id: params.id
        },
        client: client,
        onError: (err) => {
          console.log('Deu erro', err)
        },
        onCompleted: (res) => {
            if (res.character) {
                const { character } = res

                if (character) {
                    setCharacterData(res?.character)
                }
            }
        }
      });

    return (
        <section className='bg-slate-200 w-screen h-screen p-4 overflow-hidden grid gap-x-4 gap-y-4 grid-flow-row-dense grid-cols-3 grid-rows-2 auto-rows-max relative z-10'>
            <div className="relative flex items-center justify-center p-4 col-span-1 bg-white border-0 rounded-2xl shadow-lg h-auto">
                <Link href="/dashboard" className='absolute top-4 left-4 w-8 h-auto'>
                    <ArrowLeftIcon />
                </Link>
                <img
                    className='h-full aspect-square rounded-full'
                    src={characterData?.image} 
                    alt={`${characterData?.name} picture`} 
                />
            </div>
            <div className="p-8 col-span-2 bg-white border-0 rounded-2xl shadow-lg h-auto">
                <p className='text-base font-bold mb-2'>Details</p>
                <div className='flex gap-2'>
                    <Input 
                        label='Name'
                        type="text" 
                        disabled
                        value={characterData?.name}
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                    <Input 
                        label='Status'
                        type="text" 
                        disabled
                        value={characterData?.status}
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                </div>
                <div className='flex gap-2'>
                    <Input 
                        label='Gender'
                        type="text" 
                        value={characterData?.gender}
                        disabled
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                    <Input 
                        label='Specie'
                        type="text" 
                        value={characterData?.species}
                        disabled
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                </div>
                <p className='text-base font-bold mb-2 mt-3'>Origin</p>
                <div className='flex gap-2'>
                    <Input 
                        label='Name'
                        type="text" 
                        value={characterData?.origin?.name}
                        disabled
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                    <Input 
                        label='Dimension'
                        type="text" 
                        value={characterData?.origin?.dimension}
                        disabled
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                </div>
            </div>
            <div className="grid p-8 col-span-1 h-full bg-white border-0 rounded-2xl shadow-lg">
                <p className='text-base font-bold mb-2'>Episodes</p>
                <div className='grid overflow-x-hidden overflow-y-auto'>
                    <ul>
                        {console.log(characterData?.episode)}
                        {characterData?.episode?.map((ep: any) => (
                            <li key={ep?.id}>
                                <p className='text-sm font-normal'>{ep.episode} - {ep.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grid p-8 col-span-2 h-full bg-white border-0 rounded-2xl shadow-lg">
                <p className='text-base font-bold mb-2'>Localization</p>
                <div className='flex gap-4'>
                    <Input 
                        label='Name'
                        type="text" 
                        value={characterData?.location?.name}
                        disabled
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                    <Input 
                        label='Type'
                        type="text" 
                        value={characterData?.location?.type}
                        disabled
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                    <Input 
                        label='Dimension'
                        type="text" 
                        value={characterData?.location?.dimension}
                        disabled
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6" 
                        required 
                    />
                </div>
                <p className='text-base font-bold mb-2 mt-2'>Residents</p>
                <div className='grid grid-cols-5 relative overflow-y-scroll overflow-x-hidden w-full h-full max-h-fit'>
                    {characterData?.location?.residents?.map((resident: any) => (
                        <div key={resident.id} className='flex flex-col justify-center items-center mb-2'>
                            <img className="w-20 h-20 rounded-full" src={resident?.image} alt={`${resident.name} profile image`}/>
                            <p>{resident.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}