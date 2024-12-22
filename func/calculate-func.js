document.getElementById('calculateButton').addEventListener('click', function () {
    
    const carType = document.getElementById('carType').value;
    const distance = parseFloat(document.getElementById('distance').value);
  
    if (!distance || distance <= 0) {
      document.getElementById('result').textContent = "Пожалуйста, введите корректное расстояние.";
      return;
    }
  
   
    const rates = {
      "economy-price": 10,    
      "comfort-price": 20,   
      "business-price": 40    
    };
 
    
    const price = rates[carType] * distance;
  
    
    document.getElementById('result').textContent = `Стоимость поездки: ${price.toFixed(2)} руб.`;
});