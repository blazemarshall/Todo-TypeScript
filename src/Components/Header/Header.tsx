import React, { FC, PropsWithChildren } from 'react'
import TitleName from './TitleName'


const Header:FC = () => {
  return (
    <div className='header'>
        <TitleName>TypeScript</TitleName>
        <TitleName>Todo</TitleName>
        <TitleName>Creator</TitleName>
    </div>
  )
}
export default Header