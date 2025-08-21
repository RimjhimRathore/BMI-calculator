// const forms = document.querySelector('form');
// forms.addEventListener('submit',function(e){
//     e.preventDefault()

//    const height =  parseInt(document.querySelector('#height').value)
//  const weight =  parseInt(document.querySelector('#weight').value)
    
//  const results  = document.querySelector('.results')
//  if (height == ''|| height <0 ||isNaN(height)){
//     results.innerHTML = `Please give a valid height.`;
//  }
 
// else if (weight == ''|| weight <0 ||isNaN(weight)){
//     results.innerHTML = `Please give a valid height.`;
//  }
// else {
// const bmi=   (weight/ ((height*height)/10000)).toFixed(2)
// }
// // if (bmi > 24.)
// results.innerHTML = `<span>${bmi}</span>`;
// })
// const forms = document.querySelector('form');

// forms.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('.result');

//     if (isNaN(height) || height <= 0) {
//         results.innerHTML = `⚠️ Please enter a valid height.`;
//     } else if (isNaN(weight) || weight <= 0) {
//         results.innerHTML = `⚠️ Please enter a valid weight.`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//         let message = '';
//         if (bmi < 18.6) {
//             results.style.color = "orange"
//             message = "Underweight 😟";
//         } else if (bmi >= 18.6 && bmi <= 24.9) {
//             results.style.color = "green"
           
//             message = "Normal 🙂";
//         } else {
//             results.style.color = "red"

//             message = "Overweight 😕";
//         }

//         results.innerHTML = `<h3>Your BMI is ${bmi} → ${message}</h3>`;
//     }
// });

const forms = document.querySelector('form');

forms.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value); // changed to parseFloat
    const weight = parseFloat(document.querySelector('#weight').value); // changed to parseFloat
    const results = document.querySelector('.result');

   

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `⚠️ Please enter a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `⚠️ Please enter a valid weight.`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let message = '';
        if (bmi < 18.6) {
            results.style.color = "orange"
            message = "Underweight 😟";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.style.color = "green"
            message = "Normal 🙂";
        } else {
            results.style.color = "red"
            message = "Overweight 😕";
        }

        results.innerHTML = `<h3>Your BMI is ${bmi} → ${message}</h3>`;
    }
});
 function convertToCm() {
        let feet = parseFloat(document.getElementById("feet").value); // changed to parseFloat
        if (feet) {
            // 1 foot = 30.48 cm
            let cm = (feet * 30.48).toFixed(2);
            document.getElementById("cmResult").innerHTML = 
              `${feet} feet = <b>${cm} cm</b>`;

            // also auto-fill into the main height input
            document.getElementById("height").value = cm;
        } 
    }

