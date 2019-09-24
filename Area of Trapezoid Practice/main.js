//Add EventListener
document.getElementById('click1').addEventListener('click', calculateMath);

//Add function
function calculateMath() {
    //Update the content
    let num1 = document.getElementById('toptop').value;
    let num2 = document.getElementById('boom').value;
    let num3 = document.getElementById('height').value;

    let total =  ((num1 + num2) / 2) * num3;

    document.getElementById('result').innerHTML = total;
}