export class SortItem{
    private value: number = 0;
    private selected: boolean = false;

    get getValue(){return this.value;}
    get isSelected(){return this.selected;}

    /**
     *
     */
    constructor(value: number) {
        this.value = value;
    }

    select(){
        this.selected = true;
    }

    deselect(){
        this.selected = false;
    }
}