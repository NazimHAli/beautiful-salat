# JS Library

## Still in BETA

Standalone JavaScript library that calculates prayer times client side based on latitude, longitude, and timezones.

![image](https://user-images.githubusercontent.com/26750288/146490354-4e961fa9-71ad-46f6-a4fe-b34aea3c4f22.png)

## Install

```bash
yarn add beautiful-salat
```

or

```bash
npm install beautiful-salat
```

## Usage

### Example: Times for Today

```javascript
import { PrayerTimes } from "beautiful-salat";

const ptModule = new PrayerTimes("ISNA");
const prayerTimes = ptModule.getPrayerTimes((date = new Date()), (coords = [43, -80]), (timezone = -5));
```

### Example: Times for Month

```javascript
import { PrayerTimes } from "beautiful-salat";

const ptModule = new PrayerTimes("ISNA");
const prayerTimes = ptModule.getPrayerTimes((date = new Date()), (coords = [43, -80]), (timezone = -5));
```
