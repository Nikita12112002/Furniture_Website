import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name="Nikita";
const img1= "https://picsum.photos/300/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/280/300";
const img4= "https://picsum.photos/220/300";
const img5=  "https://picsum.photos/230/300";
const img6=  "https://picsum.photos/240/300";
const img7= "https://picsum.photos/260/300";
const img8= "https://picsum.photos/270/300";
const img9="https://picsum.photos/290/300";
const img10= "https://picsum.photos/299/300";

const img13= "https://picsum.photos/254/300";

const link="https://www.thapatechnical.com";



ReactDOM.render
(
  <>
<h1 contentEditable="true" className="heading"> IMAGE GALLERY </h1>

<h1 className="heading">HELLO </h1>

<div className="img_div">

<img src="https://picsum.photos/272/300" alt="randomImages" />

<img src= {img1} alt="randomImages" />

<img src= {img2} alt="randomImages" />
<img src= {img3} alt="randomImages" />
<img src= {img4} alt="randomImages" />
<img src= {img5} alt="randomImages" />
<img src= {img6} alt="randomImages" />
<img src={img7} alt="randomImages" />


<img src= {img8} alt="randomImages" />
<img src= {img9} alt="randomImages" />
<img src= {img10} alt="randomImages" />



<a href={link} target="_blank">

    <img src= {img13} alt="randomImages" />

</a>

</div>
</>,

document.getElementById("root")

);