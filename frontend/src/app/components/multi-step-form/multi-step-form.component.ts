import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';

// Feedback Service
import { FeedbackService, Feedback } from '../../feedback.service';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss'],
  providers: [MessageService],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    ButtonModule,
    StepsModule,
    ToastModule
  ]
})
export class MultiStepFormComponent {
  activeIndex: number = 0;

  name: string = '';
  email: string = '';
  feedback: string = '';
  rating: number = 0;

  showStep1Errors: boolean = false;
  showStep2Errors: boolean = false;

  formSubmissionSteps: MenuItem[] = [
      { label: 'Personal Info' },
      { label: 'Feedback' },
      { label: 'Summary' },
    ]

  constructor(
    private feedbackService: FeedbackService,
    private messageService: MessageService,
    private location: Location
  ) {}

  nextStep(): void {
    if (this.activeIndex === 0) {
      this.showStep1Errors = true;
      if (!this.name.trim() || !this.isValidEmail(this.email)) return;
    }

    if (this.activeIndex === 1) {
      this.showStep2Errors = true;
      if (!this.feedback.trim() || this.rating < 1) return;
    }

    this.activeIndex++;
  }

  prevStep(): void {
    if (this.activeIndex > 0) this.activeIndex--;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  submitForm(): void {
    const feedbackData: Feedback = {
      name: this.name,
      email: this.email,
      feedback: this.feedback,
      rating: this.rating
    };

    this.feedbackService.submitFeedback(feedbackData).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Thank you for your feedback!'
        });
        this.resetForm();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Submission failed. Please try again.'
        });
      }
    });
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.feedback = '';
    this.rating = 0;
    this.activeIndex = 0;
    this.showStep1Errors = false;
    this.showStep2Errors = false;
  }
}
