import React from 'react';
import { useFruits } from '../hooks/useFruits';
import Fruit from '../components/Fruit';

const Fruits = () => {
  const { error, loading, data } = useFruits()

  console.log({
    error,
    loading,
    data
  })

  return (
    <div>
      {
        data.fruits.map((fruit, index) => {
          return(
            <p>{fruit.fruit_name}</p>
          )
        })
      }

    </div>
  )
}

export default Fruits