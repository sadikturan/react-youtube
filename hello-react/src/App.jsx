import Navbar from './components/Navbar.jsx';
import PizzaList from './components/PizzaList.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <PizzaList />
          <Footer />
        </div>
      </>
    )
  }