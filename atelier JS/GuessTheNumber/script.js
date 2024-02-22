function game() {
    const x = parseInt(Math.random() * 10, 10)
    console.log(x)
    alert("welcome to the game ! ")
    let level = Number(prompt("number of attempts :"))
    let tentative = level
    while (tentative > 0) {
        let n = prompt("number: ")

        if (n == x) {
            alert("you're a natural !! good job.")
            confirm("Do you want to play again ?") ? game(level) : alert("good bye !")
            break
        } else {
            alert("wrong !")
            tentative--
        }

    }
    if (tentative == 0) {
        alert("nah , you suck ! change the difficulty if you want ")
        confirm("Do you want to play again ?") ? game(level) : alert("good bye !")
    }


}

game()