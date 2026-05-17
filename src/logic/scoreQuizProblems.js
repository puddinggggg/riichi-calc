const WIND_LABELS = {
  "east": "동",
  "south": "남",
  "west": "서",
  "north": "북"
};

export const SCORE_QUIZ_PROBLEMS = {
  "easy": [
    {
      "id": "easy-001",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "red",
        "2p",
        "3p",
        "6s",
        "4s",
        "1p",
        "6s",
        "red",
        "8m",
        "5s",
        "6m",
        "6s",
        "7m"
      ],
      "winningTile": "red",
      "fixedMelds": [],
      "doraIndicators": [
        "9p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1000,
          2000
        ]
      }
    },
    {
      "id": "easy-002",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7p",
        "6p",
        "4s",
        "3p",
        "5m",
        "5s",
        "4s",
        "3s",
        "2p",
        "4m",
        "6m",
        "8p",
        "4s"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "4s"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
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
      "riichiStatus": "none",
      "concealedTiles": [
        "6p",
        "5m",
        "7p",
        "7m",
        "1s",
        "7s",
        "4p",
        "6m",
        "3s",
        "2s",
        "7p",
        "8s",
        "5p"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "1s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2900
        ]
      }
    },
    {
      "id": "easy-004",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "2m",
        "4p",
        "3m",
        "4p",
        "6s",
        "1m",
        "6s",
        "white",
        "2m",
        "white",
        "2m",
        "6s"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "5s"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 42,
      "yaku": [
        "리치",
        "우라도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "easy-005",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "7p",
        "6p",
        "2p",
        "9s",
        "white",
        "4m",
        "3m",
        "5p",
        "7s",
        "8s",
        "2p",
        "white"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 34,
      "yaku": [
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3900
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
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "6p",
        "4s",
        "6p",
        "3s",
        "3m",
        "2p",
        "5s",
        "6s",
        "4m",
        "1p",
        "5s",
        "7s"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "1p"
      ],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 32,
      "yaku": [
        "리치",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2600
        ]
      }
    },
    {
      "id": "easy-007",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "1p",
        "green",
        "4s",
        "5s",
        "5p",
        "3p",
        "green",
        "5m",
        "3s",
        "2p",
        "7m",
        "green",
        "6m"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 40,
      "yaku": [
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-008",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "8s",
        "4s",
        "4p",
        "2m",
        "3m",
        "6p",
        "4m",
        "5p",
        "6s",
        "2s",
        "7s",
        "5m"
      ],
      "winningTile": "2m",
      "fixedMelds": [],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 32,
      "yaku": [
        "탕야오",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2900
        ]
      }
    },
    {
      "id": "easy-009",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "4p",
        "5m",
        "7s",
        "3p",
        "6p",
        "6s",
        "2m",
        "4m",
        "5p",
        "5s",
        "3p",
        "3m"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          7700
        ]
      }
    },
    {
      "id": "easy-010",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "9p",
        "6m",
        "8p",
        "north",
        "north",
        "7s",
        "6p",
        "6s",
        "6p",
        "5s",
        "8m",
        "7p"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "멘젠쯔모"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          300,
          500
        ]
      }
    },
    {
      "id": "easy-011",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7s",
        "red",
        "1s",
        "2s",
        "7s",
        "7m",
        "9p",
        "7s",
        "8m",
        "red",
        "3s",
        "8p",
        "7p"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 36,
      "yaku": [
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-012",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "red",
        "8p",
        "red",
        "6m",
        "4s",
        "7p",
        "5p",
        "9p",
        "3s",
        "red",
        "5p",
        "5m",
        "2s"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 38,
      "yaku": [
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1600
        ]
      }
    },
    {
      "id": "easy-013",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "2m",
        "6m",
        "4s",
        "3s",
        "2s",
        "2m",
        "6p",
        "4m",
        "4s",
        "5m",
        "3s",
        "5s"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          7700
        ]
      }
    },
    {
      "id": "easy-014",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "4s",
        "south",
        "south",
        "7m",
        "6m",
        "6p",
        "5s",
        "7p",
        "5m",
        "5p",
        "6s",
        "5m"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1100,
          2100
        ]
      }
    },
    {
      "id": "easy-015",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "6p",
        "7m",
        "green",
        "6m",
        "7p",
        "8p",
        "8s",
        "6p",
        "6p",
        "7s",
        "5m",
        "6p"
      ],
      "winningTile": "green",
      "fixedMelds": [],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-016",
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
        "9p",
        "3s",
        "6m",
        "green",
        "4m",
        "green",
        "green",
        "5m",
        "2s",
        "7p",
        "4m",
        "7m"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "6m"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5500
        ]
      }
    },
    {
      "id": "easy-017",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "3p",
        "4s",
        "5s",
        "7p",
        "3s",
        "4p",
        "5p",
        "1m",
        "6m",
        "3m",
        "5p",
        "6m"
      ],
      "winningTile": "2m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "4s"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1100,
          2100
        ]
      }
    },
    {
      "id": "easy-018",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "6m",
        "4s",
        "9s",
        "6m",
        "2p",
        "green",
        "6m",
        "green",
        "7s",
        "4s",
        "8s",
        "2p"
      ],
      "winningTile": "2p",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 42,
      "yaku": [
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1600
        ]
      }
    },
    {
      "id": "easy-019",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "5s",
        "4p",
        "3m",
        "7m",
        "green",
        "1m",
        "7s",
        "7m",
        "3p",
        "green",
        "5p",
        "green"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "6m"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12000
        ]
      }
    },
    {
      "id": "easy-020",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "white",
        "8m",
        "6s",
        "2p",
        "7m",
        "5s",
        "2p",
        "6m",
        "4p",
        "white",
        "white",
        "4s",
        "3p"
      ],
      "winningTile": "2p",
      "fixedMelds": [],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5500
        ]
      }
    },
    {
      "id": "easy-021",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "9p",
        "3s",
        "3s",
        "8p",
        "red",
        "5m",
        "7p",
        "3s",
        "7m",
        "4s",
        "red",
        "5s"
      ],
      "winningTile": "red",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1100,
          2100
        ]
      }
    },
    {
      "id": "easy-022",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "6s",
        "2m",
        "4p",
        "2m",
        "4p",
        "5m",
        "4m",
        "white",
        "4p",
        "white",
        "6m",
        "6s"
      ],
      "winningTile": "2m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 36,
      "yaku": [
        "멘젠쯔모",
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2600
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
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "5m",
        "5p",
        "5p",
        "6p",
        "5m",
        "1s",
        "7p",
        "6p",
        "7m",
        "5m",
        "2s",
        "6m"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "2s"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "핑후",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2700
        ]
      }
    },
    {
      "id": "easy-024",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "6s",
        "7s",
        "3p",
        "5p",
        "8s",
        "white",
        "3m",
        "white",
        "1m",
        "2m",
        "6s",
        "6s"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [
        "3p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2100
        ]
      }
    },
    {
      "id": "easy-025",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "4p",
        "6p",
        "3s",
        "south",
        "5m",
        "3m",
        "4m",
        "south",
        "6p",
        "6p",
        "6p",
        "5p"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "멘젠쯔모"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-026",
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
        "5p",
        "7s",
        "2s",
        "5p",
        "5p",
        "south",
        "4s",
        "south",
        "3m",
        "7s",
        "3m",
        "3m"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "2m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 42,
      "yaku": [
        "리치",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "easy-027",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "8p",
        "7s",
        "8m",
        "white",
        "9p",
        "7m",
        "3p",
        "3p",
        "8s",
        "white",
        "7p",
        "6s"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "5s"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1000,
          2000
        ]
      }
    },
    {
      "id": "easy-028",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6m",
        "6m",
        "2p",
        "4s",
        "5s",
        "6s",
        "2p",
        "7s",
        "4s",
        "green",
        "4s",
        "2p",
        "green"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 42,
      "yaku": [
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2400
        ]
      }
    },
    {
      "id": "easy-029",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "6s",
        "6m",
        "3p",
        "8m",
        "5p",
        "3p",
        "3p",
        "2m",
        "4p",
        "4m",
        "7m",
        "4s"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "2p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 32,
      "yaku": [
        "탕야오",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "easy-030",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "5s",
        "8p",
        "6s",
        "5m",
        "6m",
        "7m",
        "4s",
        "5m",
        "5s",
        "4s",
        "3s",
        "5m"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 32,
      "yaku": [
        "탕야오",
        "리치",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "easy-031",
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
        "2s",
        "5m",
        "5m",
        "6p",
        "7p",
        "6m",
        "8p",
        "6p",
        "3s",
        "7m",
        "6m",
        "4s"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "1s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          11600
        ]
      }
    },
    {
      "id": "easy-032",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7s",
        "white",
        "5s",
        "5p",
        "4p",
        "white",
        "5p",
        "3p",
        "5p",
        "white",
        "9m",
        "8m",
        "6s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 32,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4000
        ]
      }
    },
    {
      "id": "easy-033",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "2s",
        "4s",
        "8s",
        "3m",
        "2m",
        "3s",
        "6p",
        "5m",
        "7s",
        "4p",
        "5p",
        "2m"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1300,
          2600
        ]
      }
    },
    {
      "id": "easy-034",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "3p",
        "5p",
        "4p",
        "4s",
        "5p",
        "5s",
        "3m",
        "1m",
        "6m",
        "6p",
        "3s",
        "7p"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [
        "9m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "easy-035",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "9s",
        "7s",
        "5p",
        "3m",
        "7s",
        "7s",
        "7s",
        "east",
        "east",
        "5p",
        "5p",
        "3m",
        "8s"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "north"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 42,
      "yaku": [
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3500
        ]
      }
    },
    {
      "id": "easy-036",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "4p",
        "5s",
        "3s",
        "2m",
        "red",
        "red",
        "4m",
        "6m",
        "4s",
        "2p",
        "3p",
        "2m"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [
        "4m"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 38,
      "yaku": [
        "리치",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5200
        ]
      }
    },
    {
      "id": "easy-037",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "3p",
        "3p",
        "5s",
        "7m",
        "2p",
        "7m",
        "east",
        "4p",
        "5s",
        "7m",
        "3p",
        "3p"
      ],
      "winningTile": "east",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 36,
      "yaku": [
        "멘젠쯔모",
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1300,
          2600
        ]
      }
    },
    {
      "id": "easy-038",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6m",
        "5m",
        "4s",
        "3s",
        "2m",
        "2m",
        "6p",
        "5p",
        "2s",
        "5s",
        "7p",
        "4s",
        "4m"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "탕야오",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "easy-039",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8p",
        "9m",
        "4m",
        "7p",
        "6p",
        "5m",
        "2s",
        "7m",
        "4s",
        "4s",
        "8m",
        "3m",
        "4s"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [
        "6p"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2000,
          3900
        ]
      }
    },
    {
      "id": "easy-040",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "7s",
        "red",
        "5p",
        "red",
        "3m",
        "3p",
        "3s",
        "3s",
        "red",
        "1m",
        "6s",
        "4p"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [
        "2m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 38,
      "yaku": [
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-041",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7s",
        "5p",
        "6m",
        "2m",
        "5s",
        "7s",
        "6s",
        "1m",
        "7m",
        "6p",
        "8m",
        "4s",
        "3m"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-042",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "7s",
        "6s",
        "4s",
        "5m",
        "3p",
        "5p",
        "3p",
        "7s",
        "4p",
        "6m",
        "7m",
        "4p"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 32,
      "yaku": [
        "탕야오"
      ],
      "fuDetails": [],
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
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "2s",
        "3s",
        "5m",
        "white",
        "white",
        "6s",
        "6s",
        "6p",
        "7p",
        "white",
        "8p",
        "6m"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 38,
      "yaku": [
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-044",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "north",
        "7s",
        "5s",
        "5m",
        "8m",
        "6s",
        "8p",
        "6p",
        "5m",
        "north",
        "7p",
        "7m",
        "6m"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 34,
      "yaku": [
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-045",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "8s",
        "7s",
        "white",
        "3m",
        "2m",
        "1m",
        "5p",
        "2p",
        "2p",
        "6s",
        "4p",
        "white",
        "white"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "5p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 38,
      "yaku": [
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2900
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
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "4p",
        "6s",
        "north",
        "2m",
        "2m",
        "7m",
        "6s",
        "6s",
        "8m",
        "2m",
        "4p",
        "6m"
      ],
      "winningTile": "north",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "5m"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 44,
      "yaku": [
        "리치",
        "삼암각",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "easy-047",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "red",
        "4m",
        "4s",
        "8p",
        "red",
        "2s",
        "5p",
        "red",
        "3s",
        "5p",
        "6m",
        "9p",
        "7p"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 40,
      "yaku": [
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1600
        ]
      }
    },
    {
      "id": "easy-048",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "green",
        "8m",
        "4p",
        "green",
        "2p",
        "green",
        "6s",
        "2p",
        "3p",
        "5s",
        "5p",
        "9m",
        "7m"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 38,
      "yaku": [
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5500
        ]
      }
    },
    {
      "id": "easy-049",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "5s",
        "1p",
        "7m",
        "3p",
        "5s",
        "2p",
        "4m",
        "7s",
        "5s",
        "6m",
        "5m",
        "6m"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [
        "1p"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 32,
      "yaku": [
        "리치",
        "도라 2",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12000
        ]
      }
    },
    {
      "id": "easy-050",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "5s",
        "5s",
        "7p",
        "green",
        "7m",
        "5s",
        "8p",
        "3p",
        "3p",
        "7m",
        "green",
        "6p"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 36,
      "yaku": [
        "멘젠쯔모",
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-051",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "north",
        "4s",
        "4s",
        "6m",
        "7s",
        "4s",
        "6m",
        "6m",
        "2p",
        "2p",
        "north",
        "8s"
      ],
      "winningTile": "9s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 44,
      "yaku": [
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3500
        ]
      }
    },
    {
      "id": "easy-052",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2m",
        "4p",
        "6s",
        "3p",
        "7m",
        "red",
        "3m",
        "7m",
        "red",
        "5p",
        "red",
        "7s",
        "5s"
      ],
      "winningTile": "1m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-053",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "5m",
        "5s",
        "4s",
        "4s",
        "4s",
        "3p",
        "4p",
        "6m",
        "6s",
        "4p",
        "5p",
        "2p"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-054",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6m",
        "4s",
        "5s",
        "6p",
        "5s",
        "7p",
        "6s",
        "5m",
        "3s",
        "5m",
        "5m",
        "7m",
        "4s"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "easy-055",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7p",
        "6m",
        "5m",
        "green",
        "3s",
        "4m",
        "8p",
        "6p",
        "4m",
        "2s",
        "1s",
        "green",
        "4m"
      ],
      "winningTile": "green",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 34,
      "yaku": [
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1600
        ]
      }
    },
    {
      "id": "easy-056",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "3p",
        "9m",
        "3p",
        "south",
        "4s",
        "1p",
        "3s",
        "2p",
        "7m",
        "3p",
        "8m",
        "south"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "멘젠쯔모"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          300,
          500
        ]
      }
    },
    {
      "id": "easy-057",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3p",
        "4s",
        "4s",
        "4s",
        "4s",
        "5m",
        "west",
        "3m",
        "west",
        "2p",
        "1p",
        "4m",
        "3s"
      ],
      "winningTile": "2s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-058",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "8m",
        "6m",
        "5s",
        "1m",
        "6p",
        "7m",
        "7s",
        "2m",
        "5p",
        "6s",
        "4s",
        "3m",
        "7p"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "멘젠쯔모"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-059",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "6p",
        "4p",
        "4m",
        "5m",
        "6p",
        "red",
        "3m",
        "5s",
        "6s",
        "5p",
        "red",
        "7s"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "3p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1000,
          2000
        ]
      }
    },
    {
      "id": "easy-060",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "5p",
        "2s",
        "7s",
        "white",
        "5p",
        "3m",
        "3m",
        "7s",
        "7s",
        "4s",
        "5p",
        "3m"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 46,
      "yaku": [
        "리치",
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6400
        ]
      }
    },
    {
      "id": "easy-061",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7s",
        "4s",
        "5m",
        "2p",
        "8p",
        "5s",
        "6m",
        "4m",
        "4p",
        "6p",
        "7s",
        "3s",
        "3p"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1100,
          2100
        ]
      }
    },
    {
      "id": "easy-062",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "red",
        "4p",
        "7m",
        "5s",
        "2p",
        "6s",
        "red",
        "6s",
        "8m",
        "9m",
        "3p",
        "red",
        "6s"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 38,
      "yaku": [
        "리치",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2900
        ]
      }
    },
    {
      "id": "easy-063",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "west",
        "4m",
        "3s",
        "5p",
        "west",
        "3m",
        "7p",
        "2s",
        "5m",
        "2m",
        "1s",
        "5m",
        "6p"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 34,
      "yaku": [
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1300
        ]
      }
    },
    {
      "id": "easy-064",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "4s",
        "2p",
        "9p",
        "3s",
        "6m",
        "white",
        "2s",
        "8p",
        "7p",
        "white",
        "2p",
        "5m"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [
        "red"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 34,
      "yaku": [
        "역패",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "easy-065",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "2m",
        "2s",
        "4m",
        "2s",
        "3p",
        "6m",
        "4s",
        "1m",
        "5m",
        "3m",
        "5s",
        "2p"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "1p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3900
        ]
      }
    },
    {
      "id": "easy-066",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "white",
        "5p",
        "3p",
        "4p",
        "5p",
        "5s",
        "9m",
        "8m",
        "6s",
        "7m",
        "7s",
        "5p",
        "white"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1000
        ]
      }
    },
    {
      "id": "easy-067",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6m",
        "white",
        "3p",
        "6s",
        "1p",
        "6s",
        "white",
        "5s",
        "6s",
        "2p",
        "white",
        "8m",
        "4s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "2p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 40,
      "yaku": [
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2900
        ]
      }
    },
    {
      "id": "easy-068",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "white",
        "white",
        "7m",
        "7m",
        "9p",
        "7m",
        "2s",
        "8p",
        "3s",
        "5m",
        "white",
        "6m",
        "7p"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          1100
        ]
      }
    },
    {
      "id": "easy-069",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "8p",
        "2s",
        "2s",
        "7p",
        "6p",
        "south",
        "4m",
        "6p",
        "6p",
        "2s",
        "6p",
        "4m"
      ],
      "winningTile": "south",
      "fixedMelds": [],
      "doraIndicators": [
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 44,
      "yaku": [
        "삼암각",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6700
        ]
      }
    },
    {
      "id": "easy-070",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "4m",
        "4p",
        "6s",
        "5m",
        "7s",
        "3s",
        "5m",
        "5m",
        "3m",
        "2s",
        "5p",
        "8s"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3900
        ]
      }
    },
    {
      "id": "easy-071",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "2m",
        "2m",
        "3p",
        "5p",
        "1p",
        "6p",
        "4m",
        "2p",
        "3s",
        "2s",
        "4s",
        "3m"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-072",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "red",
        "8m",
        "4s",
        "7s",
        "4s",
        "8s",
        "6s",
        "6m",
        "7p",
        "red",
        "7m",
        "6p"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 34,
      "yaku": [
        "리치",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-073",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "7m",
        "2p",
        "3s",
        "4p",
        "5s",
        "3p",
        "4s",
        "5m",
        "3p",
        "6m",
        "3p",
        "6m"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          700,
          1300
        ]
      }
    },
    {
      "id": "easy-074",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6p",
        "west",
        "2s",
        "west",
        "6p",
        "4m",
        "2s",
        "6p",
        "4m",
        "2s",
        "4m",
        "5p",
        "7p"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 44,
      "yaku": [
        "삼암각",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6400
        ]
      }
    },
    {
      "id": "easy-075",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7s",
        "4m",
        "6m",
        "east",
        "5m",
        "1p",
        "2s",
        "3s",
        "3p",
        "4s",
        "2p",
        "7s",
        "7s"
      ],
      "winningTile": "east",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 38,
      "yaku": [
        "리치",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "easy-076",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "5m",
        "green",
        "3m",
        "3s",
        "5p",
        "4s",
        "6p",
        "2s",
        "green",
        "4m",
        "2m",
        "2m"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 36,
      "yaku": [
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-077",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "5s",
        "west",
        "4p",
        "west",
        "4s",
        "5p",
        "4s",
        "7s",
        "2m",
        "4s",
        "6p",
        "4m"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          500,
          1000
        ]
      }
    },
    {
      "id": "easy-078",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7s",
        "4m",
        "red",
        "5m",
        "6p",
        "7p",
        "3m",
        "red",
        "5p",
        "red",
        "9s",
        "8s",
        "7m"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 32,
      "yaku": [
        "멘젠쯔모",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          800,
          1400
        ]
      }
    },
    {
      "id": "easy-079",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "6p",
        "8p",
        "white",
        "5s",
        "white",
        "7p",
        "6m",
        "9p",
        "7m",
        "4s",
        "8m",
        "6p"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          600,
          1100
        ]
      }
    },
    {
      "id": "easy-080",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "5s",
        "7s",
        "4s",
        "6s",
        "6p",
        "5p",
        "2m",
        "6s",
        "1m",
        "5s",
        "5p",
        "5p",
        "7p"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "멘젠쯔모"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          600
        ]
      }
    },
    {
      "id": "easy-081",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "4m",
        "5p",
        "6s",
        "2s",
        "3s",
        "6m",
        "3p",
        "1s",
        "4p",
        "6s",
        "3m",
        "5m"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 20,
      "yaku": [
        "멘젠쯔모",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          700
        ]
      }
    },
    {
      "id": "easy-082",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "6p",
        "6m",
        "7m",
        "5m",
        "3p",
        "7s",
        "1p",
        "8p",
        "2p",
        "7p",
        "4m",
        "6s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "4m"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1100,
          2100
        ]
      }
    },
    {
      "id": "easy-083",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "south",
        "south",
        "5s",
        "4s",
        "4s",
        "6s",
        "4p",
        "5m",
        "3m",
        "4s",
        "4m",
        "3p",
        "4s"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [
        "east"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 36,
      "yaku": [
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2900
        ]
      }
    },
    {
      "id": "easy-084",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "2m",
        "5m",
        "5m",
        "3s",
        "3s",
        "5m",
        "7p",
        "north",
        "north",
        "4m",
        "7p",
        "3s"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 34,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4000
        ]
      }
    },
    {
      "id": "easy-085",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6p",
        "6s",
        "6p",
        "5s",
        "red",
        "6m",
        "7m",
        "5m",
        "7p",
        "6p",
        "7s",
        "6p",
        "red"
      ],
      "winningTile": "8p",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "도라 1"
      ],
      "fuDetails": [],
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
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "6m",
        "7s",
        "9s",
        "8s",
        "4p",
        "8m",
        "7m",
        "4p",
        "3p",
        "4p",
        "4s",
        "3s"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 20,
      "yaku": [
        "멘젠쯔모",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          400,
          700
        ]
      }
    },
    {
      "id": "easy-087",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "6s",
        "2m",
        "6m",
        "5m",
        "2m",
        "4p",
        "4p",
        "7m",
        "north",
        "4p",
        "2m",
        "6s"
      ],
      "winningTile": "north",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 44,
      "yaku": [
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3200
        ]
      }
    },
    {
      "id": "easy-088",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8p",
        "6m",
        "4m",
        "4s",
        "3s",
        "7s",
        "7s",
        "4p",
        "5m",
        "6p",
        "5s",
        "3p",
        "7p"
      ],
      "winningTile": "2p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6100
        ]
      }
    },
    {
      "id": "easy-089",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "6m",
        "2s",
        "5s",
        "4m",
        "4s",
        "3s",
        "2m",
        "5p",
        "7p",
        "5m",
        "2m",
        "3s"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1000,
          2000
        ]
      }
    },
    {
      "id": "easy-090",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "8s",
        "3p",
        "7s",
        "4m",
        "6p",
        "5p",
        "3p",
        "7p",
        "5m",
        "4m",
        "6m",
        "3m"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 30,
      "yaku": [
        "탕야오",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2300
        ]
      }
    },
    {
      "id": "easy-091",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2p",
        "4s",
        "6s",
        "8m",
        "6m",
        "4p",
        "2p",
        "white",
        "2p",
        "3p",
        "white",
        "7m",
        "white"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 2,
      "fu": 40,
      "yaku": [
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "easy-092",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "3p",
        "5m",
        "4s",
        "7p",
        "6m",
        "6p",
        "4m",
        "2s",
        "8p",
        "4s",
        "3s",
        "2s",
        "3p"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 32,
      "yaku": [
        "탕야오",
        "이페코",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "easy-093",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6p",
        "5m",
        "4m",
        "1s",
        "6m",
        "8p",
        "4m",
        "2s",
        "4m",
        "white",
        "white",
        "3s",
        "7p"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1100,
          2100
        ]
      }
    },
    {
      "id": "easy-094",
      "difficulty": "초급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "2s",
        "4s",
        "3s",
        "red",
        "6m",
        "1p",
        "2p",
        "red",
        "5m",
        "7m",
        "3p",
        "4s"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 1,
      "fu": 30,
      "yaku": [
        "멘젠쯔모"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          500
        ]
      }
    },
    {
      "id": "easy-095",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7m",
        "3p",
        "white",
        "5s",
        "7m",
        "9m",
        "4p",
        "8m",
        "white",
        "2p",
        "7m",
        "white",
        "6s"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1100,
          2100
        ]
      }
    },
    {
      "id": "easy-096",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "3s",
        "4s",
        "6p",
        "green",
        "6p",
        "6p",
        "6p",
        "5m",
        "4m",
        "green",
        "3m",
        "2s"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [
        "4p"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 38,
      "yaku": [
        "리치",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "easy-097",
      "difficulty": "초급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "3s",
        "6m",
        "3s",
        "3s",
        "4m",
        "5m",
        "2s",
        "8p",
        "7p",
        "red",
        "red",
        "4s"
      ],
      "winningTile": "red",
      "fixedMelds": [],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2100,
          4000
        ]
      }
    },
    {
      "id": "easy-098",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "5p",
        "6p",
        "8m",
        "2m",
        "2m",
        "red",
        "4p",
        "7m",
        "2m",
        "red",
        "6m",
        "5s"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "5s"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2000
        ]
      }
    },
    {
      "id": "easy-099",
      "difficulty": "초급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "green",
        "5p",
        "4p",
        "1m",
        "2m",
        "8s",
        "6s",
        "green",
        "5p",
        "3m",
        "green",
        "6p",
        "5p"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 32,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2100,
          4100
        ]
      }
    },
    {
      "id": "easy-100",
      "difficulty": "초급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "6s",
        "2m",
        "7s",
        "3p",
        "2p",
        "2m",
        "5s",
        "6m",
        "7m",
        "6s",
        "8m",
        "4s"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후"
      ],
      "fuDetails": [],
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
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "3s",
        "green",
        "4m",
        "5m",
        "7p",
        "2s",
        "3s",
        "green",
        "green",
        "5p",
        "6p",
        "1s"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "9s",
        "3m"
      ],
      "uraDoraIndicators": [
        "6p"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 38,
      "yaku": [
        "리치",
        "역패",
        "도라 2",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "medium-002",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "2s",
        "4p",
        "2p",
        "4m",
        "6m",
        "2s",
        "2m",
        "5m",
        "1m",
        "3s",
        "3p",
        "5s"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "3m",
        "1s"
      ],
      "uraDoraIndicators": [
        "4s"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 3",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          3200,
          6200
        ]
      }
    },
    {
      "id": "medium-003",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "5p",
        "8m",
        "white",
        "white",
        "5p",
        "white",
        "4p",
        "5p",
        "3p",
        "5s",
        "6s",
        "9m"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1300,
          2300
        ]
      }
    },
    {
      "id": "medium-004",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "6m",
        "red",
        "9p",
        "red",
        "5m",
        "7p",
        "2s",
        "7m",
        "7m",
        "red",
        "8p",
        "4s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "8p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 32,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-005",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "9s",
        "3s",
        "6p",
        "2m",
        "4m",
        "8s",
        "7s",
        "white",
        "white",
        "4p",
        "5p",
        "white"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "우라도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "medium-006",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "7m",
        "6p",
        "4s",
        "3p",
        "2p",
        "5m",
        "6m",
        "3s",
        "4p",
        "8m",
        "7m",
        "6p"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "1p"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2300,
          4300
        ]
      }
    },
    {
      "id": "medium-007",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "2s",
        "6m",
        "6p",
        "8p",
        "3p",
        "5m",
        "4s",
        "3p",
        "7p",
        "3s",
        "4m",
        "3s",
        "2s"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "3m",
        "6p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "이페코",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6200
        ]
      }
    },
    {
      "id": "medium-008",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "4m",
        "6p",
        "5p",
        "2s",
        "2s",
        "6p",
        "6p",
        "4m",
        "south",
        "4m",
        "south",
        "2s"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 42,
      "yaku": [
        "리치",
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6400
        ]
      }
    },
    {
      "id": "medium-009",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3p",
        "2m",
        "1m",
        "3s",
        "6s",
        "green",
        "5p",
        "3m",
        "4p",
        "green",
        "8s",
        "3s",
        "7s"
      ],
      "winningTile": "green",
      "fixedMelds": [],
      "doraIndicators": [
        "1m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 34,
      "yaku": [
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5200
        ]
      }
    },
    {
      "id": "medium-010",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "2m",
        "2m",
        "4s",
        "4p",
        "3p",
        "3m",
        "4m",
        "east",
        "2s",
        "3s",
        "5m",
        "2m"
      ],
      "winningTile": "east",
      "fixedMelds": [],
      "doraIndicators": [
        "4p",
        "2s"
      ],
      "uraDoraIndicators": [
        "2s"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 2",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2000,
          4000
        ]
      }
    },
    {
      "id": "medium-011",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "3p",
        "5p",
        "4p",
        "7m",
        "7s",
        "3p",
        "7s",
        "5s",
        "6m",
        "5m",
        "4p",
        "2p"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "4m",
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "medium-012",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "green",
        "4s",
        "6m",
        "2s",
        "2p",
        "green",
        "4s",
        "3s",
        "4s",
        "2p",
        "2p",
        "6m",
        "6m"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "white"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 44,
      "yaku": [
        "삼암각",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "medium-013",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7m",
        "7p",
        "3s",
        "4m",
        "2s",
        "5m",
        "3p",
        "8p",
        "6m",
        "5m",
        "3p",
        "4s",
        "6m"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2300,
          4300
        ]
      }
    },
    {
      "id": "medium-014",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7p",
        "6p",
        "4s",
        "6p",
        "3s",
        "4s",
        "5m",
        "4s",
        "4m",
        "7p",
        "5p",
        "3m",
        "8p"
      ],
      "winningTile": "2s",
      "fixedMelds": [],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [
        "5p"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "도라 1",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12900
        ]
      }
    },
    {
      "id": "medium-015",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6s",
        "5m",
        "3m",
        "5p",
        "3s",
        "4s",
        "5m",
        "5m",
        "8s",
        "6p",
        "4p",
        "4m",
        "7s"
      ],
      "winningTile": "2s",
      "fixedMelds": [],
      "doraIndicators": [
        "2s",
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2200,
          4200
        ]
      }
    },
    {
      "id": "medium-016",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "2p",
        "3p",
        "7m",
        "5s",
        "6s",
        "6m",
        "6p",
        "8p",
        "7p",
        "7m",
        "1p",
        "7s"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m",
        "7p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 32,
      "yaku": [
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5500
        ]
      }
    },
    {
      "id": "medium-017",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "east",
        "6s",
        "4p",
        "4s",
        "5p",
        "5s",
        "6m",
        "3p",
        "4s",
        "7m",
        "4s",
        "4s",
        "east"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [
        "north"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2100
        ]
      }
    },
    {
      "id": "medium-018",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7m",
        "6s",
        "2m",
        "7m",
        "5p",
        "red",
        "4p",
        "red",
        "red",
        "8s",
        "4m",
        "7s",
        "3m"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 38,
      "yaku": [
        "리치",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5800
        ]
      }
    },
    {
      "id": "medium-019",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "6m",
        "6s",
        "5m",
        "6p",
        "4m",
        "7s",
        "6p",
        "5p",
        "3m",
        "5m",
        "8s",
        "7p"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "6p"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2100,
          4100
        ]
      }
    },
    {
      "id": "medium-020",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "3p",
        "2p",
        "3m",
        "4s",
        "white",
        "4s",
        "white",
        "2m",
        "4p",
        "4s",
        "4m",
        "4s"
      ],
      "winningTile": "5s",
      "fixedMelds": [],
      "doraIndicators": [
        "2s",
        "red"
      ],
      "uraDoraIndicators": [
        "2m"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 36,
      "yaku": [
        "리치",
        "도라 3",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "medium-021",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "6s",
        "5p",
        "1s",
        "white",
        "2s",
        "2p",
        "white",
        "2p",
        "6s",
        "3s",
        "3s",
        "1s"
      ],
      "winningTile": "2s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "9s"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 25,
      "yaku": [
        "치또이츠",
        "리치",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "medium-022",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "white",
        "7s",
        "5p",
        "9s",
        "5p",
        "white",
        "7p",
        "3m",
        "8s",
        "white",
        "2m",
        "6p"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [
        "6p",
        "5p"
      ],
      "uraDoraIndicators": [
        "8s"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "도라 2",
        "우라도라 1"
      ],
      "fuDetails": [],
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
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "east",
        "2p",
        "east",
        "2p",
        "4s",
        "4s",
        "6m",
        "7s",
        "6s",
        "8s",
        "6m",
        "4s"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 40,
      "yaku": [
        "리치",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "medium-024",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "5p",
        "7m",
        "5p",
        "2m",
        "2p",
        "red",
        "red",
        "7p",
        "2p",
        "9p",
        "7m",
        "7p",
        "2m"
      ],
      "winningTile": "9p",
      "fixedMelds": [],
      "doraIndicators": [
        "1p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 25,
      "yaku": [
        "치또이츠",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          7300
        ]
      }
    },
    {
      "id": "medium-025",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "7s",
        "5p",
        "5p",
        "3m",
        "3m",
        "2s",
        "south",
        "south",
        "7s",
        "5p",
        "4s",
        "7s"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "1s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 34,
      "yaku": [
        "멘젠쯔모",
        "삼암각",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2200,
          4200
        ]
      }
    },
    {
      "id": "medium-026",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "3p",
        "7p",
        "7m",
        "west",
        "3p",
        "4s",
        "8m",
        "9p",
        "3p",
        "5s",
        "8p",
        "west"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "8p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1000,
          2000
        ]
      }
    },
    {
      "id": "medium-027",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "white",
        "6s",
        "8m",
        "3p",
        "white",
        "7m",
        "6s",
        "4p",
        "7s",
        "6s",
        "white",
        "2p",
        "5s"
      ],
      "winningTile": "9m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2200
        ]
      }
    },
    {
      "id": "medium-028",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "green",
        "5s",
        "1p",
        "7m",
        "3s",
        "3p",
        "8m",
        "7m",
        "7m",
        "6m",
        "green",
        "4s",
        "green"
      ],
      "winningTile": "2p",
      "fixedMelds": [],
      "doraIndicators": [
        "3s",
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "medium-029",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "9m",
        "8m",
        "8s",
        "9s",
        "8p",
        "7p",
        "8p",
        "7s",
        "7s",
        "9p",
        "8p",
        "6s"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 20,
      "yaku": [
        "멘젠쯔모",
        "삼색동순",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6000
        ]
      }
    },
    {
      "id": "medium-030",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "7m",
        "8p",
        "6p",
        "5m",
        "6s",
        "2m",
        "5s",
        "4s",
        "5s",
        "6m",
        "7p",
        "2m"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "7p",
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2200,
          4200
        ]
      }
    },
    {
      "id": "medium-031",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "9p",
        "3s",
        "white",
        "7m",
        "4s",
        "white",
        "5m",
        "8p",
        "white",
        "6m",
        "2s",
        "7p"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "4m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 32,
      "yaku": [
        "멘젠쯔모",
        "역패",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1600,
          2900
        ]
      }
    },
    {
      "id": "medium-032",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7m",
        "8p",
        "6m",
        "7p",
        "7m",
        "9s",
        "8s",
        "9p",
        "8m",
        "9m",
        "7s",
        "8m",
        "8s"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [
        "5m"
      ],
      "uraDoraIndicators": [
        "6m"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 32,
      "yaku": [
        "리치",
        "삼색동순",
        "도라 1",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          18900
        ]
      }
    },
    {
      "id": "medium-033",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "5s",
        "4s",
        "green",
        "6m",
        "green",
        "4s",
        "2p",
        "4s",
        "2p",
        "6m",
        "3s",
        "4s"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "1p"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 42,
      "yaku": [
        "리치",
        "우라도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "medium-034",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "4m",
        "7m",
        "3p",
        "8m",
        "red",
        "red",
        "4s",
        "9m",
        "2p",
        "4m",
        "4p",
        "5s"
      ],
      "winningTile": "red",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "4s"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3900
        ]
      }
    },
    {
      "id": "medium-035",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "5s",
        "6s",
        "2s",
        "2p",
        "3m",
        "4m",
        "4s",
        "3p",
        "1s",
        "4p",
        "5p",
        "2m"
      ],
      "winningTile": "2p",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [
        "4p"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 32,
      "yaku": [
        "리치",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5200
        ]
      }
    },
    {
      "id": "medium-036",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "6s",
        "green",
        "6m",
        "3p",
        "5p",
        "7s",
        "5m",
        "green",
        "5m",
        "7m",
        "5m",
        "5s"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2100
        ]
      }
    },
    {
      "id": "medium-037",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "3m",
        "2m",
        "green",
        "1s",
        "7p",
        "8p",
        "6p",
        "2m",
        "4m",
        "2m",
        "green",
        "2s"
      ],
      "winningTile": "2m",
      "fixedMelds": [],
      "doraIndicators": [
        "3m"
      ],
      "uraDoraIndicators": [
        "1m"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 36,
      "yaku": [
        "리치",
        "도라 1",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12900
        ]
      }
    },
    {
      "id": "medium-038",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8p",
        "5m",
        "7s",
        "4s",
        "7p",
        "7s",
        "3m",
        "6p",
        "6p",
        "2s",
        "4m",
        "5p",
        "3s"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-039",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "5m",
        "5p",
        "4s",
        "south",
        "south",
        "6s",
        "4s",
        "4s",
        "4s",
        "3m",
        "3p",
        "4p"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [
        "5s"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2000,
          3900
        ]
      }
    },
    {
      "id": "medium-040",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "white",
        "4m",
        "7m",
        "7s",
        "3m",
        "2m",
        "4p",
        "white",
        "8s",
        "5p",
        "6p",
        "white",
        "6s"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [
        "3p"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 32,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-041",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "7s",
        "2p",
        "5s",
        "8m",
        "7m",
        "4s",
        "3s",
        "3p",
        "8s",
        "9s",
        "4p",
        "4p"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [
        "6m"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "medium-042",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "red",
        "red",
        "5m",
        "7p",
        "8p",
        "3s",
        "red",
        "5p",
        "5p",
        "6p",
        "1s",
        "2s"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "2m"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          4200
        ]
      }
    },
    {
      "id": "medium-043",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "6m",
        "9s",
        "2p",
        "8s",
        "6m",
        "north",
        "2p",
        "7s",
        "6m",
        "north",
        "2p",
        "4s"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "3s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 44,
      "yaku": [
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6700
        ]
      }
    },
    {
      "id": "medium-044",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8m",
        "7p",
        "9m",
        "8p",
        "7s",
        "7m",
        "9s",
        "8s",
        "7m",
        "8s",
        "9p",
        "6m",
        "8m"
      ],
      "winningTile": "8s",
      "fixedMelds": [],
      "doraIndicators": [
        "7p",
        "7m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 32,
      "yaku": [
        "리치",
        "삼색동순",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12600
        ]
      }
    },
    {
      "id": "medium-045",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "4p",
        "2p",
        "6m",
        "3p",
        "7m",
        "4s",
        "8m",
        "2p",
        "red",
        "red",
        "6s",
        "2p"
      ],
      "winningTile": "red",
      "fixedMelds": [],
      "doraIndicators": [
        "2p"
      ],
      "uraDoraIndicators": [
        "5m"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2200,
          4200
        ]
      }
    },
    {
      "id": "medium-046",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "3s",
        "2s",
        "3p",
        "4m",
        "8p",
        "4s",
        "4s",
        "6m",
        "5m",
        "3p",
        "2s",
        "7p"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "이페코"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2000,
          3900
        ]
      }
    },
    {
      "id": "medium-047",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "7m",
        "4s",
        "8p",
        "3s",
        "9m",
        "5m",
        "4s",
        "6p",
        "8m",
        "4s",
        "3m",
        "4m",
        "7p"
      ],
      "winningTile": "2s",
      "fixedMelds": [],
      "doraIndicators": [
        "7p",
        "3s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 20,
      "yaku": [
        "멘젠쯔모",
        "핑후",
        "도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          3100,
          6100
        ]
      }
    },
    {
      "id": "medium-048",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4s",
        "7m",
        "6s",
        "5s",
        "3p",
        "white",
        "3p",
        "3p",
        "9m",
        "1p",
        "3p",
        "2p",
        "8m"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [
        "6m",
        "red"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 38,
      "yaku": [
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "medium-049",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4p",
        "3s",
        "4s",
        "6p",
        "5p",
        "green",
        "6p",
        "6p",
        "2s",
        "6p",
        "4m",
        "3m",
        "green"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "5p",
        "white"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 36,
      "yaku": [
        "도라 6"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12000
        ]
      }
    },
    {
      "id": "medium-050",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "3m",
        "8s",
        "6p",
        "5m",
        "5p",
        "5m",
        "6s",
        "4p",
        "7s",
        "2s",
        "5m",
        "4s",
        "3s"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "7s",
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 32,
      "yaku": [
        "탕야오",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          5200
        ]
      }
    },
    {
      "id": "medium-051",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8p",
        "8m",
        "3p",
        "6s",
        "7m",
        "3p",
        "9p",
        "5s",
        "east",
        "east",
        "7p",
        "7s",
        "6m"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "5s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          2200
        ]
      }
    },
    {
      "id": "medium-052",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "6p",
        "7p",
        "1m",
        "5p",
        "5s",
        "7s",
        "5s",
        "2m",
        "4s",
        "3m",
        "6s",
        "5p"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "6p"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 30,
      "yaku": [
        "리치",
        "핑후",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6100
        ]
      }
    },
    {
      "id": "medium-053",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6m",
        "5m",
        "7m",
        "3p",
        "8m",
        "3p",
        "6m",
        "4p",
        "2p",
        "3p",
        "7m",
        "5s",
        "3s"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "7m"
      ],
      "kanDoraIndicators": [],
      "han": 4,
      "fu": 30,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          3900
        ]
      }
    },
    {
      "id": "medium-054",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "4m",
        "9p",
        "2s",
        "7p",
        "east",
        "2s",
        "east",
        "6p",
        "8p",
        "2s",
        "6p",
        "6p"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 36,
      "yaku": [
        "멘젠쯔모",
        "삼암각"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          1400,
          2700
        ]
      }
    },
    {
      "id": "medium-055",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "2s",
        "4m",
        "4s",
        "6p",
        "5m",
        "5s",
        "6m",
        "4s",
        "5m",
        "3s",
        "3s",
        "5p"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "6p",
        "5m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          3300,
          6300
        ]
      }
    },
    {
      "id": "medium-056",
      "difficulty": "중급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7s",
        "red",
        "red",
        "3m",
        "8s",
        "4m",
        "2m",
        "red",
        "6p",
        "4m",
        "5p",
        "4m",
        "6s"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [
        "1m"
      ],
      "uraDoraIndicators": [
        "7s"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2000,
          4000
        ]
      }
    },
    {
      "id": "medium-057",
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
        "3p",
        "5p",
        "9m",
        "5p",
        "5s",
        "7m",
        "red",
        "6s",
        "8m",
        "red",
        "red",
        "7s"
      ],
      "winningTile": "4p",
      "fixedMelds": [],
      "doraIndicators": [],
      "uraDoraIndicators": [
        "7m"
      ],
      "kanDoraIndicators": [],
      "han": 3,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          7700
        ]
      }
    },
    {
      "id": "medium-058",
      "difficulty": "중급",
      "roundWind": "east",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3p",
        "5p",
        "4p",
        "7s",
        "4m",
        "3m",
        "2m",
        "8s",
        "5s",
        "2m",
        "7s",
        "6s",
        "2m"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "6s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          3300,
          6300
        ]
      }
    },
    {
      "id": "medium-059",
      "difficulty": "중급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "9s",
        "5p",
        "3m",
        "3m",
        "7s",
        "5p",
        "west",
        "7s",
        "5p",
        "8s",
        "3m",
        "7s",
        "west"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "4p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 48,
      "yaku": [
        "삼암각",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    },
    {
      "id": "medium-060",
      "difficulty": "중급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "3s",
        "2s",
        "3s",
        "4m",
        "3p",
        "5m",
        "6p",
        "3p",
        "8p",
        "4s",
        "4s",
        "2s",
        "7p"
      ],
      "winningTile": "6m",
      "fixedMelds": [],
      "doraIndicators": [
        "7p",
        "5p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "탕야오",
        "이페코",
        "핑후",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8000
        ]
      }
    }
  ],
  "hard": [
    {
      "id": "hard-001",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "3s",
        "7m",
        "1s",
        "5m",
        "5p",
        "5m",
        "6m",
        "3m",
        "2s",
        "3p",
        "6s",
        "4m"
      ],
      "winningTile": "6s",
      "fixedMelds": [],
      "doraIndicators": [
        "4m",
        "2p",
        "3p"
      ],
      "uraDoraIndicators": [
        "3m"
      ],
      "kanDoraIndicators": [],
      "han": 7,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 4",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          3000,
          6000
        ]
      }
    },
    {
      "id": "hard-002",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "west",
        "6s",
        "3p",
        "7s",
        "4p",
        "5p",
        "7s",
        "5s",
        "4m",
        "7s",
        "4s",
        "west",
        "2m"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "5s",
        "6s",
        "2m"
      ],
      "uraDoraIndicators": [
        "1m"
      ],
      "kanDoraIndicators": [],
      "han": 8,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 5",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8500
        ]
      }
    },
    {
      "id": "hard-003",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4p",
        "3m",
        "2m",
        "4m",
        "2m",
        "white",
        "6s",
        "4p",
        "2m",
        "4p",
        "6s",
        "6s",
        "white"
      ],
      "winningTile": "2m",
      "fixedMelds": [],
      "doraIndicators": [
        "1m",
        "red"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 10,
      "fu": 36,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "삼암각",
        "도라 6"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8500
        ]
      }
    },
    {
      "id": "hard-004",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "3p",
        "5p",
        "5s",
        "5s",
        "3p",
        "5s",
        "3p",
        "7m",
        "south",
        "4p",
        "7m",
        "south",
        "7m"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "4p",
        "4s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 42,
      "yaku": [
        "삼암각",
        "도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          18600
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
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "2s",
        "5m",
        "7p",
        "8p",
        "7m",
        "6m",
        "3s",
        "6m",
        "3p",
        "4s",
        "4m",
        "6p"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "4m",
        "6p",
        "1s"
      ],
      "uraDoraIndicators": [
        "3s",
        "2p"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 32,
      "yaku": [
        "탕야오",
        "리치",
        "도라 4",
        "우라도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          24900
        ]
      }
    },
    {
      "id": "hard-006",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "4p",
        "4m",
        "6p",
        "3s",
        "7s",
        "3m",
        "9s",
        "8s",
        "3s",
        "green",
        "green",
        "green"
      ],
      "winningTile": "2m",
      "fixedMelds": [],
      "doraIndicators": [
        "7s"
      ],
      "uraDoraIndicators": [
        "3m"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2400,
          4400
        ]
      }
    },
    {
      "id": "hard-007",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "1p",
        "2p",
        "2m",
        "3p",
        "5p",
        "2m",
        "2s",
        "4p",
        "3m",
        "6p",
        "5m",
        "4m"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "9p",
        "2p",
        "4p"
      ],
      "uraDoraIndicators": [
        "3m"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 32,
      "yaku": [
        "리치",
        "도라 3",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8600
        ]
      }
    },
    {
      "id": "hard-008",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "6m",
        "4s",
        "3s",
        "6m",
        "4s",
        "6m",
        "west",
        "4s",
        "2p",
        "2p",
        "5s",
        "4s",
        "2p"
      ],
      "winningTile": "west",
      "fixedMelds": [],
      "doraIndicators": [
        "2s",
        "1p",
        "3s"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 10,
      "fu": 44,
      "yaku": [
        "삼암각",
        "도라 8"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          17500
        ]
      }
    },
    {
      "id": "hard-009",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7s",
        "3p",
        "white",
        "white",
        "5m",
        "9m",
        "5m",
        "2p",
        "4p",
        "8m",
        "6s",
        "8s",
        "7m"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "6s",
        "2p"
      ],
      "uraDoraIndicators": [
        "1p",
        "6m"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 34,
      "yaku": [
        "리치",
        "도라 2",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          13500
        ]
      }
    },
    {
      "id": "hard-010",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "green",
        "2m",
        "4m",
        "3m",
        "green",
        "7s",
        "2p",
        "green",
        "7p",
        "8s",
        "5p",
        "9s",
        "6p"
      ],
      "winningTile": "2p",
      "fixedMelds": [],
      "doraIndicators": [
        "6s",
        "5p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 32,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2300,
          4300
        ]
      }
    },
    {
      "id": "hard-011",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2s",
        "9s",
        "7s",
        "6m",
        "4s",
        "west",
        "2s",
        "7s",
        "west",
        "6m",
        "9s",
        "9m",
        "4s"
      ],
      "winningTile": "9m",
      "fixedMelds": [],
      "doraIndicators": [
        "6s",
        "5m"
      ],
      "uraDoraIndicators": [
        "8s"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 25,
      "yaku": [
        "치또이츠",
        "리치",
        "도라 4",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          16300
        ]
      }
    },
    {
      "id": "hard-012",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "white",
        "7p",
        "4m",
        "white",
        "white",
        "6s",
        "3s",
        "6s",
        "6m",
        "6p",
        "5m",
        "4s",
        "8p"
      ],
      "winningTile": "2s",
      "fixedMelds": [],
      "doraIndicators": [
        "7p",
        "5s"
      ],
      "uraDoraIndicators": [
        "1s",
        "3m"
      ],
      "kanDoraIndicators": [],
      "han": 8,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 3",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          4000,
          8000
        ]
      }
    },
    {
      "id": "hard-013",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4m",
        "6s",
        "3m",
        "6p",
        "2m",
        "5p",
        "3s",
        "3s",
        "3m",
        "4m",
        "4p",
        "2m",
        "8s"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "5p",
        "1m"
      ],
      "uraDoraIndicators": [
        "1m"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 30,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "이페코",
        "도라 3",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          4000,
          8000
        ]
      }
    },
    {
      "id": "hard-014",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7p",
        "5p",
        "4s",
        "south",
        "3s",
        "7p",
        "3s",
        "4s",
        "west",
        "9p",
        "south",
        "west",
        "5p"
      ],
      "winningTile": "9p",
      "fixedMelds": [],
      "doraIndicators": [
        "8p"
      ],
      "uraDoraIndicators": [
        "2s",
        "8p"
      ],
      "kanDoraIndicators": [],
      "han": 10,
      "fu": 25,
      "yaku": [
        "치또이츠",
        "멘젠쯔모",
        "리치",
        "도라 2",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          4200,
          8200
        ]
      }
    },
    {
      "id": "hard-015",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5m",
        "5s",
        "6m",
        "6s",
        "5s",
        "7m",
        "3s",
        "4s",
        "6p",
        "5m",
        "5m",
        "7p",
        "8p"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "5m",
        "4m",
        "6p"
      ],
      "uraDoraIndicators": [
        "5m",
        "5s"
      ],
      "kanDoraIndicators": [],
      "han": 10,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "도라 5",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          16300
        ]
      }
    },
    {
      "id": "hard-016",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4m",
        "6m",
        "5s",
        "7m",
        "white",
        "8m",
        "4s",
        "4m",
        "1p",
        "white",
        "white",
        "2p"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "2s",
        "7m"
      ],
      "uraDoraIndicators": [
        "1p",
        "5m"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 40,
      "yaku": [
        "리치",
        "역패",
        "도라 2",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          13200
        ]
      }
    },
    {
      "id": "hard-017",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "4m",
        "7s",
        "5m",
        "8p",
        "2s",
        "3m",
        "7s",
        "6p",
        "3s",
        "5p",
        "4s",
        "6p",
        "7p"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "3m",
        "3s",
        "4p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "핑후",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          3500,
          6500
        ]
      }
    },
    {
      "id": "hard-018",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "7s",
        "3m",
        "4s",
        "5p",
        "7s",
        "3m",
        "5s",
        "7s",
        "north",
        "5p",
        "5p",
        "north",
        "6s"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "4p",
        "3s",
        "5s"
      ],
      "uraDoraIndicators": [
        "4s",
        "2m"
      ],
      "kanDoraIndicators": [],
      "han": 13,
      "fu": 36,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "삼암각",
        "도라 5",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          16100
        ]
      }
    },
    {
      "id": "hard-019",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8p",
        "red",
        "5s",
        "3p",
        "7p",
        "3p",
        "7m",
        "red",
        "7m",
        "5s",
        "5s",
        "3p",
        "7m"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "green",
        "2p"
      ],
      "uraDoraIndicators": [
        "green",
        "6p"
      ],
      "kanDoraIndicators": [],
      "han": 11,
      "fu": 44,
      "yaku": [
        "리치",
        "삼암각",
        "도라 5",
        "우라도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          25500
        ]
      }
    },
    {
      "id": "hard-020",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "3s",
        "5s",
        "7s",
        "3m",
        "1m",
        "white",
        "white",
        "1m",
        "7s",
        "3s",
        "4m",
        "4m"
      ],
      "winningTile": "3m",
      "fixedMelds": [],
      "doraIndicators": [
        "2s",
        "2m"
      ],
      "uraDoraIndicators": [
        "3m",
        "red"
      ],
      "kanDoraIndicators": [],
      "han": 11,
      "fu": 25,
      "yaku": [
        "치또이츠",
        "리치",
        "도라 4",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          36900
        ]
      }
    },
    {
      "id": "hard-021",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8s",
        "6m",
        "8s",
        "8s",
        "8p",
        "9m",
        "8m",
        "7m",
        "9p",
        "7m",
        "9s",
        "7s",
        "7p"
      ],
      "winningTile": "8m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m",
        "7s"
      ],
      "uraDoraIndicators": [
        "6m"
      ],
      "kanDoraIndicators": [],
      "han": 11,
      "fu": 30,
      "yaku": [
        "리치",
        "삼색동순",
        "핑후",
        "도라 5",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          24300
        ]
      }
    },
    {
      "id": "hard-022",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2p",
        "4m",
        "6p",
        "2s",
        "2s",
        "6p",
        "red",
        "2s",
        "4p",
        "4m",
        "6p",
        "3p",
        "red"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "3p",
        "2p",
        "5p"
      ],
      "uraDoraIndicators": [
        "1s"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 42,
      "yaku": [
        "리치",
        "도라 5",
        "우라도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          17200
        ]
      }
    },
    {
      "id": "hard-023",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "west",
      "playerType": "child",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "none",
      "concealedTiles": [
        "north",
        "4s",
        "5p",
        "5s",
        "3m",
        "3s",
        "5p",
        "north",
        "7s",
        "3m",
        "3m",
        "7s",
        "5p"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "6s",
        "west",
        "2m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 8,
      "fu": 40,
      "yaku": [
        "도라 8"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          16300
        ]
      }
    },
    {
      "id": "hard-024",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "3m",
        "5m",
        "6p",
        "6s",
        "4m",
        "3p",
        "5s",
        "1p",
        "2p",
        "5s",
        "4s",
        "7s"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "4s"
      ],
      "uraDoraIndicators": [
        "5p"
      ],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 32,
      "yaku": [
        "리치",
        "도라 2",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12000
        ]
      }
    },
    {
      "id": "hard-025",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "north",
        "5m",
        "5m",
        "2s",
        "3s",
        "5m",
        "8p",
        "4s",
        "6p",
        "5m",
        "3m",
        "4m",
        "north"
      ],
      "winningTile": "7p",
      "fixedMelds": [],
      "doraIndicators": [
        "3m",
        "2m",
        "5p"
      ],
      "uraDoraIndicators": [
        "4m",
        "6p"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 36,
      "yaku": [
        "리치",
        "도라 3",
        "우라도라 5"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          17500
        ]
      }
    },
    {
      "id": "hard-026",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6p",
        "3m",
        "2s",
        "5p",
        "8p",
        "4m",
        "3s",
        "7p",
        "4s",
        "4s",
        "7p",
        "6p",
        "5m"
      ],
      "winningTile": "4s",
      "fixedMelds": [],
      "doraIndicators": [
        "1s",
        "7p",
        "4m"
      ],
      "uraDoraIndicators": [
        "2s",
        "3s"
      ],
      "kanDoraIndicators": [],
      "han": 11,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "도라 3",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          6200,
          12200
        ]
      }
    },
    {
      "id": "hard-027",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "6p",
        "7p",
        "6m",
        "3s",
        "3s",
        "red",
        "2s",
        "5m",
        "red",
        "red",
        "8p"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "2s"
      ],
      "uraDoraIndicators": [
        "green",
        "3s"
      ],
      "kanDoraIndicators": [],
      "han": 10,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 3",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          4100,
          8100
        ]
      }
    },
    {
      "id": "hard-028",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "north",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 4,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3m",
        "5s",
        "6s",
        "4m",
        "4p",
        "5p",
        "6p",
        "5m",
        "6p",
        "3m",
        "4m",
        "6p",
        "2m"
      ],
      "winningTile": "7s",
      "fixedMelds": [],
      "doraIndicators": [
        "1m"
      ],
      "uraDoraIndicators": [
        "4s"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "도라 1",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          3400,
          6400
        ]
      }
    },
    {
      "id": "hard-029",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "north",
      "playerType": "child",
      "winType": "ron",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "9p",
        "8p",
        "green",
        "3p",
        "3p",
        "7p",
        "5s",
        "green",
        "6m",
        "8m",
        "7s",
        "3p"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "white",
        "5s",
        "7m"
      ],
      "uraDoraIndicators": [
        "2p",
        "7p"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 38,
      "yaku": [
        "리치",
        "도라 4",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          16000
        ]
      }
    },
    {
      "id": "hard-030",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "red",
        "7m",
        "3s",
        "2p",
        "3p",
        "7m",
        "5s",
        "red",
        "1p",
        "6m",
        "7m",
        "8m",
        "4s"
      ],
      "winningTile": "red",
      "fixedMelds": [],
      "doraIndicators": [
        "2p",
        "4s",
        "1p"
      ],
      "uraDoraIndicators": [
        "9p"
      ],
      "kanDoraIndicators": [],
      "han": 7,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 3",
        "우라도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          6200
        ]
      }
    },
    {
      "id": "hard-031",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "8s",
        "9p",
        "7s",
        "9s",
        "8p",
        "8s",
        "8m",
        "8p",
        "6s",
        "9m",
        "7p",
        "7s",
        "8p"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "6m"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "삼색동순",
        "도라 1"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2000,
          4000
        ]
      }
    },
    {
      "id": "hard-032",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "4s",
        "7p",
        "north",
        "6p",
        "north",
        "9s",
        "9s",
        "4s",
        "west",
        "west",
        "7p",
        "8s",
        "8s"
      ],
      "winningTile": "6p",
      "fixedMelds": [],
      "doraIndicators": [
        "3s",
        "8s",
        "south"
      ],
      "uraDoraIndicators": [
        "south",
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 13,
      "fu": 25,
      "yaku": [
        "치또이츠",
        "리치",
        "도라 6",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          32900
        ]
      }
    },
    {
      "id": "hard-033",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 1,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "7s",
        "2p",
        "7s",
        "5m",
        "3s",
        "3p",
        "south",
        "7s",
        "4s",
        "6m",
        "4p",
        "7m"
      ],
      "winningTile": "south",
      "fixedMelds": [],
      "doraIndicators": [
        "6m",
        "5m"
      ],
      "uraDoraIndicators": [
        "3p",
        "6s"
      ],
      "kanDoraIndicators": [],
      "han": 7,
      "fu": 36,
      "yaku": [
        "리치",
        "도라 2",
        "우라도라 4"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          18300
        ]
      }
    },
    {
      "id": "hard-034",
      "difficulty": "고급",
      "roundWind": "south",
      "seatWind": "south",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "4m",
        "5s",
        "3p",
        "3m",
        "6s",
        "7s",
        "4p",
        "white",
        "2m",
        "white",
        "1m",
        "4m"
      ],
      "winningTile": "white",
      "fixedMelds": [],
      "doraIndicators": [
        "3m",
        "4s",
        "1m"
      ],
      "uraDoraIndicators": [
        "9m",
        "2m"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "역패",
        "도라 4",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          4300,
          8300
        ]
      }
    },
    {
      "id": "hard-035",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "west",
      "playerType": "child",
      "winType": "tsumo",
      "honba": 0,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "2m",
        "4p",
        "1p",
        "3m",
        "5m",
        "2s",
        "2m",
        "5p",
        "4s",
        "4m",
        "6p",
        "2p",
        "3p"
      ],
      "winningTile": "3s",
      "fixedMelds": [],
      "doraIndicators": [
        "1s",
        "3p",
        "4p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 5,
      "fu": 30,
      "yaku": [
        "멘젠쯔모",
        "리치",
        "도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "childTsumo",
        "payments": [
          2000,
          4000
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
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "3s",
        "6p",
        "4s",
        "3p",
        "4s",
        "8p",
        "2s",
        "2s",
        "6m",
        "7p",
        "4m",
        "3p"
      ],
      "winningTile": "5m",
      "fixedMelds": [],
      "doraIndicators": [
        "2s",
        "5p"
      ],
      "uraDoraIndicators": [
        "1s",
        "5p"
      ],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 32,
      "yaku": [
        "탕야오",
        "리치",
        "이페코",
        "도라 3",
        "우라도라 3"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          16600
        ]
      }
    },
    {
      "id": "hard-037",
      "difficulty": "고급",
      "roundWind": "west",
      "seatWind": "south",
      "playerType": "child",
      "winType": "ron",
      "honba": 2,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5p",
        "7s",
        "north",
        "3m",
        "5p",
        "north",
        "7s",
        "3m",
        "7s",
        "3m",
        "7s",
        "6s",
        "8s"
      ],
      "winningTile": "5p",
      "fixedMelds": [],
      "doraIndicators": [
        "7s",
        "4p"
      ],
      "uraDoraIndicators": [
        "west"
      ],
      "kanDoraIndicators": [],
      "han": 7,
      "fu": 40,
      "yaku": [
        "리치",
        "도라 4",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          12600
        ]
      }
    },
    {
      "id": "hard-038",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "tsumo",
      "honba": 3,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "3s",
        "4s",
        "6m",
        "3p",
        "4p",
        "6p",
        "2p",
        "7m",
        "6p",
        "6m",
        "8m",
        "5s",
        "5m"
      ],
      "winningTile": "7m",
      "fixedMelds": [],
      "doraIndicators": [
        "5p",
        "6m",
        "2p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 9,
      "fu": 20,
      "yaku": [
        "탕야오",
        "멘젠쯔모",
        "리치",
        "핑후",
        "도라 5"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          8300
        ]
      }
    },
    {
      "id": "hard-039",
      "difficulty": "고급",
      "roundWind": "north",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "5s",
        "2p",
        "8p",
        "4p",
        "7s",
        "4s",
        "6p",
        "5m",
        "7p",
        "3p",
        "7s",
        "3s",
        "6m"
      ],
      "winningTile": "4m",
      "fixedMelds": [],
      "doraIndicators": [
        "1p"
      ],
      "uraDoraIndicators": [
        "5p",
        "4s"
      ],
      "kanDoraIndicators": [],
      "han": 6,
      "fu": 30,
      "yaku": [
        "탕야오",
        "리치",
        "핑후",
        "도라 1",
        "우라도라 2"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          19500
        ]
      }
    },
    {
      "id": "hard-040",
      "difficulty": "고급",
      "roundWind": "east",
      "seatWind": "east",
      "playerType": "dealer",
      "winType": "ron",
      "honba": 5,
      "isClosed": true,
      "riichiStatus": "riichi",
      "concealedTiles": [
        "6s",
        "7p",
        "4m",
        "7s",
        "6p",
        "5m",
        "5p",
        "8s",
        "3p",
        "4m",
        "6m",
        "5m",
        "3m"
      ],
      "winningTile": "3p",
      "fixedMelds": [],
      "doraIndicators": [
        "5m",
        "4m",
        "2p"
      ],
      "uraDoraIndicators": [],
      "kanDoraIndicators": [],
      "han": 7,
      "fu": 32,
      "yaku": [
        "탕야오",
        "리치",
        "도라 5"
      ],
      "fuDetails": [],
      "answer": {
        "type": "single",
        "payments": [
          19500
        ]
      }
    }
  ]
};

export function formatWind(wind) {
  return WIND_LABELS[wind] || wind;
}
