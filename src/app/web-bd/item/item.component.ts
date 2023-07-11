import { Component, OnInit, Input } from '@angular/core';
import { itemDto } from '../dtos/itemDto';

@Component({
  selector: 'item-comp',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() item: itemDto;

  ngOnInit() {
    
  }
  public openExp() {
    if (this.item.isOpen ) {
      this.item.isOpenAni = false;
      this.item.isOpen = false;
    }
    else {
      this.item.isOpen = true;
      this.item.isOpenAni = true;
    }

  }
}
