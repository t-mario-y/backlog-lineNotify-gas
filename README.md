# backlog-lineNotify-gas
### 機能
Backlogの未完了タスク状況一覧を、定期的にLINEで通知する

### 使用技術
#### LINE Notify
LINE上の通知を手軽に実装する  
https://notify-bot.line.me/ja/  

#### Backlog API
Backlogの情報を外部Appから取得する  
https://developer.nulab-inc.com/ja/docs/backlog/  

#### Google Apps Script
通知スクリプトを定期的に実行する環境として使用。(Standalone Script)

### もう少し突っ込んだ話
#### LINE Notify
PCのブラウザからLINEにログインして、各トークグループに紐づくアクセストークンを発行する。

#### Backlog API
Backlogのページ内からAPI Keyを発行する。
/api/v2/issures で[課題一覧の取得]を実行する。  
https://developer.nulab-inc.com/ja/docs/backlog/api/2/get-issue-list/

#### Google Apps Script
Googleアカウント上で走らせる。  
初段は単に週次実行としているが、Googleカレンダーとの連携が容易なため機能拡張も考慮。

ただしソースコードをGitHub上で管理するにはひと工夫必要。(google/claspを使用)
また検証用に任意でLINE Notifyにメッセージを投げられるようにしたい。

#### 注意点
LINE NotifyアクセストークンおよびBacklog API KeyはGitHub上に置かないこと。  
ここら辺を参考に(.env に外だしして.gitignore)  
[API key等をgithubで公開しない方法(rails,heroku)](https://qiita.com/uma0317/items/e142661c004f68d858a5)  
[Nodeプロジェクトで環境依存の設定の管理方法](https://qiita.com/ueokande/items/80048f886082fea5b776)  
