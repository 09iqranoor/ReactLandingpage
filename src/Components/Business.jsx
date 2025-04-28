import { features } from "../constants";
import styles,{ layout} from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1  ? "mb-6" : "mb-0" } feature-card cursor-pointer`}>
      <div className={`w-[54px] h-[64px] rounded-full ${styles.flexCenter} bg-dimblue`}>
        <img src={ icon } alt="icons" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23px] mb-1 ">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimwhite text-[16px] leading-[24px] mb-1 ">
          {content}
        </p>
      </div>
    </div>
  );
}
const Business = () => 
   (
    <section id="features" className={layout.section} >

      <div className={layout.sectionInfo}>

        <h2 className={styles.heading2}>Lorem ipsum dolor sit,  <br className="sm:block hidden" />
          ametconsectetur adipisicing.

        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Iure illum nostrum excepturi
            ut quis, nam similique temporibus, quae 
            repellendus assumenda minima dignissimos,
             alias fuga placeat eveniet repudiandae aperiam
              fugiat numquam nisi eligendi reprehenderit 
              exercitationem fugit doloremque?
           Repellendus officia mollitia architecto?</p>

           <Button styles="mt-10">

           </Button>

      </div>


      <div className={`${layout.sectionImg} flex-col `}>
        {features.map((feature, index)=>(
          <FeatureCard   key={feature.id}{...feature} index={ index } />
        ))}
      </div>

    </section>
  )
      
export default Business