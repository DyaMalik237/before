import React from 'react'
import Link from "next/link"
const Header = () => {
  return (
    <div className="flex gap-8 p-6 bg-gradient-to-t from-sky-900 md:p-10">
<Link href="\">Home page</Link>
<Link href="#">Address page</Link>
<Link href="#"> contact page</Link>
 </div>
  )
}

export default Header