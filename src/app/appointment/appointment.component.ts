import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {

  appointmentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Adjust pattern as needed
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form Submitted!', this.appointmentForm.value);
      // Here, you can add the logic to send the form data to your backend
      // For example, using a service to send data
    } else {
      console.log('Form is invalid');
    }
  }
}
