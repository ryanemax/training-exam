import { Component, OnInit,Input } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import "rxjs/operators/map";


interface Employee {
  id?: number;
  name: string;
  sex: string;
  dept:string;
  joinin:string;
}
@Component({
  selector: 'app-employee-manage-home',
  templateUrl: './employee-manage-home.component.html',
  styleUrls: ['./employee-manage-home.component.scss']
})
export class EmployeeManageHomeComponent implements OnInit {
  employees: Array<Employee>;
  searchText:string;
  selectedEmployee:any={
    id:666,
    name:"Kingsman",
    sex:"male",
    dept:"管理部门",
    joinin:"2017.1"
  };
  foods:any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private http:Http) {
    this.loadUsersData();
  }
  selectEmployee(employee){
    this.selectedEmployee = employee;
  }
  sortEmployees(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type === 'asc') {
      this.employees.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }

    if (type === 'desc') {
      this.employees.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
    }

    if(type === 'random') {
      for(let i=0, len=this.employees.length; i<len; i++){
        let rand = Number(Math.random()*len).toFixed(0);
        let temp = this.employees[rand];
        this.employees[rand] = this.employees[i];
        this.employees[i] = temp;
      }
    }
    console.log("sortUsers Works!");
  }

  loadUsersData() {
    // this.users = [
    //   {id: 5, count:100, name: "Ryane", github: "ryanemax", sex: "male"},
    //   {id: 4, count:999, name: "Liming", github: "liming", sex: "male"},
    //   {id: 3, count:1000, name: "Xiaohong", github: "xiaohong", sex: "female"},
    //   {id: 1, count:3432500, name: "Zhangdayong", github: "Zhangdayong", sex: "male"},
    //   {id: 2, count:10012312321, name: "Hanmeimei", github: "Hanmeimei", sex: "female"}
    // ];
    let url = "http://47.92.145.25:80/parse"+"/classes/Employee12";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");

    let options ={
      headers:headers
    };
    this.http.get(url,options).subscribe(data=>{
      this.employees = data.json().results;
    });
  }

  addNewEmployee() {
    let url = "http://47.92.145.25:80/parse"+"/classes/Employee12";
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };
    let newEmployee:Employee = {
      name: "Jack",
      sex: "male",
      dept:"行政",
      joinin:"2014",
      
    };
    this.http.post(url,newEmployee,options).subscribe(data=>{
      this.loadUsersData();
    });
  }

  deleteEmployeeByID(id) {
    let url = "http://47.92.145.25:80/parse"+"/classes/Employee12"+"/"+id;
    let headers:Headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("X-Parse-Application-Id","dev");
    headers.append("X-Parse-Master-Key","angulardev");
    let options ={
      headers:headers
    };

    this.http.delete(url,options).subscribe(data=>{
      this.loadUsersData();
    });
  }

  ngOnInit() {
  }

}
