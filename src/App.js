// import axios from "axios";
// import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Router from "./routes/Router";
export default function App() {
  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}
