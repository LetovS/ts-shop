import { ILocation, ITicket, IVipTicket } from "models/ticket/ticket";

export class Location implements ILocation {
  private _x: string;
  private _y: string;

  constructor(x: string, y: string) {
    this._x = x;
    this._y = y;
  }

  public get x(): string {
    return this._x;
  }

  public set x(value: string) {
    this._x = value;
  }

  public get y(): string {
    return this._y;
  }

  public set y(value: string) {
    this._y = value;
  }
}

export class Ticket implements ITicket {
  private _id?: string;
  private _description: string;
  private _name: string;
  private _price: string;
  private _tourOperator: string;
  private _location: Location;
  private _hotel: string;

  constructor(
    id: string,
    description: string,
    name: string,
    price: string,
    tourOperator: string,
    hotel: string,
    locationX: string,
    locationY: string
  ) {
    this._id = id;
    this._description = description;
    this._name = name;
    this._price = price;
    this._tourOperator = tourOperator;
    this._hotel = hotel;
    this._location = new Location(locationX, locationY);
  }

  public get id(): string | null {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get price(): string {
    return this._price;
  }

  public set price(value: string) {
    this._price = value;
  }

  public get tourOperator(): string {
    return this._tourOperator;
  }

  public set tourOperator(value: string) {
    this._tourOperator = value;
  }

  public get hotel(): string {
    return this._hotel;
  }

  public set hotel(value: string) {
    this._hotel = value;
  }

  public get location(): Location {
    return this._location;
  }

  public set location(location: ILocation) {
    this._location = new Location(location.x, location.y);
  }
}

export class VipTicket extends Ticket implements IVipTicket {
  private _vipNumber: number;
  private _vipStatus: string;

  constructor(ticket: Ticket, vipNumber: number, vipStatus: string) {
    super(
      ticket.id,
      ticket.description,
      ticket.hotel,
      ticket.location.x,
      ticket.location.y,
      ticket.name,
      ticket.price,
      ticket.tourOperator
    );
    this._vipNumber = vipNumber;
    this._vipStatus = vipStatus;
  }

  public get vipNumber(): number {
    return this._vipNumber;
  }

  public set vipNumber(value: number) {
    this._vipNumber = value;
  }

  public get vipStatus(): string {
    return this._vipStatus;
  }

  public set vipStatus(value: string) {
    this._vipStatus = value;
  }
}
