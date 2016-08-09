import { Component } from '@angular/core';
import { MeComponent } from './me/me.component';
import { CustomFooterComponent } from './footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MeComponent, CustomFooterComponent]
})
export class AppComponent {
  title = 'app works!';
}
