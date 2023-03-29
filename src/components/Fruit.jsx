import React, { Fragment }from 'react'

const Fruit = (props) => {

  const { name, index, family, tree, country} = props;
  return (
    <Fragment key={index} >
      <p>Fruit Name: {name}</p>
      <p>Fruit Family: {family}</p>
      <p>Tree Name: {tree}</p>
      <p>Producing countries: {country}</p>
    </Fragment>
  )
}

export default Fruit