import React, { Fragment, useState } from "react";

export const HitStatus = ({ onHitChannger, onSelectCategories }) => {
  const hitStatus = [
    "Please choose an option",
    "LocationDiscount",
    "DOB Discount",
    "IndividualDiscount",
    "Confirm",
  ];

  const hitCategories = ["Pep", "sanction"];

  const selectHandler = (e) => {
    onHitChannger(e.target.value);
  };

  const SelectCategories = (e) => {
    onSelectCategories(e.target.value);
  };

  return (
    <Fragment>
      <div className="w-full flex justify-center mt-20 space-x-6 items-center">
        <label className="font-semibold text-1xl">
          Select The Hit Categories
        </label>
        <select
          onChange={SelectCategories}
          className="border-2 border-gray-900"
        >
          {hitCategories.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>
        <label className="font-semibold text-1xl">Select The Hit Status</label>
        <select onChange={selectHandler} className="border-2 border-gray-900">
          {hitStatus.map((item, id) => (
            <option value={item} key={id}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  );
};
