import styles from './style';

import { Navbar,
  Billing,
  CardDeal,
  Business,
  CTA,
  Footer,
  Button,
  Clients,Hero,Stats, Testemonial} from './Components';


const App = () => 
 (
    <div className='bg-primary overflow-hidden  w-full text-white '>
         <div className={`${styles.paddingX} ${styles.flexCenter}`}>

       <div className={ `$styles.box-width`}>
  <Navbar/>
       </div>

         </div>

{/* hero section */}
    <div className={`bg-primary ${styles.flexStart} `}>

      <div className={`${styles.boxWidth}`}>

  <Hero/>
      </div>

    </div>

    {/* anpther section */}
    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart} `}>

      <div className={`${styles.boxWidth}`}>
      <Stats/>
      <Business/>
      <Testemonial/>
      <Billing/>
  <CardDeal/>
  <Testemonial/>
  <Clients/>
  <CTA/>
  <Footer/>
 

 
  

      </div>
       </div>

    </div>
  );


export default App