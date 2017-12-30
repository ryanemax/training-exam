import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
import { LmsStudentService, LmsStudent } from '../lms-student.service';

@Component({
  selector: 'app-lms-student-detail',
  templateUrl: './lms-student-detail.component.html',
  styleUrls: ['./lms-student-detail.component.scss']
})
export class LmsStudentDetailComponent implements OnInit {
  id:string;
  student:any;
  constructor(private route: ActivatedRoute,
    private http:HttpClient,
    private lmsStudentService:LmsStudentService) {
      this.student = {};
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = params["params"]["id"];
      this.lmsStudentService.getStudentById(this.id).subscribe(
        data => {
          this.student = data;
        }
      );
    });
  }

}
