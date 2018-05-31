import {Address} from './address.model';
import {Company} from './company.model';
import {Authoritie} from './authoritie.model';

export class User {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: Address;
  public phone: string;
  public website: string;
  public company: Company;
  public password: string;
  public authrities: Authoritie[] = new Array<Authoritie>();

  /*constructor(name: string,
              username: string,
              email: string,
              address: Address,
              phone: string,
              website: string,
              company: Company,
              password: string,
              public authrities: Authoritie[]) {
    this.username = username;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;
  }
*/
}
