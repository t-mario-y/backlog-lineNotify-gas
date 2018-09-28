/**
 * LINE NotifyのメッセージAPIを呼び出す
 */
function sendLineNotify(message){
  var options =
   {
     'method'  : 'post',
     'payload' : 'message=' + message,
     'headers' : { 'Authorization' : 'Bearer '+ LINE_NOTIFY_ACCESS_TOKEN }
   };
   UrlFetchApp.fetch('https://notify-api.line.me/api/notify', options);
}

/**
 * LINE NotifyにBacklogのタスク一覧を通知する
 */
function notifyBacklogTasksInfo(){
  sendLineNotify(createNotYetTasksInfoMessage()); //未着手
  sendLineNotify(createProgressTasksInfoMessage()); //処理中
  sendLineNotify(createDoneTasksInfoMessage()); //処理済み
}