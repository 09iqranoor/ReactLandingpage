import { card } from '../assets';
import styles,{layout} from '../style';
import Button from './Button';
const CardDeal = () => 
  (
   <section className={layout.section}>
           <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Lorem ipsum, dolor si
              t amet  <br  className='sm:block hidden' /> adipisicing qu repellat. Facere.</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Lorem ipsum dolor
                 sit amet consectetur, a
                 dipisicing elit. Sunt ex quasi,
                  alias qui eligendi deserunt
                 asperiores laudantium possimus in sit!</p>
                 <Button  styles="mt-10 "  />
           </div>
         

<div className={layout.sectionImg}> 
       <img src={card} alt="card " className='w-[100%] h-[100%]' />
</div>

   </section>
  )


export default CardDeal