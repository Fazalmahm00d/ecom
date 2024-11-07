import Img4 from '../assets/image 9.png'
import Img5 from '../assets/Mask Group.png'
import Img6 from '../assets/Mask Group (1).png'
import Img7 from '../assets/Mask Group (2).png'
import Heart from '../assets/love.svg'
import Component31 from './Component31'

function Component3(){
  const comp3data=[
    {
      id:'24apfi0h',
      img:Img4,
      name:"Singo Maple",
      discount:"20% Off",
      price:1260,
    },
    { 
      id:'24pqfi0h',
      img:Img5,
      name:"Singo Ebony",
      discount:"20% Off",
      price:1264, 
    },
    {
      id:'24appqfi0h',
      img:Img6,
      name:"Rakai Ebony",
      discount:"15% Off",
      price:1118, 
    },
    {
      id:'24appqfia0h',
      img:Img7,
      name:"Mini Maple",
      discount:"10% Off",
      price:1024, 
    },
    
  ]
    return(
    <div className='flex items-center justify-center py-10'>
      <div className='w-[80%]'>
        <div className='text-3xl font-medium underline p-6'>
            Monthly Deals
        </div>
        <div className="grid grid-cols-4 gap-20 ">
          {
            comp3data.map((items)=>{
            return <Component31 data={items}/>
            })
          }
        </div>
      </div>
    </div>
    )
}

export default Component3