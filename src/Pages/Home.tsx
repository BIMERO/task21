import React from 'react'
import { HomeSidebar } from '../Components/Sidebars/HomeSidebar'
import { HomeHeader } from '../Components/Headers/HomeHeader'
import applicants from '../Data/applicant.json'


export const Home = () => {
  return (
    <section className='grid grid-cols-layout-home gap-8'>
        <HomeSidebar/>
        <main>
          <HomeHeader/>
          <div className='bg-brand_neutral-50 py-2 px-4 rounded-2xl'>
              <header className='flex items-center justify-between py-4 border-b border-brand_neutral-500'>
                <div className='flex items-center gap-8'>
                  <input type="checkbox" name="tick" id="tick"/>
                  <p className='text-brand_primary-150 font-semibold'>247 Candidates</p>
                </div>
                <div className='flex items-center'>
                  <p className='text-brand_primary-150 font-medium border-r border-brand_neutral-450 pr-4'>Qualified</p>
                  <p className='border-r px-4 border-brand_neutral-450'>Task <span className='text-sm text-brand_neutral-300 bg-brand_neutral-150 px-[6px] py-[1px] rounded-2xl'>25</span></p>
                  <p className='pl-4 border-brand_neutral-450'>Disqualified <span className='text-sm text-brand_neutral-300 bg-brand_neutral-150 px-[6px] py-[1px] rounded-2xl'>78</span></p>
                </div>
              </header>
              <ul className='h-[570px] overflow-hidden overflow-y-scroll'>
                  {applicants.map((applicant) => {
                    return(
                      <li key={applicant.id} className='flex items-center gap-2 border-b border-brand_neutral-500'>
                        <input type="checkbox" name="tick" id="tick" />
                        <div className='flex items-center gap-6 p-4'>
                          <img src="/icons/profile.svg"/>
                          <div className='flex flex-col gap-2'>
                            <p className='font-semibold'> {applicant.name} </p>
                            <p className='font-medium'> {applicant.address} </p>
                            <p> {applicant.university} </p>
                            <p className='text-brand_primary-150 flex gap-2'> <span>{applicant.hashtag1}</span><span>{applicant.hashtag2}</span> </p>
                            <div className='flex items-center gap-2'>
                              <p className='bg-brand_primary-300 text-brand_primary-250 rounded-2xl py-[2px] px-[10px] font-medium text-[10px]'>New york</p>
                              <p className='bg-brand_primary-300 text-brand_primary-250 rounded-2xl py-[2px] px-[10px] font-medium text-[10px]'>Marketing</p>
                              <p className='bg-brand_primary-300 text-brand_primary-250 rounded-2xl py-[2px] px-[10px] font-medium text-[10px]'>London</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
          </div>
        </main>
    </section>
  )
}
