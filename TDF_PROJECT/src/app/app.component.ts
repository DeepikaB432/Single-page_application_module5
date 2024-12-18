import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TdfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TDF_PROJECT';
}
