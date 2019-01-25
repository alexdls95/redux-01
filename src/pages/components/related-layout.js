import React from 'react'
import logo from '../../../images/logo.png'
import './related-layout.css'

function RelatedLayout (props) {
  return (
    <div className="Related">
      <div className="Logo">
        <img src={logo} width={150}></img>
      </div>
    </div>
  )
}

export default RelatedLayout