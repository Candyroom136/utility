const ct = require('countries-and-timezones');

const getConuntryTimeFromDate = function ({ dateObj, countryCode }) {
  if (!(dateObj instanceof Date)) {
    return dateObj;
  }

  const newDateObj = new Date(dateObj.toISOString());
  const country = ct.getCountry(countryCode);
  let timezoneHours = 0;
  if (country) {
    const timezones = country.timezones;
    const totalTimezonHours = timezones.reduce((acc, cur) => {
      const timezoneInfo = ct.getTimezone(cur);
      return acc + timezoneInfo.utcOffset;
    }, 0);
    timezoneHours = Math.round(totalTimezonHours / timezones.length / 60);
  }

  newDateObj.setHours(newDateObj.getHours() + timezoneHours);
  return newDateObj.toISOString();
};

console.log(getConuntryTimeFromDate({ dateObj: new Date('2023-12-05 12:00:00 +09:00'), countryCode: 'US'}))