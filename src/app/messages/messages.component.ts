import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  test: string = '';
  test1 : string = '';
  test3 : string = '';
  constructor(public messageService: MessageService){

  }

}
