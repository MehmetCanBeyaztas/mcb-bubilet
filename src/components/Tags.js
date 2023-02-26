import React from 'react'

export default function Tags() {
  return (
    <div id='tag-container' className='container'>
        <div className='row rows-col-5 tag'>
            <div className='col my-3 tags'>
                <span><img className='tag-pic' src="https://cdn.bubilet.com.tr/files/Etiket/konser-69529.png"/></span>
                <a href='#'> KONSER</a>
            </div>
            <div className='col my-3 mx-3 tags '>
                <span><img className='tag-pic'src="https://cdn.bubilet.com.tr/files/Etiket/tiyatro-69756.png"/></span>
                <a href='#'>TİYATRO</a>
            </div>
            <div className='col my-3 tags'>
                <span><img className='tag-pic'src="https://cdn.bubilet.com.tr/files/Etiket/festival-63840.png"/></span>
                <a href='#'>FESTİVAL</a>
            </div>
            <div className='col-3 my-3 mx-3 tags '>
                <span><img className='tag-pic'src="https://cdn.bubilet.com.tr/files/Etiket/cocuk-aktiviteleri-86301.png"/></span>
                <a href='#'>ÇOCUK AKTİVİTELERİ</a>
            </div>
            <div className='col my-3 tags'>
                <span><img id='blog-pic' className='tag-pic 'src="https://www.bubilet.com.tr/assets/images/icon-blog.png"/></span>
                <a href='#'>BLOG</a>
            </div>
        </div>
        
      
    </div>
  )
}
