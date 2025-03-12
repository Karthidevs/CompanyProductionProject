import React, { useEffect, useState } from "react";

export const CommentViewer = ({
  inputData,
  isShows,
  hitState,
  hitCategory,
}) => {
  const [text, setText] = useState([]);
  const [tick, setTick] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(comments);
    setTick(true);
  };

  useEffect(() => {
    if (inputData) setText(inputData);
  }, [inputData]);

  let comments;
  switch (hitState) {
    case "LocationDiscount":
      comments = ` Match : UID:(${text.uid}) The BOI customer name is ${text.cusName} resident in ${text.cusLocation} . Whereas the screening hit is against the name ${text.hitName} resident is ${text.hitlocation}. Hence, Hit is tentatively discounted based on resident mismatch.`;

      break;
    case "DOB Discount":
      comments = ` Match : UID:(${text.uid}) The BOI customer name is ${text.cusName} DOB is ${text.customerDOB} . Whereas the screening hit is against the name ${text.hitName} DOB is ${text.hitsDob}. Hence, Hit is tentatively discounted based on DOB mismatch.`;
      break;
    case "IndividualDiscount":
      comments = `Match : UID:(${text.uid}) The BOI Client name is ${text.cusName} Limited(Entity) , Where the screening hit is against the name ${text.hitName} (individual), Hence Hit is tentatively discounted based on Entity vs individual name mismatch`;
      break;

    case "Confirm":
      comments = `Match : UID:(${text.uid}) The BOI customer name is ${
        text.cusName
      } resident in ${
        text.cusLocation
      } and the screening hit is against the name ${text.hitName} resident in ${
        text.cusLocation
      }${
        text.hitOccupation ? ". who is" + text.hitOccupation : ","
      }The BOI Customer cannot be discounted as per BOI policy and the HIT is ${
        hitCategory !== "Pep" ? "sanction" : "PEP"
      }, Hence tentatively confirmed `;
      break;
    default:
      break;
  }
  return (
    <section className="flex justify-center mt-20">
      {isShows && (
        <div className=" shadow-2xl  max-w-2xl border-gray-800 bg-slate-100  p-4">
          <p>{comments}</p>

          <button
            className="text-gray-700 hover:cursor-pointer hover:font-bold flex items-center gap-1"
            onClick={copyHandler}
          >
            Copy
            {tick === false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard-check"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>
            )}
          </button>
        </div>
      )}
    </section>
  );
};
