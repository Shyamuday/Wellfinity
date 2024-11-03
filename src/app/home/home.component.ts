import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { TestimonialDisplayComponent } from "../testimonial-display/testimonial-display.component";
import { DoctorSectionComponent } from "../doctor-section/doctor-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutUsComponent, TestimonialDisplayComponent, DoctorSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  bookConsultation() {

  }

  contactMe() {

  }
}
