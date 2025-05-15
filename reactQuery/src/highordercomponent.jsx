import React from 'react'
import { Button } from './button'
import withClickTracking from './withClickTracking'

const HighOrderComponent = () => {
     const ButtonWithTracking=withClickTracking(Button)
  return (
    <div>
         <ButtonWithTracking label={"pay now"} trackingInfo={{amount:"3000",name:"jack"}}/>
    </div>
  )
}

export default HighOrderComponent
