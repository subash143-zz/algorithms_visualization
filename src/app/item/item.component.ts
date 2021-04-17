import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sort-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('value') value: number = 0;
  @Input('selected') selected: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
