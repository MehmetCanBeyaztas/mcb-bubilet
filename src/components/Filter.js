import React from 'react'

export default function Filter() {
  return (
    <div className='container'>
      <div className='row mb-3'>
        <div className='col-7 city-title'>
            <h3>Ankara Etkinlikleri</h3>
        </div>
        <div className='col-1 text-center' id='filter-button'>
            <button className='btn btn-primary'><span>Trendler</span><i className="fa-solid fa-angle-down my-1 trend"></i></button>
        </div>
        {/* <div className='col-1 text-center'>
            <button className='btn btn-primary'><span><i className="fa-sharp fa-solid fa-grip"></i></span></button>  
        </div>
        <div className='col-1 text-center'>
            <button className='btn btn-primary'><span><i className="fa-regular fa-grip-dots"></i></span></button>
        </div> */}
      </div>
    </div>
  )
}
