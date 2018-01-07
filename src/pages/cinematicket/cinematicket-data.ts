import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Cinema {
  objectId?: number;
  name: string;
  counts: number;
  github:string
}

interface ParseResponse {
  results: any;
}

@Injectable()
export class CinemaService {
  cinemas: any[];
  constructor(private http: HttpClient) {
  }
  loadCinemaData() {
    let guz = "Cinemas";
    let url = "http://47.92.145.25:80/parse" + "/classes/" + guz;
    let headers: HttpHeaders = new HttpHeaders;
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

    let options: any = {
      headers: headers
    };
    this.http.get<ParseResponse>(url, options).subscribe(data => {
      this.cinemas = data['results'];
    });

  }
  //新增
  addNewCinema(cinema) {
    if (cinema["name"] === "") {
      alert("请输入正确的电影信息");
    }

    let url = "http://47.92.145.25:80/parse" + "/classes/Cinemas";
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");


    let options: any = {
      headers: headers
    };

  /*   let newCinema: Cinema = {
      name: "叛逆的鲁鲁修",
      counts: 1000,
    }; */
    this.http.post(url, cinema, options).subscribe(data => {
      this.loadCinemaData();
    });
  }
  //修改
  updateCinema(c) {
    if (c["name"] === "") {
      alert("请输入正确的电影信息");
    }
    let url = "http://47.92.145.25:80/parse" + "/classes/Cinemas/"+c.objectId;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");
    let options: any = {
      headers: headers
    };
    delete c["objectId"];
    delete c["createdAt"];
    delete c["updatedAt"];
    this.http.put(url, c, options).subscribe(data => {
      this.loadCinemaData();
    });
  }
  //删除
  deleteCinemaId(objectId) {
    let url = "http://47.92.145.25:80/parse" + "/classes/Cinemas/" + objectId;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

    let options = {
      headers: headers
    };
    this.http.delete(url, options).subscribe(data => {
      this.loadCinemaData();
    })

  }
  //排序
  sortcinemas(type) {

    // 参考MDN中的ES6，Array语法

    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

    if (type == "asc") {
      this.cinemas.sort(function (a, b) {
        if (a.objectId > b.objectId) {
          return 1;
        }
        if (a.objectId < b.objectId) {
          return -1;
        }
      });
    } else if (type == "desc") {
      this.cinemas.sort(function (a, b) {
        if (a.objectId < b.objectId) {
          return 1;
        }
        if (a.objectId > b.objectId) {
          return -1;
        }
      });
    } else {
      this.cinemas.sort(function (a, b) {
        return Math.trunc(Math.random() * 10)
      });
    }
    console.log("sortcinemas Works!");
  }

}