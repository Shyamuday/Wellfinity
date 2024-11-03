import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Testimonial {
  name: string;
  message: string;
}

@Component({
  selector: 'app-testimonial-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-display.component.html',
  styleUrl: './testimonial-display.component.scss'
})
export class TestimonialDisplayComponent {
  testimonials: Testimonial[] = [];

  constructor() { }

  ngOnInit(): void {
    // Dummy testimonials
    this.testimonials = [
      { name: 'Dilip', message: 'Homeopathy helped me recover from my chronic allergies. Highly recommend!' },
      { name: 'Shyam', message: 'After months of suffering, I found relief through homeopathic treatment. Thank you!' },
      { name: 'Deepak', message: 'The holistic approach of homeopathy worked wonders for my family.' },
      { name: 'Udit', message: 'Professional and effective treatment. I appreciate the personalized care.' }
    ];
  }
}
