import { useState } from "react";
import { useEffect } from "react";
import "./Department.css";
import DepartmentService from "../../../services/DepartmentService";
import LineBottom from "../../utils/LineBottom";
import PageLoader from "../../utils/PageLoader";
import ErrorBox from "../../utils/ErrorBox";

const Department = () => {
  const [departmentData, setDepartmentData] = useState([]);
  const [departmentDataLoader, setDepartmentDataLoader] = useState(false);
  const [error, setError] = useState(null);

  const departmentLoadData = () => {
    DepartmentService.loadDepartmentCategories()
      .then((response) => {
        setDepartmentData(response);
        setDepartmentDataLoader(true);
      })
      .catch((error) => {
        setDepartmentDataLoader(true);
        setError("Failed to load departments");
      });
  };

  useEffect(() => {
    departmentLoadData();
  }, []);

  const renderDepartmentData = () => {
    const departments = departmentData.map((depitem, index) => {
      return (
        <div key={index} className="Department_departmentlist mb-5">
          <p className="Department-departmentheading mb-2 ">{depitem.name}</p>

          <div className="row">
            {depitem.departments.map((department, indexDep) => (
              <div key={indexDep} className="col-12 col-md-4 mt-1">
                <button className="Department-departmentlinkitem">
                  {department.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    });

    return departments;
  };
  return (
    <div className="container mb-0">
      <LineBottom className="mt-4" span="Academic" text="Departments" />
      {departmentDataLoader ? (
        error ? (
          <ErrorBox text={error} />
        ) : (
          renderDepartmentData()
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default Department;
