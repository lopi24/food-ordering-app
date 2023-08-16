// import Meals from "../components/Meals/Meals";
import React, { Suspense } from "react";
import MenuContent from "../components/Menu/MenuContent";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Meals = React.lazy(() => import("../components/Meals/Meals"));

const Menu = (props) => {
  return (
    <>
      <MenuContent />
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Meals />
      </Suspense>
    </>
  );
};

export default Menu;
