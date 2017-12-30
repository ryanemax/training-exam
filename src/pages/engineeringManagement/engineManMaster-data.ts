import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/_rxjs@5.5.2@rxjs/Observable';
import { $ } from '../../../node_modules/_protractor@5.1.2@protractor';

interface EngineeringsMaster {
    check?: boolean,
    no: number,
    address: string,
    startDate: string,
    endDate: string,
    personLiable: string,
    status: string
}

interface ParseResponse {
    results: any[];
}


@Injectable()
export class EngineeringsMasterService {
    engineerings: any[];
    constructor(private http: HttpClient) {
    }
    loadUsersData() {
        let url = "http://47.92.145.25:80/parse" + "/classes/EngineeringManagementMaster";
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

        let options: any = {
            headers: headers
        };
        this.http.get<ParseResponse>(url, options).subscribe(data => {
            this.engineerings = data['results'];
            console.log(this.engineerings);
        });
    }

    addData() {
        let url = "http://47.92.145.25:80/parse" + "/classes/EngineeringManagementMaster";
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

        let options: any = {
            headers: headers
        };
        let engineerings: EngineeringsMaster = {
            no: 5,
            address: '大连市中山区Z',
            startDate: '20171230',
            endDate: '20171230',
            personLiable: '赵四',
            status: '完了'
        };
        this.http.post(url, engineerings, options).subscribe(data => {
            this.loadUsersData();
        });
    }

    delData() {

        this.engineerings = this.engineerings.filter(a => a.check);
        this.engineerings.forEach(element => {

            let url = "http://47.92.145.25:80/parse" + "/classes/EngineeringManagementMaster" + "/" + element.no;
            let headers: HttpHeaders = new HttpHeaders();
            headers = headers.set("Content-Type", "application/json").set("X-Parse-Application-Id", "dev").set("X-Parse-Master-Key", "angulardev");

            let options = {
                headers: headers
            };

            this.http.delete(url, options).subscribe(data => {
                this.loadUsersData();
            });
        });
    }
}