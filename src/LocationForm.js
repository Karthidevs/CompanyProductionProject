import React, { Fragment, useState } from "react";

export const LocationForm = ({ onHitData, hitState }) => {
  const [cusName, setCusName] = useState("");
  const [cusLocation, setcusLocation] = useState("");
  const [hitName, sethitName] = useState("");
  const [hitlocation, sethitlocation] = useState("");
  const [hitOccupation, sethitOccupation] = useState("");
  const [uid, setUID] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    onHitData({
      cusName,
      cusLocation,
      hitName,
      hitlocation,
      uid,
      hitOccupation,
    });
    setCusName("");
    setcusLocation("");
    sethitName("");
    sethitlocation("");
    sethitOccupation("");
    setUID("");
  };

  const onChangeHandler = (st, e) => {
    if (st === "name") {
      setCusName(e.target.value);
    } else if (st === "location") {
      setcusLocation(e.target.value);
    } else if (st === "hitPersonName") {
      sethitName(e.target.value);
    } else if (st === "HitPersonLocation") {
      sethitlocation(e.target.value);
    } else if (st === "UID") {
      setUID(e.target.value);
    } else if (st === "occupation") {
      sethitOccupation(e.target.value);
    }
  };

  return (
    <Fragment>
      <form
        onSubmit={SubmitHandler}
        className="flex mt-11 w-full justify-around items-center flex-wrap gap-4"
      >
        <div className="flex box-border ">
          <label className="pr-1" htmlFor="UID">
            UID
          </label>
          <input
            id="UID"
            className="border-2 border-gray-700 outline-none rounded-md text-md placeholder:text-sm pl-1 mr-2 "
            required
            onChange={(e) => onChangeHandler("UID", e)}
            type="number"
            value={uid}
          />
        </div>
        <div className="flex box-border ">
          <label className="pr-1" htmlFor="name">
            CustomerName
          </label>
          <input
            id="name"
            placeholder="Name"
            className="border-2 border-gray-700 outline-none rounded-md text-md placeholder:text-sm pl-1"
            required
            type="text"
            onChange={(e) => onChangeHandler("name", e)}
            value={cusName}
          />
        </div>
        {hitState === "IndividualDiscount" ? (
          ""
        ) : (
          <div className="flex box-border">
            <label className="pr-1" htmlFor="cuslocationanddate">
              Customerlocation
            </label>
            <input
              id="cuslocationanddate"
              placeholder="Location"
              className="border-2 border-gray-700 outline-none rounded-md text-md placeholder:text-sm pl-1"
              required
              type={hitState === "DOB Discount" ? "date" : "text"}
              onChange={(e) => onChangeHandler("location", e)}
              value={cusLocation}
            />
          </div>
        )}
        <div className="flex box-border ">
          <label className="pr-1" htmlFor="hitname">
            HitPersonName
          </label>
          <input
            id="hitname"
            placeholder="Name"
            className="border-2 border-gray-700 outline-none rounded-md text-md placeholder:text-sm pl-1"
            required
            type="text"
            value={hitName}
            onChange={(e) => onChangeHandler("hitPersonName", e)}
          />
        </div>
        {hitState === "IndividualDiscount" ? (
          ""
        ) : (
          <div className="flex box-border ">
            <label className="pr-1" htmlFor="hitlocationdate">
              HitPersonLocation
            </label>
            <input
              id="hitlocationdate"
              placeholder="Location"
              className="border-2 border-gray-700 outline-none rounded-md text-md placeholder:text-sm pl-1"
              required
              value={hitlocation}
              type={hitState === "DOB Discount" ? "date" : "text"}
              onChange={(e) => onChangeHandler("HitPersonLocation", e)}
            />
          </div>
        )}
        {hitState === "Confirm" ? (
          <div className="  flex items-center mt-4 border-gray-700">
            <label htmlFor="occupation">Occupation</label>
            <textarea
              value={hitOccupation}
              onChange={(e) => onChangeHandler("occupation", e)}
              id="occupation"
              name=""
              rows="5"
              cols="33"
              className="border-2 hover:outline-none ml-2"
            ></textarea>
          </div>
        ) : null}
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold p-3  rounded-md mt-1 "
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};
