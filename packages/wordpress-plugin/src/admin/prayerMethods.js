let rawPrayerMethods = [
  {
    id: 3,
    name: "Muslim World League",
    params: {
      Fajr: 18,
      Isha: 17,
    },
    location: {
      latitude: 51.5194682,
      longitude: -0.1360365,
    },
  },
  {
    id: 2,
    name: "Islamic Society of North America (ISNA)",
    params: {
      Fajr: 15,
      Isha: 15,
    },
    location: {
      latitude: 39.70421229999999,
      longitude: -86.39943869999999,
    },
  },
  {
    id: 5,
    name: "Egyptian General Authority of Survey",
    params: {
      Fajr: 19.5,
      Isha: 17.5,
    },
    location: {
      latitude: 30.0444196,
      longitude: 31.2357116,
    },
  },
  {
    id: 4,
    name: "Umm Al-Qura University, Makkah",
    params: {
      Fajr: 18.5,
      Isha: "90 min",
    },
    location: {
      latitude: 21.3890824,
      longitude: 39.8579118,
    },
  },
  {
    id: 1,
    name: "University of Islamic Sciences, Karachi",
    params: {
      Fajr: 18,
      Isha: 18,
    },
    location: {
      latitude: 24.8614622,
      longitude: 67.0099388,
    },
  },
  {
    id: 7,
    name: "Institute of Geophysics, University of Tehran",
    params: {
      Fajr: 17.7,
      Isha: 14,
      Maghrib: 4.5,
      Midnight: "JAFARI",
    },
    location: {
      latitude: 35.6891975,
      longitude: 51.3889736,
    },
  },
  {
    id: 0,
    name: "Shia Ithna-Ashari, Leva Institute, Qum",
    params: {
      Fajr: 16,
      Isha: 14,
      Maghrib: 4,
      Midnight: "JAFARI",
    },
    location: {
      latitude: 34.6415764,
      longitude: 50.8746035,
    },
  },
  {
    id: 8,
    name: "Gulf Region",
    params: {
      Fajr: 19.5,
      Isha: "90 min",
    },
    location: {
      latitude: 25.2048493,
      longitude: 55.2707828,
    },
  },
  {
    id: 9,
    name: "Kuwait",
    params: {
      Fajr: 18,
      Isha: 17.5,
    },
    location: {
      latitude: 29.375859,
      longitude: 47.9774052,
    },
  },
  {
    id: 10,
    name: "Qatar",
    params: {
      Fajr: 18,
      Isha: "90 min",
    },
    location: {
      latitude: 25.2854473,
      longitude: 51.5310398,
    },
  },
  {
    id: 11,
    name: "Majlis Ugama Islam Singapura, Singapore",
    params: {
      Fajr: 20,
      Isha: 18,
    },
    location: {
      latitude: 1.352083,
      longitude: 103.819836,
    },
  },
  {
    id: 12,
    name: "Union Organization Islamic de France",
    params: {
      Fajr: 12,
      Isha: 12,
    },
    location: {
      latitude: 48.856614,
      longitude: 2.3522219,
    },
  },
  {
    id: 13,
    name: "Diyanet Isleri Baskanligi, Turkey",
    params: {
      Fajr: 18,
      Isha: 17,
    },
    location: {
      latitude: 39.9333635,
      longitude: 32.8597419,
    },
  },
  {
    id: 14,
    name: "Spiritual Administration of Muslims of Russia",
    params: {
      Fajr: 16,
      Isha: 15,
    },
    location: {
      latitude: 54.73479099999999,
      longitude: 55.9578555,
    },
  },
  {
    id: 15,
    name: "Moonsighting Committee Worldwide (Moonsighting.com)",
    params: {
      shafaq: "general",
    },
  },
];

let prayerMethods = rawPrayerMethods.map((method) => {
  if (method.name) {
    return { value: method.id, label: method.name };
  }
});

prayerMethods = prayerMethods.filter((m) => m?.value);

export { prayerMethods };
