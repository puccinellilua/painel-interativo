const bgColorInput = document.getElementById('bg-color');
const borderWidthInput = document.getElementById('border-width');
const widthInput = document.getElementById('width');
const cardTextInput = document.getElementById('card-text');
const textColorInput = document.getElementById('text-color');
const card = document.getElementById('painel-grafico');
const cardTextDisplay = document.getElementById('card-text-display');

bgColorInput.addEventListener('input', function() {
    card.style.backgroundColor = bgColorInput.value;
});

borderWidthInput.addEventListener('input', function() {
    card.style.borderWidth = `${borderWidthInput.value}px`;
});

widthInput.addEventListener('input', function() {
    card.style.width = `${widthInput.value}px`;
});

cardTextInput.addEventListener('input', function() {
    cardTextDisplay.textContent = cardTextInput.value;
});

textColorInput.addEventListener('input', function() {
    cardTextDisplay.style.color = textColorInput.value;
});
