import React from 'react'

const Background = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative overflow-hidden py-10 flex justify-center font-semibold text-xl text-zinc-600">
        Documents.
      </div>
      <h1 className="text-[15vw] blur-s absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2 leading-none">
        DOCS
      </h1>
      <h3 className="text-2xl translate-x-[-50%] translate-y-[-50%] absolute top-[90%] left-[50%] flex text-zinc-700">
        dragable Objects
      </h3>
    </>
  );
}

export default Background
