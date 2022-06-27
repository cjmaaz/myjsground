export function getSearchInput() {
    let searchInp = document.querySelector('#debounce input');
    searchInp.addEventListener('keyup', e => {
        document.querySelector('#debounce .default').innerText = `Your every keypress: ${searchInp.value}`;
    });
    searchInp.addEventListener('keyup', e => debounce(handler, 1000));
}

function handler() {
    document.querySelector('#debounce .debounced').innerText = `Debunced: ${searchInp.value}`;
}

function debounce(f, ms) {
    console.log('Debouncer Ran');
    let timeout;
    return function () {
        console.log('Handler Ran');
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            f();
        }, ms);
    }
}