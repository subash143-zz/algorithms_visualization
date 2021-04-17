import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input("menu_name") menu_name: String = '';
  @Input("url") url: String = '';
  constructor() { }
  
  ngOnInit(): void {
  }

}
