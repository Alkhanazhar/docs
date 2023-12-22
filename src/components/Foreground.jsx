import React, { useRef } from 'react'
import Card from './Card'
const Foreground = () => {
const ref = useRef(null);

    return (
      <div
        ref={ref}
        className="w-[100vw] h-[100vh] overflow-hidden z-[3] absolute top-0 left-0 flex gap-6 p-10 flex-wrap"
      >
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
      </div>
    );
}

export default Foreground
