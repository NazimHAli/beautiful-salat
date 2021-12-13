export const supportedMethods = {
  MWL: {
    name: "Muslim World League",
    params: { fajr: 18, isha: 17 },
  },
  ISNA: {
    name: "Islamic Society of North America (ISNA)",
    params: { fajr: 15, isha: 15 },
  },
  Egypt: {
    name: "Egyptian General Authority of Survey",
    params: { fajr: 19.5, isha: 17.5 },
  },
  Makkah: {
    name: "Umm Al-Qura University, Makkah",
    params: { fajr: 18.5, isha: "90 min" },
  },
  Karachi: {
    name: "University of Islamic Sciences, Karachi",
    params: { fajr: 18, isha: 18 },
  },
  Tehran: {
    name: "Institute of Geophysics, University of Tehran",
    params: {
      fajr: 17.7,
      isha: 14,
      maghrib: 4.5,
      midnight: "Jafari",
    },
  },
  Jafari: {
    name: "Shia Ithna-Ashari, Leva Institute, Qum",
    params: { fajr: 16, isha: 14, maghrib: 4, midnight: "Jafari" },
  },
};
