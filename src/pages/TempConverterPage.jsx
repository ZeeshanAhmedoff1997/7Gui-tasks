import React from "react";
import TaskLayout from "../components/Layout/TaskLayout";
import MainLayout from "../components/Layout/MainLayout";
import TempConverter from "../components/TempConverter";

const TempConverterPage = () => {
  const styles = { width: "18rem" };

  return (
    <MainLayout>
      <TaskLayout headerText="Tempreture Converter" styles={styles}>
        <TempConverter />
      </TaskLayout>
    </MainLayout>
  );
};

export default TempConverterPage;
