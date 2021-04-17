import { Component, OnInit } from '@angular/core';
import { SortItem } from 'src/classes/SortItem';
import { Utils } from 'src/classes/Utils';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.scss']
})
export class InsertionSortComponent {

  constructor() { }

  public itemsInput: string = '1,2,3,4,5,6,7,8,9,0';
  public sortItems: SortItem[] = [];
  public items: number[] = [];
  public currentMin: any;
  public minIndex: number = -1;

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
      this.sortItems[i].select();
      await Utils.delay(300);
      this.minIndex = i;
      for(let j = i + 1; j< this.sortItems.length; j++){
        this.sortItems[j].select();
        
        if(this.sortItems[j].getValue < this.sortItems[this.minIndex].getValue){
          this.minIndex = j;
        }

        await Utils.delay(300);
        
        this.sortItems[j].deselect();
      }
      let temp = this.sortItems[i];
      this.sortItems[i] = this.sortItems[this.minIndex];
      this.sortItems[this.minIndex] = temp;

      this.sortItems[i].deselect();
      this.sortItems[this.minIndex].deselect();
    }
    this.minIndex = -1;
  }
}
