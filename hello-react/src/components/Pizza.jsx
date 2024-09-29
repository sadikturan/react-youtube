export default function Pizza() {
    return (
      <div className='col'>
        <div className="card">
          <img src="/img/pizza1.jpg" alt=""  className='card-img-top p-2 p-md-3 border-bottom'/>
          <div className="card-body">
            <h2 className='card-title'>Sucuklu Pizza</h2>
            <p className='card-text'>Lorem ipsum dolor sit amet.</p>
            <span className='badge text-bg-primary'>200 TL</span>
          </div>
        </div>
      </div>
    );
  }