function formatTimeToAMPM(timeString) {
  let timeStr = timeString;
  // Get the first 2 characters
  const hourInt = +timeStr.substr(0, 2);

  // Account for 12 & 24 hour format
  let timeStrHour = hourInt % 12 || 12;

  // Prefix zero if hour 1-9
  if (timeStrHour < 10) {
    timeStrHour = `0${timeStrHour}`;
  }

  let timeStrSuffix = hourInt < 12 ? " AM" : " PM";

  return timeStrHour + timeStr.substr(2, 3) + timeStrSuffix;
}

async function getSalatTimes(args) {
  const API = "https://api.aladhan.com/v1/timingsByCity";
  const API_EXAMPLE = `${API}?city=${args.city}&country=${args.country}`;

  try {
    const rawResponse = await fetch(API_EXAMPLE);
    const responseJson = await rawResponse.json();
    const response = responseJson.data;

    for (const salat in response?.timings) {
      response.timings[salat] = formatTimeToAMPM(response.timings[salat]);
    }

    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export { getSalatTimes };
