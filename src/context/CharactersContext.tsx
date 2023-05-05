"use client"

import { createContext, useState, useEffect, useContext } from 'react';
import { useLazyQuery  } from '@apollo/client';
import { QUERY_CHARACTERS } from '@/graphql/queries/characters';
import { CharactersQuery, CharactersQueryVariables } from '@/graphql/generated/types';
import { getClient } from '@/services/apollo';

interface ICharactersContextData {
    data: any
    loading: boolean;
    getCharacters: any
    pagination: any
    setPagination: any
    characters: any
    setSearch: React.Dispatch<React.SetStateAction<any>>;
    search: string;

}

interface ICharactersProviderProps {
    children: React.ReactNode;
}

interface ICharactersListItem {
    url: string;
    name: string;
    image: string;
  }

  interface IPagination {
    current?: number
    prev?: number | null
    count: number
    next?: number | null
  }


export const CharactersContext = createContext<ICharactersContextData>({} as ICharactersContextData);

export const CharactersProvider = ({ children }: ICharactersProviderProps) => {
    
    const [characters, setCharacters] = useState<any>(null)
    const [ search, setSearch ] = useState('');
    const [pagination, setPagination] = useState<IPagination>({
        current: 1,
        prev: null,
        next: 2,
        count: 0
      })
    
      const formatCharactersData = (charactersList: any) => {
        return charactersList.map((character: any) => ({
          id: character?.id,
          name: character?.name,
          image: character?.image,
          status: character?.status,
          location: {
            name: character?.location?.name
          }
        }))
    
      }

    const client = getClient()
    const [getCharacters, { loading, data }] = useLazyQuery<CharactersQuery, CharactersQueryVariables>(QUERY_CHARACTERS, {
      client: client,
      onError: (err) => {
        console.log('Deu erro', err)
      },
      onCompleted: (res) => {
        setPagination({
          current: res.characters?.info?.next ? res.characters?.info?.next -1 : 1,
          prev: res.characters?.info?.prev,
          next: res.characters?.info?.next,
          count: res.characters?.info?.count ?? 0
        })
      }
    });

    useEffect(() => {
        if(data) {
            const charactersFormatted = formatCharactersData(data?.characters?.results)
            setCharacters(charactersFormatted)
        }
    } , [data]);
    
    return (
        <CharactersContext.Provider 
            value={{
                getCharacters,
                data, 
                search, 
                setSearch, 
                pagination,
                characters,
                loading,
                setPagination
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};

export const useCharacters = () => {
    const context = useContext(CharactersContext);

    return context;
};