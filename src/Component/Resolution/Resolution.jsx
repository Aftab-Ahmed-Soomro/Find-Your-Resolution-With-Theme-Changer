import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const Resolution = () => {
    const {theme, handleOnClick} = useContext(ThemeContext)
    // console.log(window.innerWidth, window.innerHeight);

  const [dimensions, setDimensions] = useState({
    width : window.innerWidth,
    height : window.innerHeight
  })
  const updateDimensions = () => {
    setDimensions({
      width : window.innerWidth,
      height : window.innerHeight
    })
  }
  console.log('Mounted');
  useEffect(()=> {
    window.addEventListener('resize',updateDimensions);
    console.log('Updated');
    // Clean Up Function
    return ()=>{
      window.removeEventListener("resize",updateDimensions);
      console.log('Unmounted');
    }

  },[dimensions])
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <div className={`boxShadow rounded-xl flex flex-col gap-10 justify-center items-center sm:p-16 xsm:p-8 ${
            theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
          }`}>
            {/* <button className={`py-2 px-4 rounded-2xl border-2 border-solid border-black ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`} onClick={handleOnClick}>
                {theme === 'dark' ? 'light' : 'dark'}
            </button> */}
            <div className='flex justify-center items-center ms-[190px] gap-2'>
            <div 
      className={`w-16 h-8 flex items-center ${theme === 'dark' ? 'bg-white' : 'bg-black'} rounded-full p-1 cursor-pointer transition-colors duration-300`} 
      onClick={handleOnClick}
    >
      <div 
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-7 bg-black' : 'bg-white'}`}
      ></div>
    </div>
      <div>
        <h1 className='font-semibold'>Toggle Theme</h1>
        </div>
        </div> 
            <h1 className='sm:text-3xl xsm:text-2xl font-normal'>Find Your Screen Resolution</h1>  
            <h1 className='sm:text-6xl xsm:text-5xl font-normal'>{dimensions.width} x {dimensions.height}</h1>
        </div>
    </div>
  )
}

export default Resolution
