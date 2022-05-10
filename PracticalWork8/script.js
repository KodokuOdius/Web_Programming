const allListItems = [
    '<li class="selection"><h5 data-ex="1">Exersice 1</h5></li>',
    '<li class="selection"><h5 data-ex="2">Exersice 2</h5></li>',
    '<li class="selection"><h5 data-ex="3">Exersice 3</h5></li>',
    '<li class="selection"><h5 data-ex="4">Exersice 4</h5></li>',
    '<li class="selection"><h5 data-ex="5">Exersice 5</h5></li>',
    '<li class="selection"><h5 data-ex="6">Exersice 6</h5></li>',
    '<li class="selection"><h5 data-ex="7">Exersice 7</h5></li>'
]


function makeCode(id) {
    const start = `<div id='s-${id}' class='selector hide'>\
            <ul style='list-style: none;'>`
    const end = "</ul>\
        </div>"
    let items = ''
    for (let i = 0; i <= 7; i++) {
        if (i !== id-1) {
            items += allListItems[i]
        }
    }
    return start + items + end
}

function addSelector(event) {
    const id = event.target.id
    document.getElementById(`s-${id}`).classList.toggle('hide')
    event.stopPropagation()
}

function changeEx(event) {
    const exNumber = event.target.dataset['ex']
    event.path[4].classList.add('hide')
    document.getElementById(`ex-${exNumber}`).classList.remove('hide')
}



// main
document.querySelectorAll('.main').forEach(function(main) {
    main.outerHTML += makeCode(main.id);
    document.getElementById(`${main.id}`).addEventListener('click', addSelector);
})

document.querySelectorAll('.selection').forEach(function(selection) {
    selection.addEventListener('click', changeEx)
})

document.addEventListener('click', function() {
    document.querySelectorAll('.selector').forEach(function(selector) {
        if (!selector.classList.contains('hide')) {
            selector.classList.add('hide');
        }
    })
})
