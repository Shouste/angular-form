import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl(''),
      email: new FormControl('', Validators.email),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
      }),
    });
    console.log(this.userForm);
  }

  onSubmitForm() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      console.log('OK');
    } else {
      console.log('KO');
    }
  }
}
