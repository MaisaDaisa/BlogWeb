import React from 'react'

const AuthButton = ({placeHolder, addClass}) => {
  return (
    <button
    className={`bg-primary-green text-white w-60 rounded-lg py-2 ${addClass}`}>{placeHolder}</button>
  )
}

export default AuthButton