import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentTab: string = 'inicio';


  constructor(private router: Router) {}

  updateTab(tabName: string) {
    this.currentTab = tabName;
  }

  goToInicio() {
    this.router.navigate(['/inicio']); 
    this.currentTab = 'inicio';

  }


  
}
