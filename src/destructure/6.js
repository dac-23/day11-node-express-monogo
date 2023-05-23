let res = {
  coord: {
    lon: 72.8479,
    lat: 19.0144,
  },
  weather: [
    {
      id: 721,
      main: "Haze",
      description: "haze",
      icon: "50d",
    },
  ],
  base: "stations",
  main: {
    temp: 29.99,
    feels_like: 36.99,
    temp_min: 29.99,
    temp_max: 30.94,
    pressure: 1013,
    humidity: 79,
  },
  visibility: 3000,
  wind: {
    speed: 2.57,
    deg: 250,
  },
  clouds: {
    all: 40,
  },
  dt: 1684814330,
  sys: {
    type: 1,
    id: 9052,
    country: "IN",
    sunrise: 1684801926,
    sunset: 1684849130,
  },
  timezone: 19800,
  id: 1275339,
  name: "Mumbai",
  cod: 200,
};

let { main, coord } = res;
let { temp_max, temp_min } = main;
console.log(temp_max);
