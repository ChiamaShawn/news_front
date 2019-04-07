import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup} from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm;
  constructor(private data_service: DataserviceService) { 
    const email = new FormControl('', Validators.required);
    const password = new FormControl('', Validators.required);


    this.loginForm = new FormGroup({
      email: email,
      password: password
    });
  }

  ngOnInit() {

  }
  login(){
    console.log(this.loginForm);
    this.data_service.login(this.loginForm.value).subscribe(response => {

      console.log(response);
    })
  }

}
