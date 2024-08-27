import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroimage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroimage.component.html',
  styleUrl: './heroimage.component.css'
})
export class HeroimageComponent implements OnInit {
  slider = [
    {
      title: 'Bienvenido a Ecoviron',
      subtitle: 'La mejor tienda de productos ecológicos',
      image: 'sliderp/s3.png',
      buttonText: 'Start Today',
      buttonAction: 'startTodayAction'
    },
    {
      title: 'Bienvenido',
      subtitle: 'asdasdas',
      image: 'sliderp/s3.png',
      buttonText: 'Start Today',
      buttonAction: 'startTodayAction'
    },
    {
      title: 'Bienvenido a',
      subtitle: 'asdasd123',
      image: 'sliderp/s3.png',
      buttonText: 'Start Today',
      buttonAction: 'startTodayAction'
    },
  ]

  currentIndex = 0;

  ngOnInit(): void {
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slider.length;
}
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slider.length) % this.slider.length;
}

  onButtonClick(action: string): void {
    console.log('Button clicked:  ${action}');
}

}