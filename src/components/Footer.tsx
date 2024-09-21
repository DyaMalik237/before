import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="flex gap-6 p-8 bg-gradient-to-t from-teal-800 md:p-10">
        <Link href="#" className="pl-3 pr-3">Privacy</Link>
        <Link href="#" className="pl-3 pr-3">terms</Link>
        <Link href="#" className="pl-3 pr-3">condition</Link>
    </div>
  )
}

export default Footer