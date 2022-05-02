import React from 'react'

import '@/styles/PageComponent.scss'

const PageComponent = (props) => {
  return (
    <div className='page-component'>
      {props.children}
    </div>
  )
}

export default PageComponent
