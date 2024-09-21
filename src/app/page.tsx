import React from 'react'

const page = () => {
  return (
    <div>Home page<figure className=" bg-gradient-to-t from-sky-200 md:flex bg-slate-100 rounded-xl p-8 md:p-10 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/home2.avif" alt="" width="384" height="512"/>
    <div className="  pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        A house is not just a shelter from the storm,
But a reflection of the soul that dwells within its form.
Its walls hold the whispers of our past,
And the echoes of memories that forever last.
A house is a canvas of love and pain,
Where every room tells a story, every wall bears a stain.
It is a place where dreams are born and fade,
Where the heart finds solace, and the soul is made.
The creaks and groans of its wooden bones,
Echo the laughter and tears that make a house a home.

        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="   text-sky-500 dark:text-sky-400">
          Diya malik
        </div>
        <div className=" text-sky-700 dark:text-slate-500">
          Student of Ai
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page