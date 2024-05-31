// app/providers.tsx
"use client";

import { ChakraProvider, Box } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Box height={"auto"}>{children}</Box>
    </ChakraProvider>
  );
}
