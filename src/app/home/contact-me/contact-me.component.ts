import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  name: string;
  email: string;
  message: string;

  constructor() {

  }

  onSubmit(formData){
    alert("Message sent. I'll be in touch soon!");
  }
}