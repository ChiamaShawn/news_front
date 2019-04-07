import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import 'rxjs/Rx';
import  'rxjs/add/operator/map';
@Injectable()
export class DataserviceService {

  constructor( public http:HttpClient) { }


  login(login_data){
    
    return this.http.post("http://localhost:8000/api/auth/login", login_data).map(response => {
      return JSON.stringify(response);
    })
  }
  register(register_data){
    return this.http.post("http://localhost:8000/api/auth/register", register_data).map(response => {
      return JSON.stringify(response);
    })
  } 
  getPosts(){
    return this.http.get("http://localhost:8000/getPosts").map(response => {
      return JSON.stringify(response);
    })
  }
  getSinglePost(){
    return this.http.get("http://localhost:8000/api/getSinglePost").map(response => {
      return JSON.stringify(response);
    })

  }
  getSidePosts(){

  }
  logout(){

  }
}
