import React, { Fragment, useState } from "react";
import { HitStatus } from "./HitStatus";
import { LocationForm } from "./LocationForm";
import { CommentViewer } from "./CommentViewer";

export const MultipleInputs = () => {
  const [hitStatus, setHitStatus] = useState();
  const [hitCategories, setHitCategories] = useState("Pep");
  const [hitInput, setHitInput] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const onHitStatusChanger = (data) => {
    setHitStatus(data);
    setIsShow(false);
  };

  const onHitDataHandler = (data) => {
    setHitInput(data);
    setIsShow(true);
  };

  const onHitCategories = (data) => {
    setHitCategories(data);
  };

  return (
    <Fragment>
      <HitStatus
        onHitChannger={onHitStatusChanger}
        onSelectCategories={onHitCategories}
      />
      {/* location Hit inputs  */}
      {hitStatus && (
        <LocationForm
          hitState={hitStatus}
          onHitData={onHitDataHandler}
          hitCategory={hitCategories}
        />
      )}
      {/* {hitStatus === "LocationDiscount" ? (
        <LocationForm hitState={hitStatus} onHitData={onHitDataHandler} />
      ) : null}
      {hitStatus === "DOB Discount" ? (
        <LocationForm hitState={hitStatus} onHitData={onHitDataHandler} />
      ) : null}
      {hitStatus === "IndividualDiscount" ? (
        <LocationForm hitState={hitStatus} onHitData={onHitDataHandler} />
      ) : null}
      {hitStatus === "Confirm" ? (
        <LocationForm hitState={hitStatus} onHitData={onHitDataHandler} />
      ) : null} */}
      <CommentViewer
        hitState={hitStatus}
        inputData={hitInput}
        isShows={isShow}
        hitCategory={hitCategories}
      />
    </Fragment>
  );
};
