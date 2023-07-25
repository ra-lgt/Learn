import React from 'react';

function  clicked(){
    alert('1');
}
function clicker(){
    return 1;
}
function Footer(){
    
   let a=clicker();
    return (
        <div>
        <button onClick={clicked}>hello</button>
        <h1>{a}</h1>
        </div>
    )
}
export default Footer;