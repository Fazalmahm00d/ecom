import Img8 from '../assets/Mask Group (3).png'
function Component4(){
    return(
        <div className="flex relative py-32">
           <div className="w-[25%] pl-[10rem]">
               <h1 className='text-3xl font-medium underline' >Recent News</h1>
               <h2 className='mt-40 text-l font-light tracking-widest'>Where To Travel</h2>
               <h1 className='text-3xl mt-3'>Matoa Where To Travel? Yogyakarta</h1>
               <button className='mt-10 py-3 px-8 border-2 border-[#d84727] text-[#d84727]'>Discover</button>
           </div>
           <div className="w-[75%] flex justify-end items-end">
            <div className="relative right-0 bg-[#f1ddc9] w-[640px] h-[458px]">
              <div className="absolute top-[60px] left-[-300px]">
                 <img src={Img8} alt="" />
              </div>
            </div>
           </div>
        </div>
    )
}

export default Component4;