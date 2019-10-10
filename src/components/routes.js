import React from "react";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MasterLayout from "./pages/MasterLayout";
import ComparePage from "./pages/ComparePage";

const routes = {
  "/": () => <MasterLayout component={HomePage} showText={true} />,
  "/cars/:id": ({ id }) => <MasterLayout component={DetailPage} id={id} />,
  "/compare": () => <MasterLayout component={ComparePage} />
};

export default routes;
