const form = document.querySelector('form');
console.log(form);


form.addEventListener('submit', function(e){
  e.preventDefault()
  //value string me milegi 
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results');
  if(height === '' || height < 0 || isNaN(height)){
     result.innerHTML = "plese give valid height"
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = "plese give valid weight"
  }else {
    const BMI = (weight / ((height*height)/10000)).toFixed(2);
    //show the result 
    if(BMI < 18.6){
      results.innerHTML=`<span>You are under weight with BMI:${BMI}</span>`;
    }else if(BMI>=18.6 && BMI<=24.9){
      results.innerHTML=`<span>You are normal weight with BMI:${BMI}</span>`;
    }else{
      results.innerHTML=`<span>You are over weight with BMI:${BMI}</span>`;
    }
    


  }


})