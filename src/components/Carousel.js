import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carousel" className="carousel slide" data-interval="3000" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://www.su.edu/performs/files/2021/07/20191118SymphonyOrchestra41%C2%A9CKingPhotography-1600x300.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://www.su.edu/performs/files/2021/07/20191118SymphonyOrchestra09%C2%A9CKingPhotography-1600x300.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://www.su.edu/performs/files/2021/07/2020SSCConcert24-1600x300.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}
