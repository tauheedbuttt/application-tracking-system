"use client";

import React, { useState } from "react";
import Candidate from "@/components/Rows/Candidate";
import Table from "@/components/Table";
import Filters from "@/components/Candidate/Filters";

const Candidates = () => {
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);
  const handleShow = () => setShow(true);

  const headers = ["Candidate", "Job", "CV", "Status", "Cost", "Edit"];
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((item, index) => (
    <Candidate item={item} key={index} />
  ));

  return (
    <div className="">
      <Table
        headers={headers}
        rows={rows}
        pages={100}
        showFilter={handleShow}
      />
      <Filters show={show} handleHide={handleHide} />
    </div>
  );
};

export default Candidates;
