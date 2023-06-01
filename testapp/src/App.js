import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Displayuser from "./Components/Displayuser";
import AddNewUser from "./Components/AddNewUser";
import { createContext, useContext, useState } from "react";

const UserDataContext = createContext(null);
function App() {
  const [rowData, setRowData] = useState([
    { id: 1, name: "George Bluth", email: "george.bluth@reqres.in" },
    { id: 2, name: "Janet Weaver", email: "janet.weaver@reqres.in" },
    { id: 3, name: "George", email: "georgedkagh.bluth@reqres.in" },
  ]);

  return (
    <div className="App">
      <UserDataContext.Provider value={rowData}>
        <div>
          <Routes>
            <Route
              path="*"
              element={
                <Displayuser rowData={rowData} setRowData={setRowData} />
              }
            ></Route>
            <Route
              path="addnewuser"
              element={<AddNewUser rowData={rowData} setRowData={setRowData} />}
            ></Route>
          </Routes>
        </div>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
// export { UserDataContext };
