import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private service: AllserviceService,private router:Router,private messageService: MessageService) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if(this.myForm.valid){
      this.service.login(this.myForm.value).subscribe(res => {

        if(res.status == 200){
          sessionStorage.setItem("isLogin","true");
          // console.log(res);
          this.router.navigate(['/'])
          this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});

        }
        else{
          // console.log(res);
          this.messageService.add({severity:'error', summary: 'Error', detail:'User Not Found!!'});
        }
      });
    }
    else{
      this.messageService.add({severity:'info', summary: 'Info', detail:'Please Enter Credentials!!'});

    }

  }
}
