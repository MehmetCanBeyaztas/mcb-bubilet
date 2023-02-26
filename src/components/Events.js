import React from 'react'

export default function Events({events}) {
  return (

    <div id='card' className='col'>
     <a id='cardlink' href='#'>
      <div className="card" >
          <img src={events.imgsrc} className="card-img-top img-fluid zoom" alt="..."/>
        <div className="card-body">
          <div id={events.koltuk}><span className='koltuklu'></span></div>
          <h5 className="card-title ellipsis">{events.title}</h5>
          <p className="card-text ellipsis"><i className="fa-solid fa-location-dot card-icon loc"></i>{events.adress}</p>
          <hr/>
          <p className="card-text ellipsis"><i className="fa-sharp fa-solid fa-calendar-days card-icon cal"></i>{events.date}</p>
          <div id='card-button' className="btn btn-primary"><span id='redprice'>{events.redprice}</span><b id='price'>{events.price}</b><i className="fa-solid fa-basket-shopping"></i></div>
        </div>
      </div>
    </a>
  </div>
      
              
  )
}
