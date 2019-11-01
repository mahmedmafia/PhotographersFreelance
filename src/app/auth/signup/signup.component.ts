import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userTypes = ['Hirer', 'Photographer'];
  cities = ['cairo', 'giza', 'alexandria', 'menoufia', 'helwan', 'matrouh', 'suez'];
  constructor() { }
  signUpForm = new FormGroup(
    {
      'fname': new FormControl(null, Validators.required),
      'lname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'phone': new FormControl(null, Validators.required),
      'city': new FormControl('cairo', Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'repassword': new FormControl(null, [Validators.required]),
      'userType': new FormControl(this.userTypes[0], [Validators.required]),
      'privacy': new FormControl(null, [Validators.required,this.privacyFalse.bind(this)])

    }, { validators: this.passwordMisMatch.bind(this) }
  );
  get repassword() {
    return this.signUpForm.get('repassword');
  }
  ngOnInit() {
  }
  privacyFalse(c: FormControl): { [s: string]: boolean } {
    if (c.value !== true) {
      return { 'privacyFalse': true };
    } else {
      return null;
    }
  }
  passwordMisMatch(c: AbstractControl): { [s: string]: boolean } {

    if (c.get('password').value !== c.get('repassword').value && c.get('repassword') !== null) {
      return { 'passwordMisMatch': true };
    } else {
      return null;
    }
  }
  onSubmit() {
    console.log(this.signUpForm);
    console.log(this.signUpForm.value);

  }
}
