const WIND_LABELS = {
  east: '동',
  south: '남',
  west: '서',
  north: '북',
};

export const SCORE_QUIZ_PROBLEMS = {
  "easy": [
    {
      "id": "easy-001",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "2m",
        "2p",
        "3p",
        "4p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "west",
        "west"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "2m"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-002",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "3p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "6s",
        "6s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-003",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "5s",
        "2m",
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-004",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5m",
        "6m",
        "2p",
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "5s",
        "5s"
      ],
      "winningTile": "7m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-005",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "6p",
        "5s",
        "6s",
        "7s",
        "5m",
        "6m",
        "7m",
        "4p",
        "5p",
        "6p",
        "red",
        "red"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-006",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1s",
        "2s",
        "2m",
        "3m",
        "4m",
        "3p",
        "4p",
        "5p",
        "3m",
        "3m"
      ],
      "winningTile": "3s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-007",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "2s",
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-008",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "5p",
        "6s",
        "7s",
        "8s",
        "3m",
        "4m",
        "5m",
        "3m",
        "3m"
      ],
      "winningTile": "6p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "5p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "easy-009",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "5s",
        "3m",
        "4m",
        "5m",
        "2p",
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "north",
        "north"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-010",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5m",
        "6m",
        "1p",
        "2p",
        "3p",
        "2s",
        "3s",
        "4s",
        "7p",
        "7p"
      ],
      "winningTile": "7m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-011",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "3p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-012",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "2p",
        "3p",
        "4p",
        "7p",
        "7p"
      ],
      "winningTile": "5s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-013",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "4m",
        "1p",
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "4m",
        "5m",
        "6m",
        "east",
        "east"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-014",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "5p",
        "5s",
        "6s",
        "7s",
        "1m",
        "2m",
        "3m",
        "4s",
        "4s"
      ],
      "winningTile": "6p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-015",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "7s",
        "6m",
        "7m",
        "8m",
        "6p",
        "7p",
        "8p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-016",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "6s",
        "7s",
        "8s",
        "5s",
        "5s"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-017",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "1m",
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "white",
        "white"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [
        "3p"
      ],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-018",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "8m",
        "8m"
      ],
      "winningTile": "5s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-019",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "6m",
        "4p",
        "5p",
        "6p",
        "3s",
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-020",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "6p",
        "7p",
        "3s",
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "3m",
        "3m"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "easy-021",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1s",
        "2s",
        "2m",
        "3m",
        "4m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "south",
        "south"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-022",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "5p",
        "5p"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-023",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "5p",
        "2s",
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-024",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "6s",
        "2m",
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "7p",
        "7p"
      ],
      "winningTile": "7s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-025",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "5s",
        "6s",
        "7s",
        "4m",
        "5m",
        "6m",
        "green",
        "green"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-026",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1p",
        "2p",
        "2s",
        "3s",
        "4s",
        "3m",
        "4m",
        "5m",
        "2s",
        "2s"
      ],
      "winningTile": "3p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-027",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "2p",
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-028",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "5m",
        "6p",
        "7p",
        "8p",
        "3s",
        "4s",
        "5s",
        "5s",
        "5s"
      ],
      "winningTile": "6m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-029",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "5p",
        "3s",
        "4s",
        "5s",
        "2m",
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "west",
        "west"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "5p"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-030",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "6s",
        "1m",
        "2m",
        "3m",
        "2p",
        "3p",
        "4p",
        "6m",
        "6m"
      ],
      "winningTile": "7s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-031",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "3m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-032",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "2m",
        "3m",
        "4m",
        "3m",
        "3m"
      ],
      "winningTile": "5p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "easy-033",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "1m",
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "4s",
        "5s",
        "6s",
        "red",
        "red"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-034",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "5m",
        "5p",
        "6p",
        "7p",
        "1s",
        "2s",
        "3s",
        "3p",
        "3p"
      ],
      "winningTile": "6m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-035",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "7p",
        "6s",
        "7s",
        "8s",
        "6m",
        "7m",
        "8m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-036",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "6p",
        "7p",
        "8p",
        "7p",
        "7p"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "3s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-037",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "1s",
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "north",
        "north"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-038",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "5m",
        "6m",
        "7m",
        "7s",
        "7s"
      ],
      "winningTile": "5p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-039",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "6s",
        "4m",
        "5m",
        "6m",
        "3p",
        "4p",
        "5p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-040",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "6m",
        "7m",
        "3p",
        "4p",
        "5p",
        "5s",
        "6s",
        "7s",
        "5s",
        "5s"
      ],
      "winningTile": "8m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-041",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1p",
        "2p",
        "2s",
        "3s",
        "4s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "east",
        "east"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "2p"
      ],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-042",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "4m",
        "4m"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-043",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "5m",
        "2p",
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-044",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5p",
        "6p",
        "2s",
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "3m",
        "3m"
      ],
      "winningTile": "7p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "easy-045",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "6s",
        "5m",
        "6m",
        "7m",
        "5p",
        "6p",
        "7p",
        "4s",
        "5s",
        "6s",
        "white",
        "white"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-046",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1m",
        "2m",
        "2p",
        "3p",
        "4p",
        "3s",
        "4s",
        "5s",
        "8p",
        "8p"
      ],
      "winningTile": "3m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-047",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "2m",
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-048",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "5s",
        "6m",
        "7m",
        "8m",
        "3p",
        "4p",
        "5p",
        "7p",
        "7p"
      ],
      "winningTile": "6s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-049",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "5m",
        "3p",
        "4p",
        "5p",
        "2s",
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "south",
        "south"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-050",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5p",
        "6p",
        "1s",
        "2s",
        "3s",
        "2m",
        "3m",
        "4m",
        "5s",
        "5s"
      ],
      "winningTile": "7p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-051",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2s",
        "3s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-052",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "2s",
        "3s",
        "4s",
        "5s",
        "5s"
      ],
      "winningTile": "5m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-053",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3p",
        "4p",
        "1s",
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "4p",
        "5p",
        "6p",
        "green",
        "green"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-054",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "1p",
        "2p",
        "3p",
        "2m",
        "2m"
      ],
      "winningTile": "6s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-055",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "7m",
        "6p",
        "7p",
        "8p",
        "6s",
        "7s",
        "8s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-056",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "6m",
        "7m",
        "8m",
        "3m",
        "3m"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "3p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "easy-057",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "1p",
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "west",
        "west"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "3s"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-058",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "5s",
        "6s",
        "7s",
        "6p",
        "6p"
      ],
      "winningTile": "5m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-059",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "6p",
        "4s",
        "5s",
        "6s",
        "3m",
        "4m",
        "5m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-060",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "7s",
        "3m",
        "4m",
        "5m",
        "5p",
        "6p",
        "7p",
        "7p",
        "7p"
      ],
      "winningTile": "8s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-061",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "2m",
        "2p",
        "3p",
        "4p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "red",
        "red"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "2m"
      ],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-062",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "3p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "3s",
        "3s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-063",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5m",
        "6m",
        "2p",
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "5s",
        "5s"
      ],
      "winningTile": "7m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-064",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "6p",
        "5s",
        "6s",
        "7s",
        "5m",
        "6m",
        "7m",
        "4p",
        "5p",
        "6p",
        "north",
        "north"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-065",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1s",
        "2s",
        "2m",
        "3m",
        "4m",
        "3p",
        "4p",
        "5p",
        "7m",
        "7m"
      ],
      "winningTile": "3s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "easy-066",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "2s",
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-067",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "5p",
        "6s",
        "7s",
        "8s",
        "3m",
        "4m",
        "5m",
        "3m",
        "3m"
      ],
      "winningTile": "6p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "5p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-068",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "5s",
        "3m",
        "4m",
        "5m",
        "2p",
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "east",
        "east"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-069",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5m",
        "6m",
        "1p",
        "2p",
        "3p",
        "2s",
        "3s",
        "4s",
        "4p",
        "4p"
      ],
      "winningTile": "7m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          300,
          500
        ]
      }
    },
    {
      "id": "easy-070",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "3p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-071",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "2p",
        "3p",
        "4p",
        "7p",
        "7p"
      ],
      "winningTile": "5s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-072",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "4m",
        "1p",
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "4m",
        "5m",
        "6m",
        "white",
        "white"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-073",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "5p",
        "5s",
        "6s",
        "7s",
        "1m",
        "2m",
        "3m",
        "8s",
        "8s"
      ],
      "winningTile": "6p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "easy-074",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "7s",
        "6m",
        "7m",
        "8m",
        "6p",
        "7p",
        "8p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-075",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "6s",
        "7s",
        "8s",
        "5s",
        "5s"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-076",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "1m",
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "south",
        "south"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [
        "3p"
      ],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-077",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "5m",
        "5m"
      ],
      "winningTile": "5s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "easy-078",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "6m",
        "4p",
        "5p",
        "6p",
        "3s",
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-079",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "6p",
        "7p",
        "3s",
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "3m",
        "3m"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-080",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1s",
        "2s",
        "2m",
        "3m",
        "4m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "green",
        "green"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-081",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "2p",
        "2p"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          300,
          500
        ]
      }
    },
    {
      "id": "easy-082",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "5p",
        "2s",
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-083",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "6s",
        "2m",
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "7p",
        "7p"
      ],
      "winningTile": "7s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-084",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "5s",
        "6s",
        "7s",
        "4m",
        "5m",
        "6m",
        "west",
        "west"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-085",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1p",
        "2p",
        "2s",
        "3s",
        "4s",
        "3m",
        "4m",
        "5m",
        "6s",
        "6s"
      ],
      "winningTile": "3p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "easy-086",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "2p",
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-087",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "5m",
        "6p",
        "7p",
        "8p",
        "3s",
        "4s",
        "5s",
        "5s",
        "5s"
      ],
      "winningTile": "6m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-088",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "5p",
        "3s",
        "4s",
        "5s",
        "2m",
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "red",
        "red"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "5p"
      ],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-089",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "6s",
        "1m",
        "2m",
        "3m",
        "2p",
        "3p",
        "4p",
        "3m",
        "3m"
      ],
      "winningTile": "7s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "easy-090",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "3m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-091",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "2m",
        "3m",
        "4m",
        "3m",
        "3m"
      ],
      "winningTile": "5p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-092",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "1m",
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "4s",
        "5s",
        "6s",
        "north",
        "north"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-093",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "5m",
        "5p",
        "6p",
        "7p",
        "1s",
        "2s",
        "3s",
        "7p",
        "7p"
      ],
      "winningTile": "6m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          300,
          500
        ]
      }
    },
    {
      "id": "easy-094",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "7p",
        "6s",
        "7s",
        "8s",
        "6m",
        "7m",
        "8m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-095",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "6p",
        "7p",
        "8p",
        "7p",
        "7p"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "3s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-096",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "1s",
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "east",
        "east"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-097",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "5m",
        "6m",
        "7m",
        "4s",
        "4s"
      ],
      "winningTile": "5p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "easy-098",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "6s",
        "4m",
        "5m",
        "6m",
        "3p",
        "4p",
        "5p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-099",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "6m",
        "7m",
        "3p",
        "4p",
        "5p",
        "5s",
        "6s",
        "7s",
        "5s",
        "5s"
      ],
      "winningTile": "8m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-100",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1p",
        "2p",
        "2s",
        "3s",
        "4s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "white",
        "white"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "2p"
      ],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    }
  ],
  "medium": [
    {
      "id": "medium-001",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "4p",
        "4p",
        "4p",
        "8p"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          11600
        ]
      }
    },
    {
      "id": "medium-002",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "1p",
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "west",
        "west"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "3s"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-003",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "5s",
        "6s",
        "7s",
        "6p",
        "6p"
      ],
      "winningTile": "5m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          700
        ]
      }
    },
    {
      "id": "medium-004",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "6p",
        "4s",
        "5s",
        "6s",
        "3m",
        "4m",
        "5m",
        "5p",
        "6p",
        "7p",
        "4m",
        "4m"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4800
        ]
      }
    },
    {
      "id": "medium-005",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "7s",
        "3m",
        "4m",
        "5m",
        "5p",
        "6p",
        "7p",
        "4p",
        "4p"
      ],
      "winningTile": "8s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2900
        ]
      }
    },
    {
      "id": "medium-006",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7m",
        "7m",
        "9p",
        "9p",
        "2s",
        "2s",
        "4m",
        "4m",
        "white",
        "white",
        "red",
        "red",
        "3m"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2100,
          4100
        ]
      }
    },
    {
      "id": "medium-007",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "4p",
        "8s",
        "8s",
        "8s",
        "3m",
        "3m",
        "3m",
        "5s",
        "5s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "medium-008",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "4s",
        "5s",
        "6s",
        "7s",
        "4s",
        "4s",
        "4s",
        "8s"
      ],
      "winningTile": "8s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "medium-009",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "5m",
        "3p",
        "4p",
        "5p",
        "2s",
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "west",
        "west"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "medium-010",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5p",
        "6p",
        "1s",
        "2s",
        "3s",
        "2m",
        "3m",
        "4m",
        "6s",
        "6s"
      ],
      "winningTile": "7p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "medium-011",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2s",
        "3s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          6400
        ]
      }
    },
    {
      "id": "medium-012",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "2s",
        "3s",
        "4s",
        "5s",
        "5s"
      ],
      "winningTile": "5m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          800,
          1300
        ]
      }
    },
    {
      "id": "medium-013",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "5p",
        "7s",
        "7s",
        "9m",
        "9m",
        "2p",
        "2p",
        "white",
        "white",
        "red",
        "red",
        "3p"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12000
        ]
      }
    },
    {
      "id": "medium-014",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "4s",
        "8m",
        "8m",
        "8m",
        "3p",
        "3p",
        "3p",
        "5m",
        "5m"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5500
        ]
      }
    },
    {
      "id": "medium-015",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1m",
        "2m",
        "3m",
        "4m",
        "5m",
        "6m",
        "4m",
        "4m",
        "4m",
        "8m"
      ],
      "winningTile": "8m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 40,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-016",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1p",
        "2p",
        "2s",
        "3s",
        "4s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "west",
        "west"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "2p"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4800
        ]
      }
    },
    {
      "id": "medium-017",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "6m",
        "6m"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1500
        ]
      }
    },
    {
      "id": "medium-018",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "5m",
        "2p",
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "5m",
        "6m",
        "7m",
        "6s",
        "6s"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "medium-019",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5p",
        "6p",
        "2s",
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "6m",
        "6m"
      ],
      "winningTile": "7p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          3500
        ]
      }
    },
    {
      "id": "medium-020",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "5m",
        "7p",
        "7p",
        "9s",
        "9s",
        "white",
        "white",
        "red",
        "red",
        "green",
        "green",
        "3s"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8900
        ]
      }
    },
    {
      "id": "medium-021",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "4m",
        "8p",
        "8p",
        "8p",
        "3s",
        "3s",
        "3s",
        "5p",
        "5p"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "medium-022",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "7p",
        "4p",
        "4p",
        "4p",
        "8p"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "medium-023",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "1m",
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "4s",
        "5s",
        "6s",
        "west",
        "west"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          6400
        ]
      }
    },
    {
      "id": "medium-024",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "5m",
        "5p",
        "6p",
        "7p",
        "1s",
        "2s",
        "3s",
        "6p",
        "6p"
      ],
      "winningTile": "6m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          800
        ]
      }
    },
    {
      "id": "medium-025",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "7p",
        "6s",
        "7s",
        "8s",
        "6m",
        "7m",
        "8m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "medium-026",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "6p",
        "7p",
        "8p",
        "7p",
        "7p"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "3s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "medium-027",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "1m",
        "3p",
        "3p",
        "5s",
        "5s",
        "7m",
        "7m",
        "white",
        "white",
        "red",
        "red",
        "3m"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "9m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-028",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "4p",
        "8s",
        "8s",
        "8s",
        "3m",
        "3m",
        "3m",
        "5s",
        "5s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          6100
        ]
      }
    },
    {
      "id": "medium-029",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1s",
        "2s",
        "3s",
        "4s",
        "5s",
        "6s",
        "4s",
        "4s",
        "4s",
        "8s"
      ],
      "winningTile": "8s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          11600
        ]
      }
    },
    {
      "id": "medium-030",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "5s",
        "6s",
        "7s",
        "4m",
        "5m",
        "6m",
        "west",
        "west"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "medium-031",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1p",
        "2p",
        "2s",
        "3s",
        "4s",
        "3m",
        "4m",
        "5m",
        "6s",
        "6s"
      ],
      "winningTile": "3p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2100
        ]
      }
    },
    {
      "id": "medium-032",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "2p",
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "2p",
        "2p"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4800
        ]
      }
    },
    {
      "id": "medium-033",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "5m",
        "6p",
        "7p",
        "8p",
        "3s",
        "4s",
        "5s",
        "2s",
        "2s"
      ],
      "winningTile": "6m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "medium-034",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8p",
        "8p",
        "1s",
        "1s",
        "3m",
        "3m",
        "5p",
        "5p",
        "white",
        "white",
        "red",
        "red",
        "3p"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "medium-035",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "4s",
        "8m",
        "8m",
        "8m",
        "3p",
        "3p",
        "3p",
        "5m",
        "5m"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "medium-036",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3m",
        "4m",
        "5m",
        "6m",
        "7m",
        "4m",
        "4m",
        "4m",
        "8m"
      ],
      "winningTile": "8m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 40,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2300,
          4300
        ]
      }
    },
    {
      "id": "medium-037",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "3p",
        "4s",
        "5s",
        "6s",
        "1m",
        "2m",
        "3m",
        "4p",
        "5p",
        "6p",
        "west",
        "west"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [
        "3p"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "medium-038",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "6m",
        "6m"
      ],
      "winningTile": "5s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "medium-039",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "6m",
        "4p",
        "5p",
        "6p",
        "3s",
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2800
        ]
      }
    },
    {
      "id": "medium-040",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "6p",
        "7p",
        "3s",
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "3m",
        "3m"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2900
        ]
      }
    },
    {
      "id": "medium-041",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "6s",
        "8m",
        "8m",
        "1p",
        "1p",
        "white",
        "white",
        "red",
        "red",
        "green",
        "green",
        "3s"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12000
        ]
      }
    },
    {
      "id": "medium-042",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "4m",
        "8p",
        "8p",
        "8p",
        "3s",
        "3s",
        "3s",
        "5p",
        "5p"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "medium-043",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "4p",
        "4p",
        "4p",
        "8p"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12200
        ]
      }
    },
    {
      "id": "medium-044",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "5s",
        "3m",
        "4m",
        "5m",
        "2p",
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "west",
        "west"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4800
        ]
      }
    },
    {
      "id": "medium-045",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5m",
        "6m",
        "1p",
        "2p",
        "3p",
        "2s",
        "3s",
        "4s",
        "6p",
        "6p"
      ],
      "winningTile": "7m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          500
        ]
      }
    },
    {
      "id": "medium-046",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "3p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "5p",
        "6p",
        "7p",
        "4m",
        "4m"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-047",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "2p",
        "3p",
        "4p",
        "4p",
        "4p"
      ],
      "winningTile": "5s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          3500
        ]
      }
    },
    {
      "id": "medium-048",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "4m",
        "6p",
        "6p",
        "8s",
        "8s",
        "1m",
        "1m",
        "white",
        "white",
        "red",
        "red",
        "3m"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2300,
          4300
        ]
      }
    },
    {
      "id": "medium-049",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "4p",
        "8s",
        "8s",
        "8s",
        "3m",
        "3m",
        "3m",
        "5s",
        "5s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          7700
        ]
      }
    },
    {
      "id": "medium-050",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "4s",
        "5s",
        "6s",
        "7s",
        "4s",
        "4s",
        "4s",
        "8s"
      ],
      "winningTile": "8s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "medium-051",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "2m",
        "2p",
        "3p",
        "4p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "west",
        "west"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "2m"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2800
        ]
      }
    },
    {
      "id": "medium-052",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "3p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "6s",
        "6s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1900
        ]
      }
    },
    {
      "id": "medium-053",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "5s",
        "2m",
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "medium-054",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5m",
        "6m",
        "2p",
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "5s",
        "5s"
      ],
      "winningTile": "7m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "medium-055",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "2p",
        "4s",
        "4s",
        "6m",
        "6m",
        "8p",
        "8p",
        "white",
        "white",
        "red",
        "red",
        "3p"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "1p"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12600
        ]
      }
    },
    {
      "id": "medium-056",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "4s",
        "8m",
        "8m",
        "8m",
        "3p",
        "3p",
        "3p",
        "5m",
        "5m"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          6100
        ]
      }
    },
    {
      "id": "medium-057",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1m",
        "2m",
        "3m",
        "4m",
        "5m",
        "6m",
        "4m",
        "4m",
        "4m",
        "8m"
      ],
      "winningTile": "8m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 40,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4000
        ]
      }
    },
    {
      "id": "medium-058",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3p",
        "4p",
        "1s",
        "2s",
        "3s",
        "4m",
        "5m",
        "6m",
        "4p",
        "5p",
        "6p",
        "west",
        "west"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-059",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "5s",
        "5m",
        "6m",
        "7m",
        "1p",
        "2p",
        "3p",
        "6m",
        "6m"
      ],
      "winningTile": "6s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2100
        ]
      }
    },
    {
      "id": "medium-060",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "7m",
        "6p",
        "7p",
        "8p",
        "6s",
        "7s",
        "8s",
        "5m",
        "6m",
        "7m",
        "6s",
        "6s"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1600,
          2900
        ]
      }
    }
  ],
  "hard": [
    {
      "id": "hard-001",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1s",
        "2s",
        "2m",
        "3m",
        "4m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "east",
        "east"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "hard-002",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "4p",
        "4p"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "hard-003",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "5p",
        "2s",
        "3s",
        "4s",
        "5m",
        "6m",
        "7m",
        "5p",
        "6p",
        "7p",
        "7m",
        "7m"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          6400
        ]
      }
    },
    {
      "id": "hard-004",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "6s",
        "2m",
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "7p",
        "7p"
      ],
      "winningTile": "7s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          800,
          1300
        ]
      }
    },
    {
      "id": "hard-005",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7m",
        "7m",
        "9p",
        "9p",
        "2s",
        "2s",
        "4m",
        "4m",
        "west",
        "west",
        "white",
        "white",
        "8m"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          13200
        ]
      }
    },
    {
      "id": "hard-006",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "2p",
        "6s",
        "6s",
        "6s",
        "8m",
        "8m",
        "8m",
        "3s",
        "3s"
      ],
      "winningTile": "2p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          6700
        ]
      }
    },
    {
      "id": "hard-007",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1s",
        "2s",
        "3s",
        "4s",
        "5s",
        "6s",
        "2s",
        "2s",
        "2s",
        "6s"
      ],
      "winningTile": "6s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 40,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4000
        ]
      }
    },
    {
      "id": "hard-008",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "7p",
        "2s",
        "3s",
        "4s",
        "4p",
        "5p",
        "6p",
        "6s",
        "6s"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "ankan",
          "tileId": "6m",
          "tiles": [
            "6m",
            "6m",
            "6m",
            "6m"
          ],
          "isOpen": false,
          "isKan": true
        }
      ],
      "doraIndicators": [
        "7p",
        "5m"
      ],
      "uraDoraIndicators": [
        "red",
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 50,
      "yaku": [
        "리치",
        "탕야오",
        "도라 1",
        "깡도라 1",
        "우라도라 1"
      ],
      "fuDetails": [
        "중장패 암깡 16부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "hard-009",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "2p",
        "2p",
        "2p",
        "3p",
        "4p",
        "4p",
        "5p",
        "6p",
        "6p",
        "7p",
        "8p",
        "8p"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [
        "1p"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 10,
      "fu": 30,
      "yaku": [
        "리치",
        "청일색",
        "도라 3"
      ],
      "fuDetails": [
        "멘젠론 10부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          36600
        ]
      }
    },
    {
      "id": "hard-010",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "7s",
        "6m",
        "7m",
        "8m",
        "6p",
        "7p",
        "8p",
        "5s",
        "6s",
        "7s",
        "2p",
        "2p"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후",
        "도라 5"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          4300,
          8300
        ]
      }
    },
    {
      "id": "hard-011",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "2m",
        "2p",
        "3p",
        "4p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "north",
        "north"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "2m"
      ],
      "uraDoraIndicators": [
        "green"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          7000
        ]
      }
    },
    {
      "id": "hard-012",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "3p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "7s",
        "7s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2500
        ]
      }
    },
    {
      "id": "hard-013",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "5s",
        "2m",
        "3m",
        "4m",
        "5p",
        "6p",
        "7p",
        "5s",
        "6s",
        "7s",
        "5p",
        "5p"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "hard-014",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5m",
        "6m",
        "2p",
        "3p",
        "4p",
        "4s",
        "5s",
        "6s",
        "5s",
        "5s"
      ],
      "winningTile": "7m",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2p",
          "tiles": [
            "2p",
            "3p",
            "4p"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "hard-015",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8p",
        "8p",
        "1s",
        "1s",
        "3m",
        "3m",
        "5p",
        "5p",
        "green",
        "green",
        "east",
        "east",
        "4p"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12600
        ]
      }
    },
    {
      "id": "hard-016",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "5s",
        "2m",
        "2m",
        "2m",
        "4p",
        "4p",
        "4p",
        "6m",
        "6m"
      ],
      "winningTile": "5s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1600,
          2900
        ]
      }
    },
    {
      "id": "hard-017",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 4,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1m",
        "2m",
        "3m",
        "4m",
        "5m",
        "6m",
        "5m",
        "5m",
        "5m",
        "9m"
      ],
      "winningTile": "9m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "8m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12800
        ]
      }
    },
    {
      "id": "hard-018",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "7s",
        "2m",
        "3m",
        "4m",
        "4s",
        "5s",
        "6s",
        "4m",
        "4m"
      ],
      "winningTile": "8s",
      "fixedMelds": [
        {
          "type": "ankan",
          "tileId": "4p",
          "tiles": [
            "4p",
            "4p",
            "4p",
            "4p"
          ],
          "isOpen": false,
          "isKan": true
        }
      ],
      "doraIndicators": [
        "7s",
        "3p"
      ],
      "uraDoraIndicators": [
        "west",
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 50,
      "yaku": [
        "리치",
        "탕야오",
        "도라 1",
        "깡도라 1",
        "우라도라 1"
      ],
      "fuDetails": [
        "중장패 암깡 16부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          9500
        ]
      }
    },
    {
      "id": "hard-019",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "3s",
        "3s",
        "2s",
        "3s",
        "4s",
        "4s",
        "5s",
        "6s",
        "6s",
        "7s",
        "8s",
        "7s"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 11,
      "fu": 30,
      "yaku": [
        "리치",
        "청일색",
        "도라 3"
      ],
      "fuDetails": [
        "멘젠론 10부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12000
        ]
      }
    },
    {
      "id": "hard-020",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "7m",
        "6p",
        "7p",
        "8p",
        "6s",
        "7s",
        "8s",
        "5m",
        "6m",
        "7m",
        "6s",
        "6s"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 8,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후",
        "도라 5"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          16300
        ]
      }
    },
    {
      "id": "hard-021",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1p",
        "2p",
        "2s",
        "3s",
        "4s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "red",
        "red"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "2p"
      ],
      "uraDoraIndicators": [
        "south"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          6400
        ]
      }
    },
    {
      "id": "hard-022",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3s",
        "3m",
        "4m",
        "5m",
        "4p",
        "5p",
        "6p",
        "3m",
        "3m"
      ],
      "winningTile": "4s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          800
        ]
      }
    },
    {
      "id": "hard-023",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "5m",
        "2p",
        "3p",
        "4p",
        "5s",
        "6s",
        "7s",
        "5m",
        "6m",
        "7m",
        "3s",
        "3s"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          7000
        ]
      }
    },
    {
      "id": "hard-024",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5p",
        "6p",
        "2s",
        "3s",
        "4s",
        "4m",
        "5m",
        "6m",
        "3m",
        "3m"
      ],
      "winningTile": "7p",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2s",
          "tiles": [
            "3s",
            "4s",
            "5s"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          3500
        ]
      }
    },
    {
      "id": "hard-025",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "9s",
        "9s",
        "2m",
        "2m",
        "4p",
        "4p",
        "6s",
        "6s",
        "south",
        "south",
        "north",
        "north",
        "7s"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "8s"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4000
        ]
      }
    },
    {
      "id": "hard-026",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "8m",
        "8m",
        "5p",
        "5p",
        "5p",
        "7s",
        "7s",
        "7s",
        "2p",
        "2p"
      ],
      "winningTile": "8m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "single",
        "payments": [
          5500
        ]
      }
    },
    {
      "id": "hard-027",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "8p",
        "8p",
        "8p",
        "5p"
      ],
      "winningTile": "5p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "red",
          "tiles": [
            "red",
            "red",
            "red"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          12200
        ]
      }
    },
    {
      "id": "hard-028",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "7m",
        "2p",
        "3p",
        "4p",
        "4m",
        "5m",
        "6m",
        "2p",
        "2p"
      ],
      "winningTile": "8m",
      "fixedMelds": [
        {
          "type": "ankan",
          "tileId": "2s",
          "tiles": [
            "2s",
            "2s",
            "2s",
            "2s"
          ],
          "isOpen": false,
          "isKan": true
        }
      ],
      "doraIndicators": [
        "7m",
        "1s"
      ],
      "uraDoraIndicators": [
        "green",
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 40,
      "yaku": [
        "리치",
        "탕야오",
        "도라 1",
        "깡도라 1",
        "우라도라 1"
      ],
      "fuDetails": [
        "중장패 암깡 16부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2300,
          4300
        ]
      }
    },
    {
      "id": "hard-029",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "1m",
        "1m",
        "2m",
        "3m",
        "4m",
        "4m",
        "5m",
        "6m",
        "6m",
        "7m",
        "8m",
        "9m"
      ],
      "winningTile": "9m",
      "fixedMelds": [],
      "doraIndicators": [
        "9m"
      ],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 10,
      "fu": 30,
      "yaku": [
        "리치",
        "청일색",
        "도라 3"
      ],
      "fuDetails": [
        "멘젠론 10부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          37200
        ]
      }
    },
    {
      "id": "hard-030",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "7p",
        "6s",
        "7s",
        "8s",
        "6m",
        "7m",
        "8m",
        "5p",
        "6p",
        "7p",
        "4m",
        "4m"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [
        "north"
      ],
      "kanDoraIndicators": [],
      "han": 8,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후",
        "도라 5"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          17500
        ]
      }
    },
    {
      "id": "hard-031",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1s",
        "2s",
        "2m",
        "3m",
        "4m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "west",
        "west"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [
        "white"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "hard-032",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3m",
        "3p",
        "4p",
        "5p",
        "4s",
        "5s",
        "6s",
        "6p",
        "6p"
      ],
      "winningTile": "4m",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "역패"
      ],
      "fuDetails": [
        "역패 퐁"
      ],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "hard-033",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "6s",
        "2m",
        "3m",
        "4m",
        "4p",
        "5p",
        "6p",
        "7p",
        "7p"
      ],
      "winningTile": "7s",
      "fixedMelds": [
        {
          "type": "chi",
          "tileId": "2m",
          "tiles": [
            "4m",
            "5m",
            "6m"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [
        "부로 30부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "hard-034",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "1m",
        "3p",
        "3p",
        "5s",
        "5s",
        "7m",
        "7m",
        "white",
        "white",
        "red",
        "red",
        "3m"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "9m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "리치",
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [
        "치또이츠 고정부 25부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8900
        ]
      }
    },
    {
      "id": "hard-035",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 4,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "4p",
        "8s",
        "8s",
        "8s",
        "3m",
        "3m",
        "3m",
        "5s",
        "5s"
      ],
      "winningTile": "4p",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "green",
          "tiles": [
            "green",
            "green",
            "green"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "또이또이",
        "역패"
      ],
      "fuDetails": [
        "커쯔 부수"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1700,
          3000
        ]
      }
    },
    {
      "id": "hard-036",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": false,
      "riichiStatus": "none",
      "concealedTiles": [
        "1s",
        "2s",
        "3s",
        "4s",
        "5s",
        "6s",
        "4s",
        "4s",
        "4s",
        "8s"
      ],
      "winningTile": "8s",
      "fixedMelds": [
        {
          "type": "pon",
          "tileId": "white",
          "tiles": [
            "white",
            "white",
            "white"
          ],
          "isOpen": true,
          "isKan": false
        }
      ],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "혼일색",
        "역패",
        "도라 1"
      ],
      "fuDetails": [
        "역패 퐁",
        "쯔모 40부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          9200
        ]
      }
    },
    {
      "id": "hard-037",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "7p",
        "2s",
        "3s",
        "4s",
        "4p",
        "5p",
        "6p",
        "6s",
        "6s"
      ],
      "winningTile": "8p",
      "fixedMelds": [
        {
          "type": "ankan",
          "tileId": "6m",
          "tiles": [
            "6m",
            "6m",
            "6m",
            "6m"
          ],
          "isOpen": false,
          "isKan": true
        }
      ],
      "doraIndicators": [
        "7p",
        "5m"
      ],
      "uraDoraIndicators": [
        "south",
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 50,
      "yaku": [
        "리치",
        "탕야오",
        "도라 1",
        "깡도라 1",
        "우라도라 1"
      ],
      "fuDetails": [
        "중장패 암깡 16부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "hard-038",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "2p",
        "2p",
        "2p",
        "3p",
        "4p",
        "4p",
        "5p",
        "6p",
        "6p",
        "7p",
        "8p",
        "8p"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [
        "1p"
      ],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 11,
      "fu": 30,
      "yaku": [
        "리치",
        "청일색",
        "도라 3"
      ],
      "fuDetails": [
        "멘젠론 10부"
      ],
      "answer": {
        "type": "childTsumo",
        "payments": [
          6100,
          12100
        ]
      }
    },
    {
      "id": "hard-039",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "7s",
        "6m",
        "7m",
        "8m",
        "6p",
        "7p",
        "8p",
        "5s",
        "6s",
        "7s",
        "2p",
        "2p"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 8,
      "fu": 30,
      "yaku": [
        "리치",
        "탕야오",
        "핑후",
        "도라 5"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          16600
        ]
      }
    },
    {
      "id": "hard-040",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "1m",
        "2m",
        "2p",
        "3p",
        "4p",
        "3s",
        "4s",
        "5s",
        "4m",
        "5m",
        "6m",
        "green",
        "green"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "2m"
      ],
      "uraDoraIndicators": [
        "east"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [
        "멘젠론 10부",
        "핑후쯔모 20부"
      ],
      "answer": {
        "type": "single",
        "payments": [
          4800
        ]
      }
    }
  ]
};

export function formatWind(wind) {
  return WIND_LABELS[wind] || wind;
}
