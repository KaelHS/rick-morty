import { gql } from '@apollo/client'

export const QUERY_CHARACTER = gql`
    query character($id: ID!){
        character(id: $id) {
            name
            episode {
                id
                episode
                name
            }
            status
            species
            type
            gender
            origin {
                name
                type
                dimension
            }
            image
            location {
                name
                type
                dimension
                residents {
                    name
                    image
                }
            }
        }
    }
`