import React from 'react'
import lists from '../../Data/selectionlist.json'

export const HomeSidebar = () => {
  return (
    <section>
      <header className='mb-8'>
        <h1 className='text-xl text-brand_primary-150 font-semibold mb-2'>London Internship Program</h1>
        <p className='text-xs'>London</p>
      </header>

      <div className='flex items-center justify-between bg-brand_neutral-50 p-4 border border-brand_neutral-150 rounded-lg mb-6'>
        <div className='flex items-center gap-3'>
          <img src="/icons/search.svg"/>
          <input type='text' placeholder='Search by name, edu, exp or #tag' className='w-full outline-none text-sm'/>
          </div>
          <img src="/icons/error.svg"/>
      </div>

      <ul className='bg-brand_neutral-50 rounded-lg'>
        <li className='flex items-center justify-between px-4 py-5 border-b border-brand_neutral-100'><p className='font-medium'>Filters</p> <p>0 Selected</p></li>
        {lists.map((list) => {
          return(
            <li key={list.id} className='flex items-center justify-between capitalize px-4 py-5 border-b border-brand_neutral-100'> <div className='flex items-center gap-2'><img src="/icons/file.svg"/> <span> {list.name} </span> </div><img src="/icons/dropdown.svg"/> </li>
          )
        })}
        <li className='flex items-center justify-between  capitalize px-4 py-5 border-b border-brand_neutral-100'> <div className='flex items-center '><img src="/icons/file.svg"/> <span> Advanced Filter </span> </div><img src="/icons/dropdown.svg"/> </li>
        <li className='flex items-center gap-2 capitalize px-4 py-5 border-b border-brand_neutral-100'><img src="/icons/file.svg"/> <span> Advanced Filter </span> </li>
      </ul>
    </section>
  )
}
