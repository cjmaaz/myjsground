export function getSearchInput() {
    let searchInp = document.querySelector('#debounce input');
    searchInp.addEventListener('input', e => {
        document.querySelector('#debounce .default').innerText = `Your every keypress: ${e.target.value}`;
    });
    searchInp.addEventListener('input', e => debounce(handler, 1000));
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