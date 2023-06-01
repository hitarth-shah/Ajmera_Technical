import { AgGridReact } from "ag-grid-react";
import React, { useContext, useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
// import { UserDataContext } from "../App";

const Displayuser = ({ rowData, setRowData }) => {
  const navigate = useNavigate();
  const gridRef = useRef();
  const columnDefs = [
    { headerName: "Id", field: "id", sortable: true, unSortIcon: true },
    { headerName: "Name", field: "name", sortable: true, unSortIcon: true },
    { headerName: "Email", field: "email", sortable: true, unSortIcon: true },
  ];

  const handleAddClick = () => {
    navigate("/addnewuser");
  };

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);
  console.log(rowData);
  return (
    <div>
      <div>User Details</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
          marginLeft: "120px",
          marginBottom: "-20px",
        }}
      >
        <input
          type="text"
          id="filter-text-box"
          placeholder="Search"
          onInput={onFilterTextBoxChanged}
        />
        <button
          onClick={() => handleAddClick()}
          style={{ marginLeft: "-160px" }}
        >
          Add New User
        </button>
      </div>
      <div
        class="ag-theme-alpine"
        style={{
          height: 400,
          width: 600,
          marginLeft: "500px",
          marginTop: "20px",
        }}
      >
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          rowData={rowData}
          cacheQuickFilter={true}
          pagination={true}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Displayuser;
