import Img4 from '../assets/image 9.png'
import Img5 from '../assets/Mask Group.png'
import Img6 from '../assets/Mask Group (1).png'
import Img7 from '../assets/Mask Group (2).png'
import Heart from '../assets/love.svg'

function Component3(){
    
    return(
        <div className='flex items-center justify-center py-10'>
           <div className='w-[80%]'>
          <div className='text-3xl font-medium underline p-6'>
            Monthly Deals
          </div>
          <div className="flex gap-2 mt-5  justify-around items-center  ">
           <div className=" p-3 bg-white group ">
             <img src={Img4} alt="" width="200px" height="220px" />
             <div className='py-5'>
                <h2 className='font-700 text-2xl font-medium '>Singo Maple</h2>
                <p className='font-light text-sm'>20% Off</p>
                <div className='text-xl font-bold mt-5'>Rs.1260</div>
             </div>
             <div className=' gap-2 items-center hidden justify-center  group-hover:flex '>
              <button className='p-2 w-[20%] border-2 border-[#d84727]'>
                <img src={Heart} alt="" />
              </button>
              <button className='py-2 w-[80%] bg-[#d84727] text-white'>Add To Cart</button>
             </div>
           </div>
           <div className=" p-3 bg-white group">
             <img src={Img5} alt="" width="200px" height="220px" />
             <div className='py-5'>
                <h2 className='font-700 text-2xl font-medium '>Singo Maple</h2>
                <p className='font-light text-sm'>20% Off</p>
                <div className='text-xl font-bold mt-5'>Rs.1260</div>
             </div>
             <div className=' gap-2 items-center hidden justify-center  group-hover:flex '>
              <button className='p-2 w-[20%] border-2 border-[#d84727]'>
                <img src={Heart} alt="" />
              </button>
              <button className='py-2 w-[80%] bg-[#d84727] text-white'>Add To Cart</button>
             </div>
           </div>
           <div className=" p-3 bg-white group">
             <img src={Img6} alt="" width="200px" height="220px" />
             <div className='py-5'>
                <h2 className='font-700 text-2xl font-medium '>Singo Maple</h2>
                <p className='font-light text-sm'>20% Off</p>
                <div className='text-xl font-bold mt-5'>Rs.1260</div>
             </div>
             <div className='gap-2 items-center hidden justify-center  group-hover:flex '>
              <button className='p-2 w-[20%] border-2 border-[#d84727]'>
                <img src={Heart} alt="" />
              </button>
              <button className='py-2 w-[80%] bg-[#d84727] text-white'>Add To Cart</button>
             </div>
           </div>
           <div className=" p-3 bg-white group" >
             <img src={Img7} alt="" width="200px" height="220px" />
             <div className='py-5'>
                <h2 className='font-700 text-2xl font-medium '>Singo Maple</h2>
                <p className='font-light text-sm'>20% Off</p>
                <div className='text-xl font-bold mt-5'>Rs.1260</div>
             </div>
             <div className=' gap-2 items-center hidden justify-center  group-hover:flex '>
              <button className='p-2 w-[20%] border-2 border-[#d84727]'>
                <img src={Heart} alt="" />
              </button>
              <button className='py-2 w-[80%] bg-[#d84727] text-white'>Add To Cart</button>
             </div>
           </div>
           
           </div>
        </div>
        </div>
    )
}

export default Component3