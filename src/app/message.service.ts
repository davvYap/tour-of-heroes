import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  addMessage(message: string) {
    this.messages.push(message);
  }

  clearMessages(): void {
    this.messages = [];
  }

  constructor() {}
}
