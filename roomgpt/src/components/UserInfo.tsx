"use client"
import React from 'react'
import {useUser, UserButton} from "@clerk/nextjs"
import Link from 'next/link';
const UserInfo = () => {
    const { user } = useUser();
  return !user ? (
      <Link href={'/room'} className='bg-blue-500 hover:opacity-90 rounded-lg text-white
    font-semibold px-5 py-3'>Log in</Link> 
  ) : (
        <UserButton></UserButton>
  )
}

export default UserInfo