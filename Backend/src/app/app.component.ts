import { Component ,OnInit} from '@angular/core';
import {CommunicateService } from './services/communicate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private comService: CommunicateService) {

  }

  ngOnInit() {
    console.log('init');
    const a = {
      id : "2"
    }
   // this.comService.testThis(JSON.stringify(a)).subscribe();
  }

  sendClick(offer: any) {
    const o = {
      jobOffer: offer
    };
    this.comService.sendClick(JSON.stringify(o)).subscribe();
  }

  sendEmail() {
    const e = {
      email: (<HTMLInputElement>document.getElementById('emailsend')).value
    };
    this.comService.sendEmail(JSON.stringify(e)).subscribe();
  }
}
