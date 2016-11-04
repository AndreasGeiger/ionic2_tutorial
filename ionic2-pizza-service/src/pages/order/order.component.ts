import {Component, ViewChild} from '@angular/core';
import {Content} from 'ionic-angular';

@Component({
  template: `<ion-content>
    <button ion-button (click)="scrollToBottom()">To Bottom</button>
    <div style="height: 2000px;">
      <b>Hello</b> World!
    </div>
    <b>on bottom</b>
    <button ion-button (click)="scrollToTop()">To Top</button>
  </ion-content>`
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
