import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/Header/MainHeader";

// import Story from "./pages/Story";
import Menu from "./pages/Menu";
import ModalProvider from "./store/modal/ModalProvider";
import CartProvider from "./store/cart/CartProvider";
import React, { Suspense } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Home = React.lazy(() => import("./pages/Home"));
const Story = React.lazy(() => import("./pages/Story"));
const Reservation = React.lazy(() => import("./pages/Reservation"));

function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />

            <Route
              path="/home/*"
              element={
                <Suspense
                  fallback={
                    <div className="centered">
                      <LoadingSpinner />
                    </div>
                  }
                >
                  <Home />
                </Suspense>
              }
            />

            <Route
              path="/ourStory"
              element={
                <Suspense
                  fallback={
                    <div className="centered">
                      <LoadingSpinner />
                    </div>
                  }
                >
                  <Story />
                </Suspense>
              }
            />
            <Route path="/menu" element={<Menu />} />
            <Route
              path="/reservation"
              element={
                <Suspense
                  fallback={
                    <div className="centered">
                      <LoadingSpinner />
                    </div>
                  }
                >
                  <Reservation />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </CartProvider>
    </ModalProvider>
  );
}

export default App;
