"use client"
import Link from "next/link"
// import { useRouter } 'next/navigation'
import { Badge } from "../Badge"
import { GlobeAmericasIcon } from '@heroicons/react/20/solid'

interface ICharacterCardProps {
    data: {
        id?: string | null
        name?: string | null 
        status?: string | null 
        image?: string | null 
        location?: {
            name?: string | null 
        } | null
    }
}

export const CharacterCard = ({ data }: ICharacterCardProps) => {

    return (
        <div className="p-0 flex flex-col w-fit bg-white border-0 rounded-2xl m-4 shadow-lg">
            <img src={data.image as string} className="w-fill rounded-t-2xl" alt={`${data.name} cover pitcture`}/>
            <div className="relative p-4 flex flex-col justify-center ">
                <p className="text-lg font-bold mb-2">{data.name}</p>
                <div className="flex flex-row items-center  mb-4">
                    <GlobeAmericasIcon className="mr-2 w-6 h-6"/>
                    <span className=" flex text-stone-500">{data.location?.name}</span>
                </div>
                <div className="flex items-center justify-between">
                    <Badge value={data.status}/>
                    <Link href={`/dashboard/character/${data.id}`} className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Detalhes
                    </Link>
                </div>
            </div>
        </div>
    )
}