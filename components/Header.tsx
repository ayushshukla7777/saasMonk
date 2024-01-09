import React from 'react'
import { Button } from './ui/button'
import { AddMovie } from './AddMovie'
import { AddReview } from './AddReview'
const Header = () => {
  return (
    <div className=' bg-slate-300 px-2 py-1 flex flex-row justify-between
     items-center text-slate-700 text-xs font-medium
     space-x-2 space-y-2
     '>
      <div>MOVIECRITIC</div>
      <div className=' flex flex-row space-x-2 items-center justify-center'>
        <AddMovie ></AddMovie>
        <AddReview  ></AddReview>
      </div>
    </div>
  )
}

export default Header