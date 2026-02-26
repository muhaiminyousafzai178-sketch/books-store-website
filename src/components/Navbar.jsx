import React from 'react'
import { User , Image ,MessageCircleMore , Heart ,ShoppingCart } from 'lucide-react'

const navbar = () => {
  return (
    <div className='flex items-center px-5  py-5'> 
        <div className= ' font-bold text-black text-3xl'>
            LOGO
        </div>
        <div >
            <ul className='flex justify-between gap-5  ml-30  '>
                <li> <a href="#Home"> HOME </a></li>
                <li> <a href="#about"> ABOUT</a></li>
                <li> <a href="# product"> PRODUCT</a></li>
            </ul>
        </div>
        <div className='ml-80 '>
            <input type="text" placeholder='search for books' />
        </div>
        <div className='flex justify-between gap-4 ml-35 '>
            <User />
            <Image />
            <MessageCircleMore />
            <Heart />
            <ShoppingCart />
        </div>

    </div>
  )
}

export default navbar