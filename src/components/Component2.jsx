import Img2 from '../assets/image 7.png'
import Img3 from '../assets/image 8.png'

function Component2(){
    return(
        <div className="flex justify-center items-center py-20  ">
          <div className="flex justify-between gap-5 w-[80%]">
            <div className="bg-white p-5 w-full h-[16rem] relative">
            <div className="text-3xl ">
                Luxurious Eyewear
            </div>
            <p className="text-l font-light mt-2  w-[60%]">
            See the beauty of exotic world with the luxurious glasses            </p>
            <div className="underline font-bold mt-4">
                Discover Now
            </div>
            <div className="absolute right-0 bottom-0">
                <img src={Img2} alt="" />
            </div>
            </div>
            <div className="bg-white p-5 h-[16rem] w-full relative">
            <div className="text-3xl ">
                Comfortable Watches
            </div>
            <p className="text-l font-light mt-2 w-[60%]">
            Feels the balancing function and beauty in our wooden watches
            </p>
            <div className="underline font-bold mt-4 w-[30%]">
                Discover Now
                
            </div>
            <div className="absolute right-0 bottom-0">
                <img src={Img3} alt="" />
            </div>
            </div>
        </div>
        </div>
    )
}
export default Component2;