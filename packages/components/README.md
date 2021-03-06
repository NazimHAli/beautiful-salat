# Beautiful Salat

## Still in BETA

[![Build](https://github.com/NazimHAli/beautiful-salat/actions/workflows/build.yml/badge.svg)](https://github.com/NazimHAli/beautiful-salat/actions/workflows/build.yml)
[![Unit Tests](https://github.com/NazimHAli/beautiful-salat/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/NazimHAli/beautiful-salat/actions/workflows/unit-tests.yml)
[![Lint](https://github.com/NazimHAli/beautiful-salat/actions/workflows/lint.yml/badge.svg)](https://github.com/NazimHAli/beautiful-salat/actions/workflows/lint.yml)

Salam Alaykoum :D

Prayer times library providing integration support for multiple environments: vanilla JS, WordPress plugin, components. Released the [WordPress plugin](https://wordpress.org/plugins/beautiful-salat/) 5+ years ago and upgrading it to use latest Gutenberg blocks.

## Features

- Multiple prayer times calculation methods
- Daily, weekly, monthly, yearly tables
- Calculations client-side
  - Original version parsed data from Islamic Finder XML endpoints
- Theme support
- Integrations
  - Vanilla JS
  - WordPress plugin
  - Components
- Typescript with interfaces
- Unit tested

![image](https://user-images.githubusercontent.com/26750288/145725761-cd675172-2e51-4b29-8619-b7ecff02b268.png)

## Dev Quick start

```
yarn install
yarn dev
```

## Contributions welcome!

Open a PR or issue

## Credits

[praytimes.org](http://praytimes.org/)

- Detailed [mathemathical calculation explanations](http://praytimes.org/calculation)
- Code references + [multiple libraries](http://praytimes.org/code/)
- Their latest Javascript version is 10+ years old
- I rewrote it with Typescript, added testing, fixed detected type bugs
