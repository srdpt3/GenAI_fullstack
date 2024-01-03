"use client"
import React from 'react'
import { ReactCompareSlider,ReactCompareSliderImage } from 'react-compare-slider'

function CompareSlider() {
  return (
    <ReactCompareSlider 
    itemOne={<ReactCompareSliderImage src='/before.png'/>}
    itemTwo={<ReactCompareSliderImage src='/after.png'/>}    
    />
  )
}

export default CompareSlider