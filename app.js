const items = document.querySelectorAll(".item")
const scoreTable = document.querySelector(".scoreTable")
const finalColumn = document.querySelector("[data-final-column]")
const SELECTIONS = [
    {
        name: "rock",
        emoji: "✊",
        beats: "scissors"
    },
    {
        name: "scissors",
        emoji: "✌️",
        beats: "paper"
    },
    {
        name: "paper",
        emoji: "🤚",
        beats: "rock"
    }
]
items.forEach(item => {
    item.addEventListener("click", () =>{
        const mySelection = item.getAttribute("data-item");
        const selectedObject = SELECTIONS.find(selectedObject =>
            selectedObject.name === mySelection)
        const pcSelected = pcSelection()
        // console.log("you")
        // console.log(selectedObject)
        // console.log("PC")
        // console.log(pcSelected)
        const iWin = isWinner (selectedObject,pcSelected)
        const pcWins = isWinner(pcSelected,selectedObject)
        
        addSelectionResult(pcSelected, pcWins)
        addSelectionResult(selectedObject, iWin)
        
        scoreUpdate(iWin,pcWins)
    })
})

function scoreUpdate(iWin, pcWins){
    const span = document.querySelectorAll("span")
    if(iWin){
        
        span[0].innerText = 1+parseInt(span[0].innerText)
    }
    else if(pcWins){
        span[1].innerText = 1+parseInt(span[1].innerText)
    }
}
function addSelectionResult(selection, winner){
    const div = document.createElement(`div`);
    finalColumn.after(div)
    div.classList.add("selection")
    div.innerText = selection.emoji
        if(winner){
            div.classList.add("winner")
    }
}

function pcSelection(){
    const randomNumber = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomNumber]
}

function isWinner(selection, oppenentSelection){
    return selection.beats === oppenentSelection.name
}
