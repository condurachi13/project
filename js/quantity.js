function plusQuantity() {
    let input = document.getElementById('quantity');
    let currentValue = parseInt(input.value, 10);

    if (isNaN(currentValue)) {
        currentValue = 1;
    }
    
    input.value = currentValue + 1;
}
function minusQuantity() {
    let input = document.getElementById('quantity');
    let currentValue = parseInt(input.value, 10);

    if (isNaN(currentValue)) {
        currentValue = 1;
    }
    
    input.value = currentValue - 1;
}