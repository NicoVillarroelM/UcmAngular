import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
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
