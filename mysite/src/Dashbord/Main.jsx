import React from 'react'
import TopHeader from './TopHeader'
import Menu from './Menu'
import DashMenu from './DashMenu'

function Main() {
  return (
    <>
      <div className="main-wrapper">
        <TopHeader />
        <Menu />
        <DashMenu />
      </div>
    </>
  )
}

export default Main