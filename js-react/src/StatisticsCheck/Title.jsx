import React from 'react'

import data from "./data"

export const Title = ({titleNumber = 0}) => {
  const { titles } = data;
  return (
    <h1>{titles[titleNumber]}</h1>
  )
}
