# JS Library

## Still in BETA

Standalone JavaScript library that calculates prayer times client side based on latitude, longitude, and timezones.

## Install

```bash
yarn add beautiful-salat
```

or

```bash
npm install beautiful-salat
```

## Usage

### Example: Today

```javascript
import { PrayerTimes } from "beautiful-salat";

const ptModule = new PrayerTimes("ISNA");
const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);
```

### Example: Week

```javascript
import { PrayerTimes } from "beautiful-salat";

const ptModule = new PrayerTimes("ISNA");
const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);
```

### Example: Month

```javascript
import { PrayerTimes } from "beautiful-salat";

const ptModule = new PrayerTimes("ISNA");
const prayerTimes = ptModule.getPrayerTimes(new Date(), [43, -80], -5);
```
