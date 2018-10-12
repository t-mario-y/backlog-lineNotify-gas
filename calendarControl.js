//id指定がうまくいかないのでDefaultCalendar()で実装
//(公開権限の設定で治りそう?)
var calendar = CalendarApp.getDefaultCalendar();
function readEventsSample(){
  var events = calendar.getEvents(new Date('2018/1/1'), new Date('2018/12/31'));
  events.forEach(function(event){
    Logger.log(getDateString(event.getStartTime()) + '/' + event.getTitle());
  });
}

function getDateString(_date){
  return _date.getFullYear() + '/' + (_date.getMonth()+1) + '/' + _date.getDate();
}
