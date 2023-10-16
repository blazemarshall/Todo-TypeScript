import React, { FC, PropsWithChildren, ReactChild, ReactNode } from 'react'

type TitleNameProps = {
  children: ReactNode,
}

const Title = ({children}:TitleNameProps) => {

  return (
    <div className='titleName'>{children}</div>
  )
}

export default Title