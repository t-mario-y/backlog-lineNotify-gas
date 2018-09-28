var STATUS_NOT_YET = 1;
var STATUS_PROGRESS = 2;
var STATUS_DONE = 3;
var STATUS_FINISHED = 4;
var LF = '\r\n'; //LINEメッセージ上の改行コード

//検証時のJSONファイル(BacklogAPIを何回も呼び出しすぎないように)
var testJsonFile = DriveApp.getFileById('16FLJjGigf1f49fHRl4585mjSdTaD-H3H');

/**
 * 未着手のタスク一覧情報メッセージを作成
 */
 function createNotYetTasksInfoMessage() {
  var taskArr = fetchTaskArr(STATUS_NOT_YET);
  var postString = '未着手のタスク' + LF;
  taskArr.forEach(function(elem){
    postString += createTaskTemplateString(elem); 
  });

  return postString;
}
/**
 * 処理中のタスク一覧情報メッセージを作成
 */
 function createProgressTasksInfoMessage() {
  var taskArr = fetchTaskArr(STATUS_PROGRESS);
  var postString = '処理中のタスク' + LF;
  taskArr.forEach(function(elem){
    postString += createTaskTemplateString(elem); 
  });

  return postString;
}
/**
 * 処理済みのタスク一覧情報メッセージを作成
*/
 function createDoneTasksInfoMessage() {
  var taskArr = fetchTaskArr(STATUS_DONE);
  var postString = '処理済みのタスク' + LF;
  taskArr.forEach(function(elem){
    postString += createTaskTemplateString(elem); 
  });

  return postString;
}
/**
 * backlogのAPIから取得したJSONから1行分のテンプレート文字列を作成する
 */
function createTaskTemplateString(taskObj){
  return taskObj.summary + '/担当:' + taskObj.assignee.name + LF
}
/**
 * Backlog APIの取得結果をJSON形式で返す
 * WILL statusID以外にも動的にパラメータを指定可能に
 */
function fetchTaskArr(statusId){
  var taskFetchurl = 'https://harmonyfct.backlog.jp/api/v2/issues' + 
    '?apiKey=' + BACKLOG_API_KEY +
    '&count=100' +
    '&statusId[]=' + statusId;
  //実データ
  return JSON.parse(UrlFetchApp.fetch(taskFetchurl).getContentText('UTF-8'));
  //テスト用
  //return JSON.parse(testJsonFile.getBlob().getDataAsString('UTF-8'));
}