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
        if (e.code != "ShiftLeft" && e.code != "ShiftRight") {
          let code = parseCode(e.code);
          move(code);
        }
      })

      function parseCode(input) {
        console.log(input)
        return input.slice(5).toLowerCase();
      }

})
