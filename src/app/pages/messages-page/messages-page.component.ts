import { Component } from '@angular/core';
import { MessageFormComponent } from '../../message-form/message-form.component';
import { MessageListComponent } from '../../message-list/message-list.component';

@Component({
  selector: 'sms-messages-page',
  imports: [MessageFormComponent, MessageListComponent],
  templateUrl: './messages-page.component.html',
  styleUrl: './messages-page.component.css'
})
export class MessagesPageComponent {

}
