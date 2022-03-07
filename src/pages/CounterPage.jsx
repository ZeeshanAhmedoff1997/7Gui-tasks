import React from "react";
import TaskLayout from "../components/Layout/TaskLayout";
import MainLayout from "../components/Layout/MainLayout";
import Counter from "../components/Counter";

const CounterPage = () => {
  const styles = { width: "18rem" };

  return (
    <MainLayout>
      <TaskLayout headerText="Counter" styles={styles}>
        <Counter />
      </TaskLayout>
    </MainLayout>
  );
};

export default CounterPage;
