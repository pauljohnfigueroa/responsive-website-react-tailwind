import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Billing from './components/Billing'
import Business from './components/Business'

import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'

import styles from './styles'

function App() {
  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <didv className={`${styles.boxWidth}`}>
            <Navbar />
          </didv>
        </div>
      </div>

      <div>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Footer />
          <Cta />
        </div>
      </div>

    </div>
  );
}

export default App;
