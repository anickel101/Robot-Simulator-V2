document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // 1. event listener for a key press
  // 2. retrieve the input (ArrowRight, ArrowLeft, ArrowDown, ArrowUp)
  // 3. translate input to "right" "left" "down" "up"
  // 4. call move(direction)
  // 5. create new 'li' and append to whatever div ul container on the right
      // a. ul id="moves-container"

      document.addEventListener("keydown", e => {
        if (e.code.includes("Arrow")) {
          newMoveChild(parseCode(e.code));
        } else if (e.code == "Backspace") {
          removeLastChild();
        }
      })

      function removeLastChild() {
        let moveList = document.getElementById("moves-container");
        let lastMove = moveList.lastChild;
        lastMove.remove();
      }

      function parseCode(input) {
        console.log(input)
        return input.slice(5).toLowerCase();
      }

      function newMoveChild(code){
        let moveList = document.getElementById("moves-container");
        let move = document.createElement("li");
        move.textContent = code;
        moveList.appendChild(move);
      }

      let moveButton = document.querySelector("#move-button");

      moveButton.addEventListener("click", e => {
        let moveList = document.getElementById("moves-container");
        makeMoves(moveList);
      })

      // let timeStepId;

      function makeMoves(movelist){
        console.log(movelist.children.length);
        const listLength = movelist.children.length
        for (let i = 0; i < listLength; i++) {
          moveLastChild(movelist);
          console.log(movelist.children.length);
        }
      }

      function moveLastChild(movelist){
        if (movelist.children.length > 0) {
          let lastMove = movelist.lastChild;
          move(lastMove.textContent);
          lastMove.remove();
        }
      }
})