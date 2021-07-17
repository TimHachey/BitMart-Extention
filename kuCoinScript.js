///////////////////////////////////////////////////////////////////////////////////////
// File: kuCoinScript.js
// Author: Tim Hachey
// Description: Adds buttons to the chart screen on www.kucoin.com that 
//              allows users to hide/show the order-history and buy/sell windows 
///////////////////////////////////////////////////////////////////////////////////////


// buttons
let hideButton = document.createElement('button')
let showButton = document.createElement('button')

// divs to hide/show
let div1 = document.getElementsByClassName('bottom_layout__26645')[0]

// parent divs
let parent1 = div1.parentNode

// places to append buttons
let showDiv = document.getElementsByClassName('KlineItem__a1172')[0]
let hideDiv = document.getElementsByClassName('flexBox__93b57 root__93b57')[0]

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
showButton.style.bottom = '30pt'
showButton.style.height = 'min-content'
showButton.style.width = 'min-content'
showButton.style.marginLeft = '5pt'
showButton.style.display = 'none'

// hide orders/trading divs, show the showButton
hideButton.onclick = () => {

    parent1.removeChild(div1)
    showButton.style.display = 'initial'
}

// reshow hidden divs, hide the showButton
showButton.onclick = () => {

    parent1.appendChild(div1)
    showButton.style.display = 'none'
}

hideDiv.prepend(hideButton)
showDiv.appendChild(showButton)