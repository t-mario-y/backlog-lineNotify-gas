var LINE_NOTIFY_ACCESS_TOKEN = '';

function sendHttpPost(message){
  var options =
   {
     'method'  : 'post',
     'payload' : 'message=' + message,
     'headers' : {'Authorization' : 'Bearer '+ LINE_NOTIFY_ACCESS_TOKEN}

   };
   UrlFetchApp.fetch('https://notify-api.line.me/api/notify',options);
}

function myFunction(){
  var message = fetchBacklogTasks();
  sendHttpPost(message);
}