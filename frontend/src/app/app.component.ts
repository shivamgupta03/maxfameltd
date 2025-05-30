import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [MenubarModule, RouterOutlet, RouterModule, ToastModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']    
})
export class AppComponent {
  title: string = 'feedback-app-frontend';
  menuBarItems: MenuItem[] = [
    {
      label: 'Dashboard',
      url: "/dashboard",
    },
    {
      label: 'Feedback',
      url: "/feedback"
    }
  ];
}
