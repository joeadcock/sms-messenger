import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMessage } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'sms-message-form',
  imports: [FormsModule],
  templateUrl: './message-form.component.html',
  styleUrl: './message-form.component.css'
})
export class MessageFormComponent {
  message: IMessage = this.initialMessage()

  constructor(private messageSvc: MessageService) {}

  submit() {
    this.messageSvc.send(this.message)
    this.clear()
  }

  clear() {
    this.message = this.initialMessage();
  }

  initialMessage() {
    return { phone: '', message: '' }
  }
}
