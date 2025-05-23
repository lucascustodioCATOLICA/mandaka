import Top from "./components/top/Top";
import Center from "./components/center/Center";
import Footer from "./components/footer/Footer";
import styles from "./styles.module.css";

function FirstPage() {
  return (

    <div className={styles.container}>
      <Top />
      <Center />
      <Footer />
    </div>
 
    
  );
}
export default FirstPage;
