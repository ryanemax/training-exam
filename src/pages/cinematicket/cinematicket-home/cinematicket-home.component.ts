import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/operators/map";
import { HttpHandler } from '@angular/common/http/src/backend';
import { CinemaService } from '../cinematicket-data';

interface Cinema {
  objectId?: number;
  name: string;
  counts: number;
}

interface ParseResponse {
  results:any;
}
@Component({
  selector: 'app-cinematicket-home',
  templateUrl: './cinematicket-home.component.html',
  styleUrls: ['./cinematicket-home.component.scss']
})
export class CinematicketHomeComponent implements OnInit {
  cinemas: Array<Cinema>;

  constructor(private http:HttpClient,private cinemaServ:CinemaService) {
    this.cinemaServ.loadCinemaData();
  }
  ngOnInit() {
  }
}