import { useQuery, gql } from "@apollo/client";

const GET_FRUITS = gql`
  query GetFruits {
    fruits {
      fruit_name,
      family,
      tree_name,
      producing_countries {
        country
      }
    }
  }
`

export const useFruits = () => {
  const { error, loading, data } = useQuery(GET_FRUITS);

  return{
    error,
    loading,
    data
  }
}