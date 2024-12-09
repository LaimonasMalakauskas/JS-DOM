let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function(){
  // console.log('clicked');
  let employeeCount = document.getElementById('employee-count').valueAsNumber;
  let loavesPerEmployee = document.getElementById('loaves-per-employee').valueAsNumber;
  let orderCount  = document.getElementById('order-count').valueAsNumber;

  let kepyklaTotal = employeeCount * loavesPerEmployee;
  let arPavyks = kepyklaTotal >= orderCount;

  // let logInfo = {
  //   kepyklaTotal,
  //   arPavyks
  // };
  // console.log(logInfo);

  let results = document.getElementById('results');
  // console.log(results);

  results.innerHTML = `<p><strong>Kpykla per dieną spės pagaminti:</strong> ${kepyklaTotal} kepalų</p>`;
  results.innerHTML += `<p><strong>Jai reikia spėti:</strong> ${orderCount} kepalų</p>`;
  results.innerHTML += `<p><strong>Ar spės pagaminti?:</strong> ${arPavyks ? 'Taip': 'Ne'} </p>`;

});

document.getElementById('employee-count').addEventListener('keyup', function(event){
  // console.log('buvo paspausta');
  // console.log(event.target.valueAsNumber);
  let imputValue = event.target.valueAsNumber;

  if (imputValue < 0 ){
    // console.log(event.target);
    event.target.classList.add('error');
    event.target.nextElementSibling.classList.add('show');
  }else{
    event.target.classList.remove('error');
    event.target.nextElementSibling.classList.remove('show');
  }
});

document.getElementById('loaves-per-employee').addEventListener('keyup', function(event){
  let imputValue = event.target.valueAsNumber;

  if (imputValue < 0 ){
    event.target.classList.add('error');
    event.target.nextElementSibling.classList.add('show');
  }else{
    event.target.classList.remove('error');
    event.target.nextElementSibling.classList.remove('show');
  }
});

document.getElementById('order-count').addEventListener('keyup', function(event){
  let imputValue = event.target.valueAsNumber;

  if (imputValue < 0 ){
    event.target.classList.add('error');
    event.target.nextElementSibling.classList.add('show');
  }else{
    event.target.classList.remove('error');
    event.target.nextElementSibling.classList.remove('show');
  }
});

document.getElementById('reset').addEventListener('click', function(){
  // console.log('clicked');
  document.getElementById('employee-count').value = 0;
  document.getElementById('loaves-per-employee').value = 0;
  document.getElementById('order-count').value = 0;
  document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>';

});
  

