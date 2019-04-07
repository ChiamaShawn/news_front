import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DataserviceService} from '../dataservice.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm;
  constructor(private data_service:DataserviceService, private router:Router) {
    const email = new FormControl('',  Validators.required);
    const password = new FormControl('', Validators.required);
    const c_password = new FormControl('', Validators.required);
    const name = new FormControl('', Validators.required);
    // const last_name = new FormControl('', Validators.required);
    this.registerForm = new FormGroup(
      {
        email: email,
        password: password,
        c_password: c_password,
        name: name
      }
    );
   }

  ngOnInit() {
  }
  register(){
    return this.data_service.register(this.registerForm.value).subscribe(response => {
      console.log(response);
      localStorage.setItem('user_token', response['access_token']);
      alert("User Created Successfully");
    }, err => {
      alert("Error communicating with server");
      this.router.navigate(['login']);
    })
  }
}
