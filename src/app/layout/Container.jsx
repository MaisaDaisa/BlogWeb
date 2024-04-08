import React from 'react'

const Container = ({children, addClass}) => {
  return (
    <section className={`flex flex-col min-h-dvh pt-12 ${ addClass ? addClass : ''}`}>
        {children}
    </section>
  )
}

export default Container