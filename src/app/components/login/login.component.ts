import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup
  constructor(private authService: AuthService, private router:Router) { }

  submit(){
    this.authService.login(this.myForm.value).subscribe({
      next:()=>this.router.navigate(['admin']),
      error:(err)=>alert(err.message)
    })
  }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
    if(this.authService.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }

}
