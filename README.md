# Invest Task

This project is an Expo-based React Native application.

## Project Structure

The current folder structure is as follows:

```
.
├── assets/                 # App assets (images, icons, etc.)
├── src/
│   ├── app/                # Main application code (Expo Router)
│   │   └── index.tsx
│   ├── components/         # Reusable UI components
│   ├── data/               # Data sources / mock data
│   └── types/              # TypeScript type definitions
├── app.json                # Expo configuration
├── index.ts                # App entry point
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository (if applicable) or navigate to the project directory.
2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the App

To start the development server:

```bash
npm start
# or
npx expo start
```

You can then run the app on:
- **Android**: `npm run android` or press `a` in the terminal.
- **iOS**: `npm run ios` or press `i` in the terminal.
- **Web**: `npm run web` or press `w` in the terminal.

## Technologies

- **Expo**: Framework for React Native.
- **React Native**: Mobile application framework.
- **Expo Router**: File-based routing.
- **TypeScript**: Static typing.
