import City from "../../models/city";

/**
 * @description - Formats Data from api.
 * @param {Object} data - Data from api.
 * @returns {Object} - Weather Data Object.
 */
const formatLocationInfo = ({ lat, lon, address, namedetails }, { hits }) => {
  const image = hits[0].largeImageURL;
  const { name } = namedetails;
  const { city, country, state, postcode, country_code } = address;
  const dataObj = {
    lat,
    lon,
    country,
    city,
    name,
    state,
    postcode,
    countryCode: country_code,
    image,
  };

  return new City(dataObj);
};

export default formatLocationInfo;
