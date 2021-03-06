# Beautiful Salat
## Still in BETA

[![Build](https://github.com/NazimHAli/beautiful-salat/actions/workflows/build.yml/badge.svg)](https://github.com/NazimHAli/beautiful-salat/actions/workflows/build.yml)
[![Unit Tests](https://github.com/NazimHAli/beautiful-salat/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/NazimHAli/beautiful-salat/actions/workflows/unit-tests.yml)
[![Lint](https://github.com/NazimHAli/beautiful-salat/actions/workflows/lint.yml/badge.svg)](https://github.com/NazimHAli/beautiful-salat/actions/workflows/lint.yml)

Salam Alaykoum :D

Prayer times library providing integration support for multiple environments: vanilla JS, WordPress plugin, components. Released the [WordPress plugin](https://wordpress.org/plugins/beautiful-salat/) 5+ years ago and upgrading it to use latest Gutenberg blocks.

## Features

-   Multiple prayer times calculation methods
-   Daily, weekly, monthly, yearly tables
-   Calculations client-side
    -   Original version parsed data from Islamic Finder XML endpoints
-   Theme support
-   Integrations
    -   Vanilla JS
    -   WordPress plugin
    -   Components
-   Typescript with interfaces
-   Unit tested

![image](https://user-images.githubusercontent.com/26750288/146490354-4e961fa9-71ad-46f6-a4fe-b34aea3c4f22.png)


## Quick Start
```
yarn add beautiful-salat
```

#### Basic Usage
##### Todays Prayer Times

```javascript
import { PrayerTimes } from "beautiful-salat";

const ptModule = new PrayerTimes("ISNA");
const prayerTimes = ptModule.getPrayerTimes(date=new Date(), coords=[43, -80], timezone=-5);
```

## Dev Quick Start

```
yarn install
yarn dev
```


## Contributions welcome!

Open a PR or issue

## Credits

[praytimes.org](http://praytimes.org/)

-   Detailed [mathemathical calculation explanations](http://praytimes.org/calculation)
-   Code references + [multiple libraries](http://praytimes.org/code/)
-   Their latest Javascript version is 10+ years old
-   I rewrote it with Typescript, added testing, fixed detected type bugs
