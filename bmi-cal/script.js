// BMI calculation
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let unit = document.getElementById('unit').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi;

    if (unit === 'imperial') {
        weight = weight * 0.453592; // Convert lbs to kg
        height = height * 2.54; // Convert inches to cm
    }

    if(weight > 0 && height > 0){
        bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        let result = document.getElementById('result');
        let bmiMeter = document.getElementById('bmiMeter');
        bmiMeter.value = bmi;

        result.classList.remove('hidden');
        result.innerHTML = `<h2 class="text-xl font-bold mb-2">Your BMI is ${bmi}</h2>`;

        if (bmi < 18.5) {
            result.className = "p-4 mt-4 border-2 rounded-lg border-blue-500 bg-blue-100 text-blue-700";
            result.innerHTML += '<p>Underweight: It is advised to gain some weight. A balanced diet and strength training exercises can help.</p>';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.className = "p-4 mt-4 border-2 rounded-lg border-green-500 bg-green-100 text-green-700";
            result.innerHTML += '<p>Normal weight: Keep up the good work! Maintain a balanced diet and regular exercise.</p>';
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.className = "p-4 mt-4 border-2 rounded-lg border-yellow-500 bg-yellow-100 text-yellow-700";
            result.innerHTML += '<p>Overweight: Consider adopting a healthier diet and incorporating more physical activity into your routine.</p>';
        } else {
            result.className = "p-4 mt-4 border-2 rounded-lg border-red-500 bg-red-100 text-red-700";
            result.innerHTML += '<p>Obese: It is recommended to seek advice from a healthcare provider for a suitable weight loss plan.</p>';
        }
    } else {
        alert("Please enter valid weight and height values");
    }
});
