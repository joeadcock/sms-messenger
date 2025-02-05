import { Component } from '@angular/core';
import { MessageDetailComponent } from "../message-detail/message-detail.component";
import { IMessage } from '../message.model';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'sms-message-list',
  imports: [CommonModule, MessageDetailComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: IMessage[] = []

  constructor(private messageSvc: MessageService) {}

  ngOnInit() {
    this.messageSvc.messages$.subscribe({
      next: messages => { this.messages = messages }
    })
  }
}
