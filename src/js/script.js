const dTJakobText = document.querySelector('.dTJakob');
const jvWghtRangeInput = document.querySelector('.range--dTJakob-wght');


jvWghtRangeInput.addEventListener('input', function() {
    dTJakobText.style['font-variation-settings'] = `"wght" ${this.value}`;
});

console.log('hello');
