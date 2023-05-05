"use client"
import { Header } from '@/components/Header'
import { CharacterCard } from '@/components/CharacterCard';
import { Pagination } from '@/components/Pagination';
import { useCharacters } from '@/context/CharactersContext';
import { useEffect } from 'react';

export default function Dashboard() {
  const { pagination, characters, getCharacters } = useCharacters()

  useEffect(() => {
    getCharacters({
      variables: {
        page: 1
      }
    })
  }, [])

  return (
    <>
        { typeof window !== undefined && (
            <div>
                <Header />
                <section className='grid grid-cols-4 pt-24 relative z-10'>
                  {characters?.map((character: any) => (
                    <CharacterCard key={character?.id} data={character}/>
                  ))}
                </section>
                {pagination.count > 0 && (
                    <Pagination
                      limitPerPage={20}
                      totalList={pagination?.count}
                      maxButtons={5}
                    />
                  )}
            </div>
        )}
    </>
  )
}