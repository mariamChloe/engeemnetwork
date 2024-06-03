export class Viewer {
  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _organization: string;
  private _role: string;
  private _phone: string|null;
  private _email: string;
  private _createdDate: string|null;
  private _lastModified: string|null;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get organization(): string {
    return this._organization;
  }

  set organization(value: string) {
    this._organization = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get phone(): string | null {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get createdDate(): string|null {
    return this._createdDate;
  }

  set createdDate(value: string) {
    this._createdDate = value;
  }

  get lastModified(): string|null {
    return this._lastModified;
  }

  set lastModified(value: string) {
    this._lastModified = value;
  }

  constructor( viewer : IViewer ) {
    this._id = viewer.id;
    this._firstname = viewer.firstname;
    this._lastname = viewer.lastname;
    this._organization = viewer.organization;
    this._role = viewer.role;
    this._phone = viewer.phone;
    this._email = viewer.email;
    this._createdDate = viewer.createdDate;
    this._lastModified = viewer.lastModified;
  }
}
export interface IViewer {
  id: number;
  firstname: string;
  lastname: string;
  organization: string;
  role: string;
  phone: string|null;
  email: string;
  createdDate: string|null;
  lastModified: string|null;
}
