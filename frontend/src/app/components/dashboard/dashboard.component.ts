import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FeedbackService, Feedback } from '../../feedback.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    ConfirmDialogModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  feedbackList: Feedback[] = [];
  feedback: Feedback | null = null;
  dialogVisible: boolean = false;
  isEditMode: boolean = false;

  private feedbackService = inject(FeedbackService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  ngOnInit(): void {
    this.loadFeedback();
  }

  loadFeedback(): void {
    this.feedbackService.getAllFeedback().subscribe({
      next: (data: Feedback[]) => {
        this.feedbackList = data;
      },
      error: (err: any) => {
        console.error('[LOAD] Error fetching feedback:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load feedback.' });
      }
    });
  }

  deleteFeedback(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this feedback?',
      header: 'Confirm Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.feedbackService.deleteFeedback(id).subscribe({
          next: () => {
            this.feedbackList = this.feedbackList.filter(entry => entry._id !== id);
            this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Feedback deleted successfully.' });
          },
          error: (err: any) => {
            console.error('[DELETE] Failed:', err);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Delete failed. Please try again.' });
          }
        });
      }
    });
  }

  viewFeedback(entry: Feedback): void {
    this.feedback = { ...entry };
    this.dialogVisible = true;
    this.isEditMode = false;
  }

  editFeedback(entry: Feedback): void {
    this.feedback = { ...entry };
    this.dialogVisible = true;
    this.isEditMode = true;
  }

  saveChanges(): void {
    if (!this.feedback || !this.feedback._id) return;

    this.feedbackService.updateFeedback(this.feedback._id, this.feedback).subscribe({
      next: () => {
        this.dialogVisible = false;
        this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Feedback updated successfully.' });
        this.loadFeedback();
      },
      error: (err) => {
        console.error('Error updating feedback:', err);
        this.messageService.add({ severity: 'error', summary: 'Update Failed', detail: 'Could not update feedback.' });
      }
    });
  }

  closeDialog(): void {
    this.dialogVisible = false;
    this.feedback = null;
    this.isEditMode = false;
  }

  hasFeedback(): boolean {
    return this.feedbackList.length > 0;
  }
}
