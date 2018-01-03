import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface EngineeringsMaster {
    check?: boolean,
    objectId?: string,
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
            
        });
    }

    addData(data) {
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
        console.log('del star');
        console.log(this.engineerings);
        let deleteList = this.engineerings.filter(a => a.check);
        deleteList.forEach(element => {
            console.log(element.objectId);       

            let url = "http://47.92.145.25:80/parse" + "/classes/EngineeringManagementMaster" + "/" + element.objectId;
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