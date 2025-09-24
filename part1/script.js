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
function Move(e) {
  isSpaceFree(e)
    ? whose_move === PLAYER_WITH_X
      ? ((document.getElementById(e).src = "x.jpg"),
        (window[e] = PLAYER_WITH_X),
        process(),
        (whose_move = PLAYER_WITH_O))
      : ((document.getElementById(e).src = "o.jpg"),
        (window[e] = PLAYER_WITH_O),
        process(),
        (whose_move = PLAYER_WITH_X))
    : alert("That square is already occupied.  Please select another square.");
}
function isSpaceFree(e) {
  return (
    console.log(e),
    ("A1" === e && A1 === EMPTY_SPOT) ||
      ("B1" === e && B1 === EMPTY_SPOT) ||
      ("C1" === e && C1 === EMPTY_SPOT) ||
      ("A2" === e && A2 === EMPTY_SPOT) ||
      ("B2" === e && B2 === EMPTY_SPOT) ||
      ("C2" === e && C2 === EMPTY_SPOT) ||
      ("A3" === e && A3 === EMPTY_SPOT) ||
      ("B3" === e && B3 === EMPTY_SPOT) ||
      ("C3" === e && C3 === EMPTY_SPOT) ||
      void 0
  );
}
function process() {
  let e = [];
  e.push(A1),
    e.push(A2),
    e.push(A3),
    e.push(B1),
    e.push(B2),
    e.push(B3),
    e.push(C1),
    e.push(C2),
    e.push(C3),
    getWinner()
      ? (whoWon = getWinner())
      : isGameOver(e) && (whoWon = TIE_BETWEEN_X_AND_O),
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
function incrementScore(e) {
  return (e += 1);
}
function isGameOver(e) {
  for (let _ = 0; _ < e.length; _++) if (e[_] === EMPTY_SPOT) return !1;
  return !0;
}
function displayWinner(e) {
  e === PLAYER_WITH_X
    ? alert("Player with 'X' has won")
    : e === PLAYER_WITH_O
    ? alert("Player with '0' has won")
    : e === TIE_BETWEEN_X_AND_O && alert("It's a tie !");
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

function getWinner() {
  // PLAYER_WITH_X
  // PLAYER_WITH_O
  // A1 A2 A3 B1 B2 B3 C1 C2 C3
  // should check if the values A1..C3 have the value from above in an uninterupted
  // line any of the values above and return the variable if there is a match
  if (A1 === PLAYER_WITH_X && A2 === PLAYER_WITH_X && A3 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }
  if (B1 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && B3 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }
  if (C1 === PLAYER_WITH_X && C2 === PLAYER_WITH_X && C3 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }
  if (A1 === PLAYER_WITH_X && B1 === PLAYER_WITH_X && C1 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }
  if (A2 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && C2 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }
  if (A3 === PLAYER_WITH_X && B3 === PLAYER_WITH_X && C3 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }

  if (A1 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && C3 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }

  if (A3 === PLAYER_WITH_X && B2 === PLAYER_WITH_X && C1 === PLAYER_WITH_X) {
    return PLAYER_WITH_X;
  }

  //   PLAYER WITH O
  if (A1 === PLAYER_WITH_O && A2 === PLAYER_WITH_O && A3 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }
  if (B1 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && B3 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }
  if (C1 === PLAYER_WITH_O && C2 === PLAYER_WITH_O && C3 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }
  if (A1 === PLAYER_WITH_O && B1 === PLAYER_WITH_O && C1 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }
  if (A2 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && C2 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }
  if (A3 === PLAYER_WITH_O && B3 === PLAYER_WITH_O && C3 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }

  if (A1 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && C3 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }

  if (A3 === PLAYER_WITH_O && B2 === PLAYER_WITH_O && C1 === PLAYER_WITH_O) {
    return PLAYER_WITH_O;
  }
}
