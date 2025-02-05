import { Component, Input } from '@angular/core';
import { IMessage } from '../message.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'sms-message-detail',
  imports: [CommonModule, DatePipe],
  templateUrl: './message-detail.component.html',
  styleUrl: './message-detail.component.css'
})
export class MessageDetailComponent {
  @Input() message!: IMessage;
}
