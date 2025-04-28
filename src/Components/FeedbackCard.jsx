import { quotes } from "../assets";

const FeedbackCard = ({content , name , title , img}) => 
 (
    <div className='flex justify-content flex-col px-10 max-w-[370px] md:mr-10 sm:mr-5 feedback-card py-12 rounded-[20px] cursor-pointer'>

        <img src={quotes} alt=""  className="w-[42px] h-[27px] object-contain" />

        <p className="font-poppins font-normal text-[18px]  leading-[32px] text-white my-10">
            {content}
        </p>

        <div className="flex flex-row ">
            <img src={img} alt={name}  className="w-[48px] h-[48px] rounded-full " />
           <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px]  leading-[32px] text-white my-10">{name}</h4>
              <p className="font-poppins font-semibold text-[16px]  leading-[24px] text-dimwhite ">{title}</p>
           </div>
        </div>
    </div>
  )


export default FeedbackCard