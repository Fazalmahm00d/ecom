import Img12 from '../assets/Rectangle 38.png'
function Component7(){
    return(
        <div className='flex items-center justify-center pt-10 pb-20'>
        <div className='w-[80%] flex flex-col'>
          <div className='text-3xl font-medium underline p-2'>
            Instagram
          </div>
           <div className="flex mt-10 ">
            <img className="w-[220px] h-[220px] transition-transform duration-300 ease-in-out hover:scale-110" src={Img12} alt="" />
            <img className="w-[220px] h-[220px] transition-transform duration-300 ease-in-out hover:scale-110" src={Img12} alt="" />
            <img className="w-[220px] h-[220px] transition-transform duration-300 ease-in-out hover:scale-110" src={Img12} alt="" />
            <img className="w-[220px] h-[220px] transition-transform duration-300 ease-in-out hover:scale-110" src={Img12} alt="" />
            <img className="w-[220px] h-[220px] transition-transform duration-300 ease-in-out hover:scale-110" src={Img12} alt="" />
           </div>
          </div>
          </div>
    )
}
export default Component7;