export interface IMessage {
  message: string;
  phone: string;
  sentAt?: number | Date;
  status?: string;
}
