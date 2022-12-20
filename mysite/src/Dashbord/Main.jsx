import React from 'react'
import Body from './Body'
import Menu from './Menu'
import TopHeader from './TopHeader'

function Main() {
  return (
    <>
    <div className="main-wrapper">
        <TopHeader/>
        <Menu />
        <Body/>
    </div>
    </>
  )
}

export default Main