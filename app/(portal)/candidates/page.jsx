import Candidate from "@/components/Rows/Candidate";
import Table from "@/components/Table";
import React from "react";

const Candidates = () => {
  const headers = ["Candidate", "Job", "CV", "Status", "Cost", "Edit"];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((item, index) => (
    <Candidate item={item} key={index} />
  ));

  return (
    <div className="">
      <Table headers={headers} rows={rows} pages={100} />
    </div>
  );
};

export default Candidates;
