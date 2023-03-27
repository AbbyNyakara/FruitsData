import React from 'react';
import { useFruits } from '../hooks/useFruits';

const Fruits = () => {
  const { error, loading, data } = useFruits()

  console.log({
    error,
    loading,
    data
  })

  return (
    <div>Fruits</div>
  )
}

export default Fruits