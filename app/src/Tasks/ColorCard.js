import * as React from "react";

const ColorCard = ({ colorCardData }) => {
  return (
    <>
      {colorCardData.map((c, index) => (
        <span className="API_wrapper-wrapper">
          <div className="API_card_wrapper">
            <div className="API_card">
              <div
                id="API_card_dimension"
                style={{
                  backgroundColor: `rgb(${c[0]}, ${c[1]}, ${c[2]}`,
                }}
                key={`${index}`}
              ></div>
              <div className="card-text">
                rgb({c[0]}, {c[1]}, {c[2]})
              </div>
            </div>
          </div>
        </span>
      ))}
    </>
  );
};

export default ColorCard;