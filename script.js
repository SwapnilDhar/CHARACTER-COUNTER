const textareaEl = document.getElementById('text-area')
const totalcounterEl = document.getElementById('total-counter')
const remainingcounterEl = document.getElementById('remaining-counter')

textareaEl.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter(){
    totalcounterEl.innerText = textareaEl.value.length
    remainingcounterEl.innerText = textareaEl.getAttribute('maxlength') - textareaEl.value.length
}