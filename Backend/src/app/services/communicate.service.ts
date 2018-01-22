import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommunicateService {
  
  constructor(private http: Http) { }

  testThis(smth: any) {
    console.log('service');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/test', smth, { headers: headers }).map(res => res.json());
  }

  sendClick(smth: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/clicked', smth, { headers: headers }).map(res => res.json());
  }

 sendEmail(smth: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/email', smth, { headers: headers }).map(res => res.json());
  }
}
