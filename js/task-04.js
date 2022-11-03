let counterValue = 0;

const refs = {
decrement: document.querySelector('button[data-action="decrement"]'),
increment: document.querySelector('button[data-action="increment"]'),
value: document.querySelector('#value')
};

// console.log(refs);

const targetButtonClickHandler = (value) => {
    counterValue += value;
    refs.value.innerHTML = counterValue;
};

refs.increment.addEventListener('click', function() {targetButtonClickHandler(1)});
refs.decrement.addEventListener('click', function() {targetButtonClickHandler(-1)});