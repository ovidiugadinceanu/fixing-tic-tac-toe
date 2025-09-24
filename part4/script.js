var PLAYER_WITH_X = 1,
  PLAYER_WITH_O = 2,
  TIE_BETWEEN_X_AND_O = 3,
  EMPTY_SPOT = 0,
  whose_move = PLAYER_WITH_X,
  A1 = EMPTY_SPOT,
  A2 = EMPTY_SPOT,
  A3 = EMPTY_SPOT,
  B1 = EMPTY_SPOT,
  B2 = EMPTY_SPOT,
  B3 = EMPTY_SPOT,
  C1 = EMPTY_SPOT,
  C2 = EMPTY_SPOT,
  C3 = EMPTY_SPOT,
  ok = EMPTY_SPOT,
  temp = "",
  whoWon = void 0,
  COUNT_PLAYER_WITH_X_WINS = 0,
  COUNT_PLAYER_WITH_O_WINS = 0,
  COUNT_TIES = 0;
COUNT_TIES = 0;
function Move(_) {
  isSpaceFree(_)
    ? whose_move === PLAYER_WITH_X
      ? ((document.getElementById(_).src = "x.jpg"),
        (window[_] = PLAYER_WITH_X),
        process(),
        (whose_move = PLAYER_WITH_O))
      : ((document.getElementById(_).src = "o.jpg"),
        (window[_] = PLAYER_WITH_O),
        process(),
        (whose_move = PLAYER_WITH_X))
    : alert("That square is already occupied.  Please select another square.");
}
function isSpaceFree(_) {
  return (
    console.log(_),
    ("A1" === _ && A1 === EMPTY_SPOT) ||
      ("B1" === _ && B1 === EMPTY_SPOT) ||
      ("C1" === _ && C1 === EMPTY_SPOT) ||
      ("A2" === _ && A2 === EMPTY_SPOT) ||
      ("B2" === _ && B2 === EMPTY_SPOT) ||
      ("C2" === _ && C2 === EMPTY_SPOT) ||
      ("A3" === _ && A3 === EMPTY_SPOT) ||
      ("B3" === _ && B3 === EMPTY_SPOT) ||
      ("C3" === _ && C3 === EMPTY_SPOT) ||
      void 0
  );
}
function process() {
  let _ = [];
  _.push(A1),
    _.push(A2),
    _.push(A3),
    _.push(B1),
    _.push(B2),
    _.push(B3),
    _.push(C1),
    _.push(C2),
    _.push(C3),
    getWinner()
      ? (whoWon = getWinner())
      : isGameOver(_) && (whoWon = TIE_BETWEEN_X_AND_O),
    whoWon && displayWinner(whoWon),
    whoWon === PLAYER_WITH_X &&
      ((COUNT_PLAYER_WITH_X_WINS = incrementScore(COUNT_PLAYER_WITH_X_WINS)),
      (document.getElementById("player1").value = COUNT_PLAYER_WITH_X_WINS),
      playAgain()),
    whoWon === PLAYER_WITH_O &&
      ((COUNT_PLAYER_WITH_O_WINS = incrementScore(COUNT_PLAYER_WITH_O_WINS)),
      (document.getElementById("player2").value = COUNT_PLAYER_WITH_O_WINS),
      playAgain()),
    whoWon === TIE_BETWEEN_X_AND_O &&
      ((COUNT_TIES = incrementScore(COUNT_TIES)),
      (document.getElementById("ties").value = COUNT_TIES),
      playAgain());
}
function incrementScore(_) {
  return (_ += 1);
}
function displayWinner(_) {
  _ === PLAYER_WITH_X
    ? alert("Player with 'X' has won")
    : _ === PLAYER_WITH_O
    ? alert("Player with '0' has won")
    : _ === TIE_BETWEEN_X_AND_O && alert("It's a tie !");
}
function getWinner() {
  return (A1 === PLAYER_WITH_X &&
    A2 === PLAYER_WITH_X &&
    A3 === PLAYER_WITH_X) ||
    (A1 === PLAYER_WITH_X && B1 === PLAYER_WITH_X && C1 === PLAYER_WITH_X) ||
    (A1 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && C3 === PLAYER_WITH_X) ||
    (A2 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && C2 === PLAYER_WITH_X) ||
    (B1 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && B3 === PLAYER_WITH_X) ||
    (C1 === PLAYER_WITH_X && C2 === PLAYER_WITH_X && C3 === PLAYER_WITH_X) ||
    (A3 === PLAYER_WITH_X && B3 === PLAYER_WITH_X && C3 === PLAYER_WITH_X) ||
    (C1 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && A3 === PLAYER_WITH_X)
    ? PLAYER_WITH_X
    : (A1 === PLAYER_WITH_O && A2 === PLAYER_WITH_O && A3 === PLAYER_WITH_O) ||
      (A1 === PLAYER_WITH_O && B1 === PLAYER_WITH_O && C1 === PLAYER_WITH_O) ||
      (A1 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && C3 === PLAYER_WITH_O) ||
      (A2 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && C2 === PLAYER_WITH_O) ||
      (B1 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && B3 === PLAYER_WITH_O) ||
      (C1 === PLAYER_WITH_O && C2 === PLAYER_WITH_O && C3 === PLAYER_WITH_O) ||
      (A3 === PLAYER_WITH_O && B3 === PLAYER_WITH_O && C3 === PLAYER_WITH_O) ||
      (C1 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && A3 === PLAYER_WITH_O)
    ? PLAYER_WITH_O
    : void 0;
}
function playAgain() {
  setTimeout(() => {
    whose_move = PLAYER_WITH_X;
  }, 0),
    (A1 = EMPTY_SPOT),
    (A2 = EMPTY_SPOT),
    (A3 = EMPTY_SPOT),
    (B1 = EMPTY_SPOT),
    (B2 = EMPTY_SPOT),
    (B3 = EMPTY_SPOT),
    (C1 = EMPTY_SPOT),
    (C2 = EMPTY_SPOT),
    (C3 = EMPTY_SPOT),
    (ok = EMPTY_SPOT),
    (temp = ""),
    (whoWon = void 0),
    (document.getElementById("A1").src = "blank.jpg"),
    (document.getElementById("B1").src = "blank.jpg"),
    (document.getElementById("C1").src = "blank.jpg"),
    (document.getElementById("A2").src = "blank.jpg"),
    (document.getElementById("B2").src = "blank.jpg"),
    (document.getElementById("C2").src = "blank.jpg"),
    (document.getElementById("A3").src = "blank.jpg"),
    (document.getElementById("B3").src = "blank.jpg"),
    (document.getElementById("C3").src = "blank.jpg");
}

function isGameOver(listWithCurrentValuesTried) {
  console.log(listWithCurrentValuesTried);
  // should check every item of listWithCurrentValuesTried and return true or false
  // if any item has the value EMPTY_SPOT
  let arr = listWithCurrentValuesTried;
  //   for (i = 0; i < arr.length; i++) {
  //     if (arr[i] === EMPTY_SPOT) return false;
  //   }
  //   return true;
  let value = arr.some((item) => item === EMPTY_SPOT);
  return !value;
}
