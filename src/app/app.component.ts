import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sortingvisualization';
  isMobileAgent: boolean = false;
  menuItems = [new MenuItem("Selection Sort", "/"), new MenuItem("Insertion Sort", "/insertion-sort"), new MenuItem("Bubble Sort", "/bubble-sort")]

  
  constructor(){
    const userAgent = window.navigator.userAgent;
    this.isMobileAgent =  userAgent.includes("Mobile");
  }
              
}

class MenuItem{
  public title: string = '';
  public url: string='';

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}
