function putInsertedValue() {
    //Сначала положили в тег block
    let block = document.getElementById('block');
    let val =  document.createElement('p');
    val.className = 'paragraph';
    val.innerHTML = document.getElementById('input').value;
    block.append(val);

    //Проверяем количество тегов 'p'
    if (block.querySelectorAll('p').length == 5) {
        let arr = block.querySelectorAll('p');
        arr[0].remove();
    }
    // let length = block.querySelectorAll('p');
    // console.log(length);

}

function showHiddenButton() {
    let button = document.getElementById('button');
    button.style.display = 'block';
}
export { putInsertedValue }
export { showHiddenButton }