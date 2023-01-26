import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/models/LoginData.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  url: string = "https://3000-navarette-otakupeak-v98afco09il.ws-eu84.gitpod.io/Login";
  form!: FormGroup;
  errorMessage!: string;
  yo!: any;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]]
    });
  }


  submit() {
    let body: HttpParams = new HttpParams();
    body = body.appendAll({
      email: this.form.value.email,
      pwd: this.form.value.pwd

    });
    console.log(body)
    this.http.post<Data>(this.url, '', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: body,
      responseType: "json"
    }).subscribe(data => {
      if (data.statusCode == 200) {
        
        localStorage.setItem('id', data.data.id.toString());
        localStorage.setItem('email', data.data.email);
        localStorage.setItem('username', data.data.username);
        localStorage.setItem('administrator', data.data.administrator.toString());
        this.router.navigate(["Home"]);

      } else {
        this.errorMessage = data.data.toString();
      }
    })

  }
}
