import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data_service:DataserviceService) { }
    posts:any;
  ngOnInit() {
  }

  getPosts(){
    this.data_service.getPosts().subscribe(response => {
      this.posts = response;
    })
  }

}
