import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AllserviceService } from '../allservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private service: AllserviceService,private rut:Router,private messageService: MessageService) {}

  ngOnInit(): void {}

  get isLoggedIn() {
    return this.service.isLoggedIn();
  }

  logout(){
    this.messageService.add({severity:'success', summary: 'Success', detail:'User Logout Successfully!!'});

    sessionStorage.clear();
    this.rut.navigate(['/']);
  }
}
