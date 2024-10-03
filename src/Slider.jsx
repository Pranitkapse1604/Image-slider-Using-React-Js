import React, { useState } from 'react'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import pic4 from './assets/pic4.jpg'
import pic5 from './assets/pic5.jpg'

function Slider() {
   const [FadeInAnimation,setFadeInAnimation]=useState("null");
   const [MoveUpAnimation,setMoveUpAnimation]=useState("null");
   const [forwardSlideAnimation,setForwardSlideAnm]=useState("null");
   const [BackwardSlideAnimation,setBackwardSlideAnm]=useState("null");

   const [ImageArray,setImageArray]=useState([
    {
        ImgSrc:pic1,
        title:"Kashmir",
    },
    {
        ImgSrc:pic2,
        title:"Manali",
    },
    {
        ImgSrc:pic3,
        title:"Shimala",
    },
    {
        ImgSrc:pic4,
        title:"Goa",
    },
    {
        ImgSrc:pic5,
        title:"Kerala",
    }
   ])

   const ForwardSlide=()=>{
    setFadeInAnimation("FadeInAnm");
    setMoveUpAnimation("MoveUpAnm");
    setForwardSlideAnm("forwardslideanm")
    
    setTimeout(() => {
      setFadeInAnimation("null")
      setMoveUpAnimation("null")
      setForwardSlideAnm("null")
    }, 700);

     //--------------------//
      const data = ImageArray[0];
      setImageArray([...ImageArray,data]);

      setImageArray((prevArr)=>{
        const newArr=[...prevArr];
        newArr.shift();
        return newArr;
      })
   }
 
  const BackwardSlide=()=>{
    
    setFadeInAnimation("FadeInAnm");
    setMoveUpAnimation("MoveUpAnm")
    setBackwardSlideAnm("backwardSlideanm")
    
    setTimeout(() => {
      setFadeInAnimation("null")
      setMoveUpAnimation("null")
      setBackwardSlideAnm("null")

    }, 700);

     //--------------------//


    const data = ImageArray[ImageArray.length-1];
    setImageArray([data,...ImageArray]);

    setImageArray((prevArr)=>{
      const newArr=[...prevArr];
      newArr.pop();
      return newArr;
    })
  }
  return (
    <div className='w-[1000px] h-[450px] flex items-center justify-end relative'>
        <div className='flex overflow-hidden'>
            {
              ImageArray.map((item,index)=>(
                <div key={index} className={(index===0)?`${FadeInAnimation} absolute top-0 left-0 w-[85%] h-full z-0 rounded-xl container-shadow  transition-all duration-700`:`${forwardSlideAnimation} ${BackwardSlideAnimation} h-[200px] w-[140px] my-8 mx-2 z-10 rounded-xl item-shadow transition-all duration-700S`}>
                   <img className='h-full w-full bg-cover object-center rounded-xl' src={item.ImgSrc}/>
                   <div className={`${MoveUpAnimation} h-full w-[350px] absolute top-0 left-0 flex items-center z-20 text-white px-10 transition-all duration-700`}>
                    {(index===0)?
                    <div >
                      <h2 className='text-xl font-bold'>{item.title}</h2>
                      <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <button className='px-4 py-1 my-1 font-semibold text-black bg-white rounded-sm '>Explore</button>
                    </div>:null
                    }
                   </div>
                </div>
              ))
            }
            <div className='w-[85%] absolute left-0 bottom-0 py-5 flex items-center justify-center z-20'>
                <div className='flex gap-2'>
                  <i onClick={BackwardSlide}  className="ri-arrow-left-line bg-white px-1 py-1 rounded-lg cursor-pointer font-bold hover:opacity-80"></i>
                  <i onClick={ForwardSlide} className="ri-arrow-right-line bg-white px-1 py-1 rounded-lg cursor-pointer font-bold hover:opacity-80"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider