var BACKLOG_API_KEY = '';
var STATUS_NOT_YET = 1;
var STATUS_PROGRESS = 2;
var STATUS_DONE = 3;
var STATUS_FINISHED = 4;
var LF = '\r\n'; //LINEメッセージ上の改行コード

//検証時のJSONファイル(BacklogAPIを何回も呼び出しすぎないように)
var testJsonFile = DriveApp.getFileById('16FLJjGigf1f49fHRl4585mjSdTaD-H3H');

/**
 * タスク一覧を取得し、状態で分類した文字列をLogに出力する
 */
//TODO:並び順が登録の逆順(新タスク→旧タスク)
//TODO:filter→forEach4回はかっこ悪い
function fetchBacklogTasks() {
  var postString = '';
  var taskFetchurl = 'https://harmonyfct.backlog.jp/api/v2/issues?apiKey=' + BACKLOG_API_KEY;
  //本番用
  var dataArr = JSON.parse(UrlFetchApp.fetch(taskFetchurl).getContentText('UTF-8'));
  //テスト用
  //var dataArr = JSON.parse(testJsonFile.getBlob().getDataAsString('UTF-8'));

  postString += '処理済みのタスク' + LF;
  dataArr.filter(function(elem){ return elem.status.id === STATUS_DONE; })
    .forEach(function(elem){
      postString += createTaskTemplateString(elem); 
    });

  postString += '処理中のタスク' + LF;
  dataArr.filter(function(elem){ return elem.status.id === STATUS_PROGRESS;  })
    .forEach(function(elem){
      postString += createTaskTemplateString(elem); 
    });

  postString += '未着手のタスク' + LF;
  dataArr.filter(function(elem){ return elem.status.id === STATUS_NOT_YET;})
    .forEach(function(elem){
      postString += createTaskTemplateString(elem); 
    });

  Logger.log(postString);
  return postString;
}
/**
 * backlogのAPIから取得したJSONから1行分のテンプレート文字列を作成する
 */
function createTaskTemplateString(taskObj){
  return taskObj.summary + '/担当:' + taskObj.assignee.name + LF
}
