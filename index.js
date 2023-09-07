let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl. textContent = count    
    
}

function save() {
    let countSave = + count + " - " 
    saveEL.textContent += countSave
    count = 0
    countEl.textContent = 0
    
}

function reset(){
    countEl.textContent = 0
    saveEL.textContent = "Previous raws:"
}





