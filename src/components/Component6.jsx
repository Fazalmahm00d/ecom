import Img11 from '../assets/Mask Group (4).png'
function Component6(){
    return(
        <div className="flex relative py-32">
           <div className="w-[50%] flex justify-start items-start">
            <div className="relative right-0 bg-[#f1ddc9] w-[515px] h-[300px]">
              <div className="absolute top-[70px] right-[-165px]">
                 <img src={Img11} alt="" />
              </div>
            </div>
           </div>
           <div className="w-[50%] ">
               <div className='flex flex-col justify-center items-start gap-16 w-[60%]'>
               <div className='text-4xl w-full text-center'><span class="inline-block border-b-2 border-black pb-2">Testimonials</span>
               </div>
               <div className='text-l w-full font-300'>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</div>
               <div className='flex flex-col'>
                <div className='text-2xl font-bold'>Gita Savitri</div>
                <div className='text-l font-light mt-2'>Content Creator/Influencer</div>
               </div>
               </div>
           </div>
        </div>
    )
}

export default Component6;