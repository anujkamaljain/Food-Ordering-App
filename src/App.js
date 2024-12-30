import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// not adding key(not advisable) >>>>>>>>> index as key >>>>>>>>> unique id as key (best practice)

const AppLayout = () => {
  return (
    <div className="App">
      {/*Header*/}
      <Header />
      {/*Body*/}
      <Body />
      {/*Footer*/}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
