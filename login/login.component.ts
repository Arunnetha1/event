import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employees:any;
  loginId: any;
  password: any;
 
  constructor(){
    this.loginId;
    this.password;
    
  }
  ngOnInit(): void {
   
    
  }
  submitForm(loginForm:any){
    if(loginForm.loginId === 'HR' && loginForm.password === 'HR'){
     
      alert('Login success..!');
    } else{
      if(loginForm.loginId === 'HR' && loginForm.password != 'HR'){
         alert('failed.!');
        }
      
      }
    }
  }

  //  loginSubmit() {
  //   if(this.loginId === 'HR' && this.password === 'HR'){
  //     alert('Login success..!');
  //   } else{
  //     this.employees.forEach((employee:any) =>{
  //       if(this.loginId == employee.emailId && this.password == employee.password){
  //        alert(' welcome to employee home page...!');
  //       }
  //     });
  
  //   }
  // }
