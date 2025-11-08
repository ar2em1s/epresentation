import { default as React, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Image({ element }) {
  const { presentationId } = useParams()
  const [hidden, setHidden] = useState(false)
  const path = `/epresentation/presentation_assets/${presentationId}/${element.name}`

  return (
    <div className='flex md:w-[65vh] mx-auto justify-center'>
      <div className='relative'>
        {
          element.hidden &&
          <div
            className='absolute top-0 left-0 bg-black w-full h-full text-white'
            onClick={(_) => setHidden(true) } hidden={hidden}
          >
            <div className='flex justify-center items-center w-full h-full'>
              <span className='h-fit'>Show</span>
            </div>
          </div>
        }
        <img src={path} alt='image' />
      </div>
    </div>
  )
}
