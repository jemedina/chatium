import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService, NewUser } from '../../services/session-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly LOGIN_SUCCESSFUL = 1;
  readonly LOGIN_FAILED = 0;

  waitingSessionResponse: boolean = false;

  
  email: string;
  password: string;

  registerForm: FormGroup;

  constructor(private router: Router, 
              private sessionService: SessionService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required]
    });
  }

  doLogin() {
    console.log("doLogin clicked");
    this.sessionService.beginSession(this.email, this.password).subscribe((data:  any) => {
      console.log("Respuesta: ", data.status)
      if(data.status == this.LOGIN_SUCCESSFUL) {
        this.router.navigate(['/home']);
      } else {
        alert("User/Pass incorrects");
      }
      console.log("Response:",data);
    });
  }

  doCreateAccount() {
    if(this.registerForm.valid) {
      this.waitingSessionResponse = true;

      this.sessionService.createUser(new NewUser(
        this.registerForm.controls.name.value,
        this.registerForm.controls.email.value,
        this.registerForm.controls.password.value,
        this.registerForm.controls.gender.value)
        ).subscribe( (data: any) => {
          this.waitingSessionResponse = false;
          console.log(data);
          alert("Wellcome to chatium");
          //if(is an new user):
          this.router.navigate(['/setup']);
        });
      }
  }

}
