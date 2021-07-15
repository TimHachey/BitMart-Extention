///////////////////////////////////////////////////////////////////////////////////////
// File: bitMartScript.js
// Author: Tim Hachey
// Description: Adds buttons to the chart screen on www.bitmart.com that 
//              allows users to hide/show the order-history and buy/sell windows 
///////////////////////////////////////////////////////////////////////////////////////

// buttons
let hideButton = document.createElement('button')
let showButton = document.createElement('button')

// divs to hide/show
let div1 = document.getElementsByClassName('pro-order-info')[0];
let div2 = document.getElementsByClassName('pro-form-info')[0];

// parent divs
let parent1 = div1.parentNode
let parent2 = div2.parentNode

// places to append buttons
let showDiv = document.getElementsByClassName('bm-kchart-content')[0]
let hideDiv = document.getElementById('tab-CURRENT_ORDER')

// hideButton setup
hideButton.innerHTML = '&#9660'
hideButton.id = 'hideButton'
hideButton.style.backgroundColor = 'darkblue'
hideButton.style.color = 'white'
hideButton.style.marginRight = '10pt'

// showButton setup
showButton.innerHTML = ' &#9650'
showButton.id = 'showButton'
showButton.style.backgroundColor = 'darkblue'
showButton.style.color = 'white'
showButton.style.position = 'relative'
showButton.style.left = '0pt'
showButton.style.top = `calc(100% - 30px)`
showButton.style.marginLeft = '5pt'
showButton.style.display = 'none';

// hide orders/trading divs, show the showButton
hideButton.onclick = () => {

    parent1.removeChild(div1);
    parent2.removeChild(div2);
    showButton.style.display = 'initial'
}

// reshow hidden divs, hide the showButton
showButton.onclick = () => {

    parent1.appendChild(div1);
    parent2.appendChild(div2);
    showButton.style.display = 'none';
}

hideDiv.prepend(hideButton)
showDiv.appendChild(showButton)