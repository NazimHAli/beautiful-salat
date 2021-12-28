function dateTo12hourFormat(dateStr) {
  return new Date(dateStr).toLocaleTimeString().toUpperCase();
}

async function getSalatTimes(args) {
  const API = "https://api.aladhan.com/v1/timingsByCity";
  const API_EXAMPLE = `${API}?city=${args.city}&country=${args.country}&iso8601=true`;

  try {
    const rawResponse = await fetch(API_EXAMPLE);
    const responseJson = await rawResponse.json();
    const response = responseJson.data;

    for (const salat in response?.timings) {
      response.timings[salat] = dateTo12hourFormat(response.timings[salat]);
    }

    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export { getSalatTimes };
