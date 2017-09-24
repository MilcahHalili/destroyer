
module.exports = function() {
  var player1Board = {
    a: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    b: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    c: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    d: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    e: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    f: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    g: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    h: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    i: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    j: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    }
  };
  var player2Board = {
    a: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    b: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    c: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    d: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    e: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    f: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    g: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    h: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    i: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    },
    j: {
      1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}
    }
  };

  var clientData = {
    gameRunning: true,
    serverMessage: "",
    lastShot: {},
    resultOfLastShot: false,
    turn: 'p1'
  };

  function handleInput(shot) {
    clientData.lastShot = shot;
    if (clientData.turn === 'p1') {
      // this is player1's shot
      // place the shot in p2's board object
      player2Board[shot.row][shot.col].shotAt = true;
      // if hit...
      if (player2Board[shot.row][shot.col].ship) {
        clientData.resultOfLastShot = true;
        // test for win
      } else {
        clientData.resultOfLastShot = false;
      }
      clientData.turn = 'p2';
    } else {
      // this is player2's shot
      player1Board[shot.row][shot.col].shotAt = true;
      // if hit...
      if (player1Board[shot.row][shot.col].ship) {
        clientData.resultOfLastShot = true;
        // test for win
      } else {
        clientData.resultOfLastShot = false;
      }
      clientData.turn = 'p1';
    }
    return clientData;
  }

  return handleInput;
}
