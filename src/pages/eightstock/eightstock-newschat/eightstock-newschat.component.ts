import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parse } from "../../../cloud/cloud";

let url = "http://47.92.145.25:80/parse";
let headers: Headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("X-Parse-Application-Id", "dev");
headers.append("X-Parse-Master-Key", "angulardev");
let options = { headers: headers, params: {} };

interface NewsChat {
  objectId?: String,
  newsId: number,
  name: string;
  chat: string,
  likes: number,
  dislikes: number
}

@Component({
  selector: 'app-eightstock-newschat',
  templateUrl: './eightstock-newschat.component.html'
})


export class EightstockNewschatComponent {

  newsId: any;
  newsChats: NewsChat[];
  nChat: NewsChat;
  constructor(private httpclient: HttpClient,
    public dialogRef: MatDialogRef<EightstockNewschatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.newsId = data['newsId'];
    this.nChat = {
      newsId: this.newsId,
      name: '',
      chat: '',
      likes: 0,
      dislikes: 0
    }
    // Object.keys(data).forEach(key => {
    //   this.newsId = data[key];
    // });
    this.getNewsChatByNewsId();
  }
  getNewsChatByNewsId() {
    let query = new Parse.Query("EStockChat", this.httpclient);
    // query.limit(5);
    query.find().subscribe(data => {
      this.newsChats = data;
      console.log(data);
    });
  }

  saveChat() {
    if (this.nChat.name === "" || this.nChat.chat === "") {
      alert("请输入名字和评论内容!");
      return;
    }

    let url = "http://47.92.145.25:80/parse" + "/classes/EStockChat";
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

    let options: any = {
      headers: headers
    };

    this.httpclient.post(url, this.nChat, options).subscribe(data => {
      this.getNewsChatByNewsId();
      this.nChat = {
        newsId: this.newsId,
        name: '',
        chat: '',
        likes: 0,
        dislikes: 0
      }
    });
  }
  
  deleteChat(id) {
    let url = "http://47.92.145.25:80/parse" + "/classes/EStockChat";
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

    let options: any = {
      headers: headers
    };

    this.httpclient.delete(url + "/" + id, options).subscribe(data => {
      this.getNewsChatByNewsId();
    }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
