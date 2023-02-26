import React from 'react'
import logo from '../assets/logo-beyaz.svg'

export default function NavBar() {
  return (
    <div>
      <header id='header' className='App-header'>
        <div className='container area'>
          <div id='logo-h-city'>
            {/* <a id='logo'href='#'>Fırsat Sitesi</a> */}
            <img src={logo} id='logo'/>
              <button id='h-city' className='btn btn-success'><i className="fa-solid fa-location-dot card-icon"></i>Ankara</button>        
          </div>
           <div id='top-login'>
            <div id='m-user'>
              <i class="fa-solid fa-user"></i>
            </div>
            <ul className='navbar-items'>
                <li>< a className='link link-1'href='#'><i class="fa-regular fa-user mx-2"></i>Üye Ol</a></li>
                <li>< a className='link link-2' href='#'><i class="fa-solid fa-right-to-bracket"></i>Üye Girişi</a></li>
                
            </ul>
        </div>
        </div>
        
        

      </header>
    </div>
  )
}
