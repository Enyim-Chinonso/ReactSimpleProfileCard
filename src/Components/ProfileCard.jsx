import React from 'react';

const ProfileCard = () => {
  return (
    <div className='card'>
      <img src="src/assets/IMG_20240131_095209_547.jpg" alt="image" />
      <h2 style={{color:"red"}}>Enyim Chinonso</h2>
      <p className='role'>Software Engineer</p>
      <p className='location'>Ebonyi, Nigeria</p>
      <div className='contact'>
       <p>enyimchinonso23@gmail.com</p>
       <p><a href="https://www.linkedin.com/in/chinonso-enyim-1435762a1/" target='_blank' rel="noreferrer" >LinkedIn page</a></p>
      </div>
    </div>
  );
};

export default ProfileCard;