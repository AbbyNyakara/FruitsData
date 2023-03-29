import React, { Fragment } from 'react';
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
        data?.fruits.map((fruit, index) => {
          return(
            <Fragment key={index}>
              {/* <p>Fruit Name: {fruit.fruit_name}</p>
              <p>Fruit Family: {fruit.family}</p>
              <p>Tree Name: {fruit.tree_name}</p>
              <p>Producing countries:  */}
              {
                fruit.producing_countries.map((country, idx) => {
                  <p key={idx}>{country}</p>
                })
              }
              {/* </p> */}
            </Fragment>
          )
        })
      }

    </div>
  )
}

export default Fruits