


function tip(amount, percentageOfTip){
 

   if(percentageOfTip>=0 && percentageOfTip<100){
  
  let no = (amount*percentageOfTip*(0.01)).toFixed(2);
  
  let show =`<h2>Our Tip should be INR ${no} on total Amount of INR ${amount}</h2>`
  
   document.querySelector('.show_output').innerHTML = show;
   document.querySelector('#tipPercentage').value ="";
  // show.innerHTML = result;
   }
  else{
    alert('invald input for tip');
    document.querySelector('#tipPercentage').value ="";
  }

  
  

}

