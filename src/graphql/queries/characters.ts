import { gql } from '@apollo/client'

export const QUERY_CHARACTERS = gql`
    query characters($page: Int!, $filter: FilterCharacter){
        characters(page: $page, filter: $filter){
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                image
                location {
                    name
                }
            }
        }
    }
`
