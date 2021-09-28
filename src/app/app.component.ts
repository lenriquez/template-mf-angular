import {Component, NgZone} from '@angular/core';
import {connectRouter, shareNgZone} from "@angular-architects/module-federation-tools";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template-mf-angular';

  constructor(private ngZone: NgZone) {
    shareNgZone(ngZone);
  }

  ngOnInit(): void { }
}
