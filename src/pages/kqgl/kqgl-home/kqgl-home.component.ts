import { Component, OnInit } from '@angular/core';
interface User {
  id: number,
  name: string,
  cq: string,
  qq: string,
  dksj: string
}
@Component({
  selector: 'app-kqgl-home',
  templateUrl: './kqgl-home.component.html',
  styleUrls: ['./kqgl-home.component.scss']
})
export class KqglHomeComponent implements OnInit {
  users: Array<User>;
  selectedUser:User={
    id:666,
    name:"Kingsman",
    cq:"1",
    qq:"0",
    dksj:"20171212 08:12:25"
  };
  constructor() {

    this.loadUsersData();
   }

  ngOnInit() {
  }
  selectUser(user){
    this.selectedUser = user;
  }

  deleteUserByID(id) {
    this.users.forEach((user, index, arr)=> {
      if (user.id == id) {
        arr.splice(index, 1);
      }
    })
  }
  loadUsersData() {
    this.users = [
      {id: 5, name: "Ryane", cq: "✔", qq: "", dksj:"20171115 12:12:55"},
      {id: 4, name: "Liming", cq: "✔", qq: "", dksj:"20171115 12:12:55"},
      {id: 3, name: "Xiaohong", cq: "✔", qq: "", dksj:"20171115 12:12:55"},
      {id: 1, name: "Zhangdayong", cq: "", qq: "✔", dksj:"20171115 12:12:55"},
      {id: 2, name: "Hanmeimei", cq: "", qq: "✔", dksj:"20171115 12:12:55"}
    ];
  }
}
