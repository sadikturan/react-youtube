import Navbar from './components/Navbar.jsx';
import PizzaList from './components/PizzaList.jsx';

export default function App() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <PizzaList />
        </div>
      </>
    )
  }