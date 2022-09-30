import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  countryList: Array<string> = ['Vietnam', 'USA', 'Korea', 'Japan'];

  constructor() {
    this.registerForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),

      passwordGroup: new FormGroup({
        password: new FormControl('',
          [Validators.required,
          Validators.minLength(6)]),

        passwordConfirm: new FormControl()
      }, [this.checkPassword]),

      country: new FormControl('', [Validators.required]),

      age: new FormControl('', [Validators.required, Validators.min(18)]),

      gender: new FormControl('', [Validators.required]),

      phone: new FormControl('', [Validators.pattern(/^\+84\d{9,10}$/)]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.countryList);
  }

  private checkPassword(passwordGroup: AbstractControl) {

    let password = passwordGroup.get('password').value;

    let passwordConfirm = passwordGroup.get('passwordConfirm').value;

    if (password !== passwordConfirm) {
      return {'checkPasswordConfirm': true};
    }

    return null;
  }
}
