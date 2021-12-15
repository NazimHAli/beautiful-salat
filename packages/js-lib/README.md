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

### Example: Times for Today

```javascript
import { PrayerTimes } from "beautiful-salat";

const ptModule = new PrayerTimes("ISNA");
const prayerTimes = ptModule.getPrayerTimes((date = new Date()), (coords = [43, -80]), (timezone = -5));
```

### Example: Times for Week

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
