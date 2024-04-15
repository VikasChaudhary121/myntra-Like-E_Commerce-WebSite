import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchItems from "./components/fetchitems";
import LoadingSpinner from "./components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.FetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.fetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
