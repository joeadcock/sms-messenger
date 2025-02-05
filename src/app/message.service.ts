import { Injectable } from '@angular/core';
import { IMessage } from './message.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const convertDate = <Date>(date : any) => (
  date === '' ? undefined : new Date(date)
)

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesSubject = new BehaviorSubject<IMessage[]>([])
  public messages$ = this.messagesSubject.asObservable()

  constructor(private http: HttpClient) {
    this.getMessages()
  }

  getMessages() {
    this.http.get<IMessage[]>('/api/messages.json').subscribe({
      next: (messages) => {
        this.messagesSubject.next(messages.map((m) => {
          const { message, phone } = m;

          return { message, phone, sentAt: convertDate(m["sentAt"]) }
        }))
      }
    })
  }

  send(message: IMessage) {
    return this.http.post('/api/messages.json', {
      message: message
    }).subscribe({
      next: () => this.getMessages()
    })
  }
}
