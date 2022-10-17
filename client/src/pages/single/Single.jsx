import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlepost/Singlepost'
import "./Single.css"

const Single = () => {
  return (
    <div className='single'>
        {/* post */}
        <Singlepost/>
        <Sidebar/>
        
    </div>
  )
}

export default Single