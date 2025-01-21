import { IUser } from "models/user/user";

export interface ILocation {
  x: string;
  y: string;
}
export interface ITicket {
  id?: string;
  description: string;
  name: string;
  price: string;
  tourOperator: string;
  location: ILocation;
  hotel: string;
}

export interface IVipTicket extends ITicket {
  vipNumber: number;
  vipStatus: string;
}

export type TicketType = ITicket | IVipTicket;

export interface IPostTicketData {
  ticket: TicketType;
  user: IUser;
}
