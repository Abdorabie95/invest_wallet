import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1a1a2e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="wallet"
        options={{
          title: "Wallet",
        }}
      />
      <Stack.Screen
        name="opportunity-details"
        options={{
          title: "Opportunity Details",
        }}
      />
    </Stack>
  );
}
