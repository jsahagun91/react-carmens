import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
        <h1>Plate of the Day</h1>
        <p>Molcajete</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature