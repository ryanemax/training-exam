import {Component, OnInit} from '@angular/core';

interface User {
  id: number,
  name: string,
  github: string,
  sex: string,
  count: number
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users: Array<User>;
  selectedUser:any={
    id:666,
    name:"Kingsman",
    sex:"male",
    github:"kingsman",
    count:"0"
  };

  constructor() {
    this.loadUsersData();
  }
  selectUser(user){
    this.selectedUser = user;
  }
  sortUsers(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == 'asc') {
      this.users.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }

    if (type == 'desc') {
      this.users.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
    }

    if(type == 'random') {
      for(let i=0, len=this.users.length; i<len; i++){
        let rand = Number(Math.random()*len).toFixed(0);
        let temp = this.users[rand];
        this.users[rand] = this.users[i];
        this.users[i] = temp;
      }
    }
    console.log("sortUsers Works!");
  }

  loadUsersData() {
    this.users = [
      {id: 5, count:100, name: "Ryane", github: "ryanemax", sex: "male"},
      {id: 4, count:999, name: "Liming", github: "liming", sex: "male"},
      {id: 3, count:1000, name: "Xiaohong", github: "xiaohong", sex: "female"},
      {id: 1, count:3432500, name: "Zhangdayong", github: "Zhangdayong", sex: "male"},
      {id: 2, count:10012312321, name: "Hanmeimei", github: "Hanmeimei", sex: "female"}
    ];
  }

  addNewUser() {
    let uuid = Number(Math.random() * 1000).toFixed(0);
    let newUser: User = {
      id: Number(uuid),
      name: "Jack",
      github: "Jack",
      sex: "male",
      count: 666
    }
    this.users.push(newUser);
  }

  deleteUserByID(id) {
    this.users.forEach((user, index, arr)=> {
      if (user.id == id) {
        arr.splice(index, 1);
      }
    })
  }

  ngOnInit() {
  }

}
