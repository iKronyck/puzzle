<h1 align="center" > 👋 ⚛️ React-Native-Puzzle ⚛️ 👋</h1>
<h2 align="center" > 
  <sup>
    <b> Development with RN CLI 0.64.1 and ❤️ </b> 
  </sup>  
</h2> 


# iOS Screenshots [See a Video](https://drive.google.com/file/d/1sHbtCB0eCka1Hv9mX6u6Bb2mycdIXMBT/view?usp=sharing)

---

| Home | Add Task 
|:-:|:-:|
| ![Simulator Screen Shot - iPhone 12 - 2021-07-11 at 15 00 43](https://user-images.githubusercontent.com/12678606/125209939-c9c48b80-e259-11eb-8182-8b313d40018d.png) | ![Simulator Screen Shot - iPhone 12 - 2021-07-11 at 15 09 51](https://user-images.githubusercontent.com/12678606/125209997-19a35280-e25a-11eb-9bc5-8cb2443f8949.png)

# Android Screenshots [See a Video](https://drive.google.com/file/d/1AUnaAgmRGsaUxS9Rby6YioXjJza0Vc4C/view?usp=sharing)

---

| Home | Add Task 
|:-:|:-:|
| ![Screenshot_1626046160](https://user-images.githubusercontent.com/12678606/125212934-c63aff80-e26d-11eb-89d8-a0528e281e88.png) | ![Screenshot_1626046213](https://user-images.githubusercontent.com/12678606/125212984-f5ea0780-e26d-11eb-924d-522b11547e9b.png)



## Pre-requisties
  - Make sure you have [Node 12 LTS](https://nodejs.org/en/download/) or greater installed.
  - You can see the steps for install RN CLI in their [documentation](https://reactnative.dev/docs/environment-setup).

# Instalation

- Download or clone this repo by using the link below `git@github.com:iKronyck/puzzle.git`.
- Go to project root folder `cd puzzle`.
- Run `npm install` or `yarn install`.

## Running

- If you are testing on iOS, run `npx pod-install`.
- Run the app in a Android device or emulador with the command below `npx react-native run-android`.
- Run the app in a iOS device or emulador with the command below`npx react-native run-ios`.

## Project structure

```
root
├── src
│   ├── components
│   │   ├── ExampleComponent
│   │   │   ├── Example.styles.tsx
│   │   │   ├── Example.tsx
│   │   │   ├── Example.types.ts
│   │   │   └── index.ts
│   │   ├── index.ts     
│   ├── config
│   ├── constants
│   ├── context
│   ├── hooks
│   ├── router
│   ├── screens
│   │   ├── ExampleScreen
│   │   │   ├── ExampleScreen.styles.tsx
│   │   │   ├── ExampleScreen.tsx
│   │   │   ├── ExampleScreen.types.ts
│   │   │   └── index.ts    
│   │   ├── index.ts     
│   ├── utils
│   ├── index.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── ios
│   ├── AppProject
│   ├── AppProject-tvOS
│   ├── AppProject-tvOSTests
│   ├── AppProject.xcodeproj
│   └── AppProjectTests
├── index.js
├── tsconfig.json
└── package.json

```

## React-Native Stack

- React-Native 0.64.1
- React Navigation
- TypeScript
- Async-storage
- Context API
- Reanimated 2
- Redash
- RN Vector Icons
- Styled Components
