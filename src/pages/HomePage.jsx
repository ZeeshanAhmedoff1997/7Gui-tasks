import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import { Alert } from "react-bootstrap";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <MainLayout col={10} margin={5} order={3}>
      <Alert variant="info">
        <div className="d-flex justify-content-center align-items-center">
          There are the List of Tasks
        </div>
      </Alert>
      <Home />
    </MainLayout>
  );
};

export default HomePage;
