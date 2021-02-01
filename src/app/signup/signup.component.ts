import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private service: AllserviceService,
    private messageService: MessageService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      mobileno: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }

  signup() {
    if (this.myForm.valid) {
      this.service.signup(this.myForm.value).subscribe((res) => {
        // console.log(this.myForm.value);
        this.messageService.add({severity:'success', summary: 'Success', detail:'User Signup Successfully!!'});
        this.router.navigate(['/login'])

      });
    }
  }
}
