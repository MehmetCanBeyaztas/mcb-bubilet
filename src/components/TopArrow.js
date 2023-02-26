import React from 'react'

export default function TopArrow() {
  const upArrow = document.getElementById('upArrow');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 250) {
      upArrow.classList.add('arrow-active');
    } else {
      upArrow.classList.remove('arrow-active');
    }
  });
  return (
    <a href='#header'><div id='upArrow'>
      <i class="fa-solid fa-angle-up"></i>
    </div>
    </a>
  )
}
