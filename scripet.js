const panels = document.querySelectorAll('.panel')
panels.forEach(panels => {
    panels.addEventListener('click',() => {
        removeactiveclasses()
        panels.classList.add('active')
    })
})
function removeactiveclasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}