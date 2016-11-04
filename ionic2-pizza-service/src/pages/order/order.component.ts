import {Component, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';

@Component({
  templateUrl: './order.component.html'
})

export class OrderComponent{
  @ViewChild(Content) content : Content;

  scrollToTop(){
    this.content.scrollToTop();
  }
  scrollToBottom(){
    this.content.scrollToBottom();
  }
}
