import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the shape of feedback data
export interface Feedback {
  name: string;
  email: string;
  feedback: string; 
  rating: number;
  _id?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:3000/api/feedback';

  constructor(private http: HttpClient) {}

  submitFeedback(data: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.apiUrl, data);
  }

  getAllFeedback(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.apiUrl);
  }

  deleteFeedback(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }

  updateFeedback(id: string, data: Feedback): Observable<Feedback> {
    return this.http.put<Feedback>(`${this.apiUrl}/${id}`, data);
  }
}
