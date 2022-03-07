import React, { Suspense } from "react";
import { Provider } from "react-redux";
import "./styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/common/ScrollToTop";
import Loading from "./components/common/Loading";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import Routing from "./routes/index";

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <ScrollToTop>
          <Routing />
        </ScrollToTop>
      </Suspense>
      <ToastContainer />
    </Provider>
  );
};

export default App;
