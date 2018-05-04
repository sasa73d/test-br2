import {Geo} from './geo.model.';

export class Address {
  public street: string;
  public suite: string;
  public city: string;
  public zipcode: string;
  public geo: Geo;

  /*constructor(street: string,
              suite: string,
              city: string,
              zipcode: string,
              geo: Geo) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
  }*/
}
