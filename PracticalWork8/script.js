const mainH = document.querySelector('.main')
mainH.addEventListener('click', function(event) {
    
    document.querySelector('.selector').classList.toggle('hide')
})





const exersices = []
for (let i = 0; i < 7; i++) {
    exersices.push(`Exersice ${i+1}`)
}

let selection = '<div class="selector hide">'

for (let i = 0; i < exersices.length; i++) {
    selection += '<a>' + exersices[i] + '</a>\n';
}
selection += '</div>'


//mainH.outerHTML += selection
console.dir(mainH)



