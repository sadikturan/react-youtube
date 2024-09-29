import './Navbar.css';

export default function Navbar() {
    return (
      <header>
        <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
          <div className="container">
            <a href="#" className='navbar-brand'>Pizza Store</a>
          </div>
        </nav>
      </header>
    );
  }