import { nanoid } from "nanoid/non-secure";

export default class City {
  constructor({
    country,
    city,
    name,
    state,
    postcode,
    countryCode,
    image,
    lat,
    lon,
  }) {
    this.id = nanoid();
    this.country = country;
    this.name = name;
    this.lat = lat;
    this.lon = lon;
    this.city = city;
    this.state = state;
    this.postcode = postcode;
    this.countryCode = countryCode;
    this.image = image;
  }
}
