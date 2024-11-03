import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
interface Testimonial {
  name: string;
  message: string;
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {

  testimonialForm: FormGroup;
  testimonials: Testimonial[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.testimonialForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load existing testimonials if any (mock data for demonstration)
    this.testimonials = [
      { name: 'John Doe', message: 'Great experience! Homeopathy really helped me.' },
      { name: 'Jane Smith', message: 'I felt a significant improvement in my health.' }
    ];
  }

  onSubmit(): void {
    if (this.testimonialForm.valid) {
      this.testimonials.push(this.testimonialForm.value);
      this.testimonialForm.reset();
    }
  }
}
