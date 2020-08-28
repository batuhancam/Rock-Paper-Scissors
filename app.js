const items = document.querySelectorAll(".item")
const scoreTable = document.querySelector(".scoreTable")
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
        const div = document.createElement("div")
        if(iWin){
            div.innerText = `${selectedObject.name} beats ${pcSelected.name}! You Win!`
            scoreTable.after(div)
        }
        else if(pcWins){
            div.innerText = `${pcSelected.name} beats ${selectedObject.name}! PC Wins!`
            scoreTable.after(div) }
        else{
            div.innerText = `You made the same selection! DRAW!`
            scoreTable.after(div) }

    })
})

function pcSelection(){
    const randomNumber = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomNumber]
}

function isWinner(selection, oppenentSelection){
    return selection.beats === oppenentSelection.name
}