import React from 'react'

const Container = ({children}) => {
  return (
    <section className='flex flex-col min-h-dvh'>
        {children}
    </section>
  )
}

export default Container