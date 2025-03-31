import { Route, Routes } from "react-router-dom";
import LayoutDefaul from "./containers/pages/DefaultStyle/Admin/LayoutDefault";
import { authRoutes, privateRoutes, publicRoutes } from "./utils/pathRoutes";
import LayoutCustomer from "./containers/pages/DefaultStyle/Customer/LayoutCustomer";
// import authReducer from "./store/reducers/authReducer";
import { ToastContainer } from "react-toastify";
import { createContext } from "react";

export const Context = createContext();

function App() {
  // const Context = createContext();

  

  return (

    <Context.Provider value={import.meta.env.VITE_SERVER}>
      <div className="W-full min-h-full overflow-hidden">
        {/* {import.meta.env} */}
        <Routes>
          <Route path="admin" element={<LayoutDefaul />}>
            {privateRoutes.map((item) => {
              const Page = item.component;
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<Page />}
                ></Route>
              );
            })}
          </Route>
          <Route path="" element={<LayoutCustomer />}>
            {publicRoutes.map((item) => {
              const Page = item.component;
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<Page />}
                ></Route>
              );
            })}
          </Route>
          <Route path="auth">
            {authRoutes.map((item) => {
              const Page = item.component;
              return (
                <Route
                  key={item.path}
                  path={item.path}
                  element={<Page />}
                ></Route>
              );
            })}
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      </Context.Provider>
  );
}

export default App;
