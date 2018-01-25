import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;
constructor(private service: AppService) {}
  saveData(form) {
      this.data = form.value;
      this.service.saveData(this.data).subscribe(res => {
      });
}
}
