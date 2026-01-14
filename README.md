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
│   │   └── opportunity-details.tsx
│   │   └── wallet.tsx
│   │   └── hooks/          # Custom hooks
│   │       └── useInvestment.ts
│   ├── components/         # Reusable UI components
│   │   └── BalanceCard.tsx
│   │   └── AppButton.tsx
│   │   └── AppCard.tsx
│   ├── data/               # Data sources / mock data
│   └── types/              # TypeScript type definitions
│   └── store/              # Zustand store
│        └── user.ts
│        └── opportunitiesStore.ts
│        └── transactionsStore.ts
│   └── utils/              # Utility functions
│        └── format.ts
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

## State Management

The application uses **Zustand** for state management, The state is divided into three separate stores:

1.  **`user.ts`**: Manages the user's available and invested balance. It provides actions to `invest` (deduct from available, add to invested) and `deposit` (add to available).
2.  **`transactions.ts`**: Manages the list of transactions (Deposits and Investments). It allows adding new transactions which are displayed in the Wallet screen.
3.  **`opportunitiesStore.ts`**: Holds the list of available investment opportunities.


## packages used

### zustand
### react-native-safe-area-context
### @react-native-async-storage/async-storage
