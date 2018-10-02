//検証時のJSONファイル(BacklogAPIを何回も呼び出しすぎないように)
var testData = [
  {
    "id": 6821814,
    "projectId": 66683,
    "issueKey": "HFPRJ-116",
    "keyId": 116,
    "issueType": {
      "id": 303840,
      "projectId": 66683,
      "name": "タスク",
      "color": "#7ea800",
      "displayOrder": 0
    },
    "summary": "BacklogとLineの連携について",
    "description": "◆提起◆\nBacklog API を用いて、練習30min前に未消化の課題一覧を自動でLineにpostするbotはつくれないか\n\n◆流れ◆\nBacklog APIを触ってみる\n実行環境の確保\nGoogle Calendar APIを触ってみる\n→google apps scriptにしよう！\n\n◆方針◆\nとりあえず\nBacklogから未消化の課題一覧を取得し、自動でメールポスト\nくらいで実装してみる\n\n◆やったこと◆\nBacklogのAPIキーを発行し、curlで課題一覧を取得した\nJava SEの実行環境を整えた(Eclipse)\n\n",
    "resolution": null,
    "priority": {
      "id": 3,
      "name": "中"
    },
    "status": {
      "id": 2,
      "name": "処理中"
    },
    "assignee": {
      "id": 148750,
      "userId": "maria",
      "name": "まりあ",
      "roleType": 1,
      "lang": null,
      "mailAddress": "hoge@gmail.com ",
      "nulabAccount": null
    },
    "category": [
      {
        "id": 138944,
        "name": "練習日程",
        "displayOrder": 2147483646
      }
    ],
    "versions": [],
    "milestone": [],
    "startDate": null,
    "dueDate": null,
    "estimatedHours": null,
    "actualHours": null,
    "parentIssueId": null,
    "createdUser": {
      "id": 148750,
      "userId": "maria",
      "name": "まりあ",
      "roleType": 1,
      "lang": null,
      "mailAddress": "hoge@gmail.com ",
      "nulabAccount": null
    },
    "created": "2018-09-04T23:38:16Z",
    "updatedUser": {
      "id": 148747,
      "userId": "mario",
      "name": "まりお",
      "roleType": 1,
      "lang": "ja",
      "mailAddress": "fuga@gmail.com",
      "nulabAccount": {
        "nulabId": "nyE2BvYNJzJD0qTJJ6T4YYirefDwx7RU2sWv27Ta3ICd9nr7Tp",
        "name": "まりお",
        "uniqueId": "tmarioyoshi"
      }
    },
    "updated": "2018-09-07T03:50:37Z",
    "customFields": [],
    "attachments": [],
    "sharedFiles": [],
    "stars": []
  },
  {
    "id": 6577350,
    "projectId": 66683,
    "issueKey": "HFPRJ-108",
    "keyId": 108,
    "issueType": {
      "id": 303840,
      "projectId": 66683,
      "name": "タスク",
      "color": "#7ea800",
      "displayOrder": 0
    },
    "summary": "合宿応募のエントリー画面はいらないのか。",
    "description": "",
    "resolution": null,
    "priority": {
      "id": 3,
      "name": "中"
    },
    "status": {
      "id": 1,
      "name": "未対応"
    },
    "assignee": {
      "id": 148739,
      "userId": "cheke",
      "name": "ちぇけ",
      "roleType": 1,
      "lang": "ja",
      "mailAddress": "puyo@gmail.com",
      "nulabAccount": {
        "nulabId": "EXXmNPhHxiP2ZRHfv8daoQITi3HM4ZSjsQ6MJBdGy1IcMwArb6",
        "name": "ちぇけ",
        "uniqueId": "cheketakura"
      }
    },
    "category": [],
    "versions": [],
    "milestone": [],
    "startDate": null,
    "dueDate": null,
    "estimatedHours": null,
    "actualHours": null,
    "parentIssueId": null,
    "createdUser": {
      "id": 148739,
      "userId": "cheke",
      "name": "ちぇけ",
      "roleType": 1,
      "lang": "ja",
      "mailAddress": "puyo@gmail.com",
      "nulabAccount": {
        "nulabId": "EXXmNPhHxiP2ZRHfv8daoQITi3HM4ZSjsQ6MJBdGy1IcMwArb6",
        "name": "ちぇけ",
        "uniqueId": "cheketakura"
      }
    },
    "created": "2018-08-10T14:57:50Z",
    "updatedUser": {
      "id": 148752,
      "userId": "lee",
      "name": "りぃ",
      "roleType": 2,
      "lang": null,
      "mailAddress": "fizzbuzz@gmail.com ",
      "nulabAccount": null
    },
    "updated": "2018-08-10T15:16:16Z",
    "customFields": [],
    "attachments": [
      {
        "id": 3419370,
        "name": "画像.png",
        "size": 14348,
        "createdUser": {
          "id": 148752,
          "userId": "lee",
          "name": "りぃ",
          "roleType": 2,
          "lang": null,
          "mailAddress": "fizzbuzz@gmail.com ",
          "nulabAccount": null
        },
        "created": "2018-08-10T15:16:16Z"
      }
    ],
    "sharedFiles": [],
    "stars": []
  }
]