import { Component, OnInit } from '@angular/core';
interface employee {
  id: number,
  name: string,
  sex: string,
  dept: string
}

@Component({
  selector: 'app-employee-manage-list',
  templateUrl: './employee-manage-list.component.html',
  styleUrls: ['./employee-manage-list.component.scss']
})
export class EmployeeManageListComponent implements OnInit {
  employees: Array<employee>;
  selectedEmployee:any={
    id:666,
    name:"Kingsman",
    sex:"male",
    dept:"'管理'"
  };
  selectEmployeer(user){
    this.selectedEmployee = user;
  }
  constructor() {
    this.loadEmployeesData();
   }
   sortEmployees(type) {
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == 'asc') {
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

    if (type == 'desc') {
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

    if(type == 'random') {
      for(let i=0, len=this.employees.length; i<len; i++){
        let rand = Number(Math.random()*len).toFixed(0);
        let temp = this.employees[rand];
        this.employees[rand] = this.employees[i];
        this.employees[i] = temp;
      }
    }
    console.log("sortUsers Works!");
  }
   loadEmployeesData() {
    this.employees = [
      {id: 5,  name: "Ryane",sex: "male",dept :"管理"},
      {id: 4,  name: "Liming",sex: "male",dept :"管理2"},
      {id: 3,  name: "Xiaohong",sex: "female",dept :"管理3"},
      {id: 1,  name: "Zhangdayong", sex: "male",dept :"管理4"},
      {id: 2,  name: "Hanmeimei", sex: "female",dept :"管理5"}
    ];
  }
  addNewEmployee() {
    let uuid = Number(Math.random() * 1000).toFixed(0);
    let NewEmployee: employee = {
      id: Number(uuid),
      name: "Jack",
      sex: "male",
      dept:"管理6"
    }
    this.employees.push(NewEmployee);
  }

  deleteEmployeeByID(id) {
    this.employees.forEach((employeer, index, arr)=> {
      if (employeer.id == id) {
        arr.splice(index, 1);
      }
    })
  }
  deleteById(){
    alert("恭喜您，删除成功");
  }
  ngOnInit() {
  }

}
