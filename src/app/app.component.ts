import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopmenuComponent } from "./topmenu/topmenu.component";
import { HeadermenuComponent } from "./components/headermenu/headermenu.component";
import { HeroimageComponent } from "./components/heroimage/heroimage.component";
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from "./components/info-card/info-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopmenuComponent, HeadermenuComponent, HeroimageComponent, CommonModule, InfoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecoviron';
}
