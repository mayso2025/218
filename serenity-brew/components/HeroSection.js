import styles from './herosection.module.css';
import Image from 'next/image';

const HeroSection = () => {
    
    return (
    <div className={styles.hero}>
        <h1>Breathe and take a sip</h1>
        <p>Enjoy a complimentary coffe and pastry comb when you sign up with email!</p>
        <div className= {styles.button}> 
        <button href= "" >Sign up!!</button>
        </div>
    </div>
  

  );
};
export default HeroSection;
