import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let div = document.getElementById("root");

let Heading = () => {
  return(
    <h1>Heading Component</h1>
  )
}

let Paragraph = () => {
  return(
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis repudiandae sed voluptates accusantium incidunt vitae inventore ad in nulla commodi?</p>
  )
}

let List = () => {
  return(
      <ul>
                <li>Book</li>
                <li>Pen</li>
                <li>Laptop</li>
                <li>HeadPhones</li>
                <li>Plant</li>
                <li>Coffee</li>
                <li>Coffee Mug</li>
            </ul>
  )
}

let Table = () => {
  return(
     <table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>Item No</th>
      <th>Item Name</th>
      <th>Quantity</th>
      <th>Price ($)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Book</td>
      <td>5</td>
      <td>50</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Pen</td>
      <td>10</td>
      <td>15</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Backpack</td>
      <td>2</td>
      <td>80</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Laptop</td>
      <td>1</td>
      <td>800</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Headphones</td>
      <td>3</td>
      <td>120</td>
    </tr>
  </tbody>
</table>
  )
}

createRoot(div).render(
<div>
 <Heading/>
 <Paragraph/>
 <List/>
 <Table/>

</div>

)