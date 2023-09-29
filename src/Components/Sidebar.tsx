import React from 'react'
import {Link} from 'react-router-dom'


export const Sidebar = () => {
  return (
    <section className='fixed h-full bg-neutral-50 drop-shadow-brand py-6 w-20'>
      <ul className='px-6 flex flex-col items-center gap-6'>
        <li className='w-8 h-8 bg-brand_neutral-100 rounded-full mb-2'></li>
        <li> <Link to='/'><img src="/icons/Vector.svg"/> </Link></li>
        <li> <Link to='/'> <img src="/icons/people.svg"/></Link> </li>
        <li> <Link to='/'><img src="/icons/calendar.svg"/></Link></li>
        <li> <Link to='chart'><img src="/icons/share.svg"/></Link>  </li>
        <li> <Link to='/'><img src="/icons/file.svg"/></Link></li>
        <li> <Link to='/'><img src="/icons/book.svg"/></Link></li>
        <li> <Link to='/'><img src="/icons/heart.svg"/></Link> </li>
        <li> <Link to='/'><img src="/icons/backArrow.svg"/></Link></li>
      </ul>

      <ul className='flex flex-col items-center absolute bottom-6 left-0 right-0 gap-6'>
        <li> <img src="/icons/settings.svg"/> </li>
        <li> <img src="/icons/profile.svg"/> </li> 
      </ul>
    </section>
  )
}
