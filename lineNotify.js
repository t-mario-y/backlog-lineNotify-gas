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

/** 
 * トリガーの設定(土曜日12:00頃)
 * トリガーの設定自体はGAS Project上でこの関数を実行する必要がある。
 */
function triggerBuildSample(){
  ScriptApp.newTrigger('notifyBacklogTasksInfo').timeBased()
    .onWeekDay(ScriptApp.WeekDay.SATURDAY)
    .atHour(12).nearMinute(0)
    .create();
}

/**
 * LINE Notifyに雑に飛ばす検証用処理
 */
function notifyTestMessage(){
  sendLineNotify('このようにGoogle Apps ScriptからLINE Notifyにメッセージを送信可能です。');
}