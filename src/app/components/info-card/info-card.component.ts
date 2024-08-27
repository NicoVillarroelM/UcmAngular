import { Component } from '@angular/core';
import { title } from 'process';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  cards = [
    {
      icon: 'icon1.png',
      title: 'Productos ecológicos',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: 'icon2.png',
      title: 'Productos ecológicos2',
      text: 'Lorem ipsum dolor sit amet',
    },
    {
      icon: 'icon3.png',
      title: 'Productos ecológicos2',
      text: 'Lorem ipsum dolor sit amet',
    },
  ]
}
