type typeTimeNames = {
    imsak: string;
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    sunset: string;
    maghrib: string;
    isha: string;
    midnight: string;
};

type typeMethods = {
    MWL: { name: string; params: { fajr: number; isha: number } };
    ISNA: { name: string; params: { fajr: number; isha: number } };
    Egypt: { name: string; params: { fajr: number; isha: number } };
    Makkah: { name: string; params: { fajr: number; isha: string } }; // fajr was 19 degrees before 1430 hijri
    Karachi: { name: string; params: { fajr: number; isha: number } };
    Tehran: {
        name: string;
        params: {
            fajr: number;
            isha: number;
            maghrib: number;
            midnight: string;
        };
    }; // isha is not explicitly specified in this method
    Jafari: {
        name: string;
        params: {
            fajr: number;
            isha: number;
            maghrib: number;
            midnight: string;
        };
    };
};

type typeDefaultParams = { maghrib: string; midnight: string };

type typeSetting = {
    imsak: string;
    dhuhr: string;
    asr: string;
    highLats: string;
    fajr: string;
    maghrib: string;
    isha: string;
    midnight: any;
};

export type { typeTimeNames, typeMethods, typeSetting, typeDefaultParams };
