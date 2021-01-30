import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      gender: new FormControl('',Validators.required)
    })

  }

}
