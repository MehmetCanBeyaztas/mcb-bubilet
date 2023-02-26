import React from 'react'

export default function Search() {
  return (
    <div id='search'>
      <div className='container'>
        <form id='form'>
        <div className='searchbar'>
          <input className='home-search' type="text" placeholder="Etkinlik,sanatçı veya mekan arayın"/>
        <button className='btn btn-primary src-btn'><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className='city-selector'>
          <button id='city-button' className='btn btn-light'><span id='cityname'>Ankara</span><i class="fa-solid fa-bars" id='cityname-icon'></i></button>
        </div>
        </form>
        </div>
    </div>
  )
}
