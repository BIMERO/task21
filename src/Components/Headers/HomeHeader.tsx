import React, { useState } from 'react'
import dropdown from '../../Data/dropdown.json'
import { DropdownIcon } from '../Icons/Dropdown';

interface DropdownItem {
    id: number;
    name: string;
    num: string;
  }

export const HomeHeader = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<DropdownItem | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: DropdownItem) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  

  return (
    <nav className='flex items-center justify-between mb-12'>
      <div>
        <button className= {`flex items-center justify-between w-80 px-4 py-2 bg-brand_neutral-50 text-brand_primary-150 font-medium drop-shadow-brand_100 ${
          isOpen ? 'rounded-t-2xl' : 'rounded-2xl'}`} onClick={toggleDropdown}>
            {selectedValue ? selectedValue.name : 'Select an option'} <DropdownIcon stroke="#1D4ED8"/>
        </button>
        {isOpen && (
          <ul className="w-80 bg-brand_neutral-50 drop-shadow-brand_150 rounded-b-2xl mt-1 absolute">
            {dropdown.map((item) => (
                <li key={item.id} className='flex items-center justify-between w-full capitalize py-4 px-2 border border-brand_neutral-500 hover:text-brand_primary-150 hover:bg-brand_primary-200' onClick={() => handleOptionClick(item)}>
                  {item.name} <span className='text-sm text-brand_neutral-300 bg-brand_neutral-150 px-[10px] py-[2px] rounded-2xl hover:text-brand_primary-150 hover:bg-brand_primary-200'> {item.num} </span>
                </li>
            ))}
          </ul>
        )}
      </div>

      <ul className='flex items-center gap-2'>
        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/tag.svg"/></button> </li>
        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/user-x.svg"/></button> </li>
        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/user-tick.svg"/></button> </li>
        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/user-ring.svg"/></button> </li>
        <li className='bg-brand_neutral-50 p-2 rounded-lg border border-y-brand_neutral-400 flex drop-shadow-brand_200'> <button><img src="/icons/mail.svg"/></button> </li>
        <li className='flex items-center text-brand_neutral-50 bg-brand_primary-150 font-medium drop-shadow-brand_100 rounded-lg'>
          <button className="py-2 px-4 border-r border-brand_neutral-50">
            Move To Video Interview I 
          </button>
          <DropdownIcon stroke='#FFFFFF'/>
        </li>
      </ul>
    </nav>
  )
}
