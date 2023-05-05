"use client"
import CharacterDetails from '@/templates/CharacterDetails';

interface IPageProps {
    params: {
        id: string
    }
}

export default function Page({ params }: IPageProps) {
    return (
        <CharacterDetails params={params}/>
    )
}