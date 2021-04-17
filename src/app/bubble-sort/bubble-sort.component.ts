import { Component, OnInit } from '@angular/core';
import { SortItem } from 'src/classes/SortItem';
import { Utils } from 'src/classes/Utils';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss']
})
export class BubbleSortComponent {

  constructor() { }

  public itemsInput: string = '-1,20,5,14,-500,3,45,32,66,6';
  public sortItems: SortItem[] = [];
  public items: number[] = [];

  onSubmit(e: Event){
    this.items = [];
    this.sortItems = [];

    this.itemsInput.split(",").forEach((x)=>{
      x = x.trim();
      let y: number = parseInt(x);
      if(!isNaN(y)){
        this.sortItems.push(new SortItem(y));
        this.items.push(y);
      }
    })

    this.itemsInput = this.items.join(",");
    this.startSorting();
  }

  async startSorting(){
    for(let i = 0; i< this.sortItems.length; i++){
      let swapped: boolean = false;
      for(let j = 0; j< this.sortItems.length-1; j++){
        this.sortItems[j].select();
        this.sortItems[j+1].select();
        
        if(this.sortItems[j].getValue > this.sortItems[j+1].getValue){
          swapped = true;
          let temp = this.sortItems[j+1];
          this.sortItems[j+1] = this.sortItems[j];
          this.sortItems[j] = temp;
        }
        await Utils.delay(300);
        
        this.sortItems[j+1].deselect();
        this.sortItems[j].deselect();
      }
      if(swapped == false){
        return;
      }
    }
  }
}
