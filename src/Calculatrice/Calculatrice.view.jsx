import React from "react";

import styles from "./calculatrice.module.scss";

const CalculatriceView = ({ saveNumber, number, operate }) => {
  const myArrayOfNumber = [
    { key: "0", value: 0 },
    { key: "1", value: 1 },
    { key: "2", value: 2 },
    { key: "3", value: 3 },
    { key: "4", value: 4 },
    { key: "5", value: 5 },
    { key: "6", value: 6 },
    { key: "7", value: 7 },
    { key: "8", value: 8 },
    { key: "9", value: 9 },
  ];

  const myArrayOfOperator = [
    { key: "divide", value: "/" },
    { key: "add", value: "+" },
    { key: "substraction", value: "-" },
    { key: "clear", value: "CE" },
    { key: "egal", value: "=" },
  ];

  return (
    <>
      <div className={styles.calculator}>
        <div>
          {myArrayOfNumber.map((number) => {
            return (
              <button
                className={styles.number}
                key={number.key}
                onClick={saveNumber}
                value={number.key}
              >
                {number.value}
              </button>
            );
          })}
          <div className={styles.operators}>
            {myArrayOfOperator.map((operator) => {
              return (
                <button
                  className={styles.operator}
                  key={operator.key}
                  value={operator.key}
                  onClick={operate}
                >
                  {operator.value}
                </button>
              );
            })}
          </div>
          <div className={styles.result}>{number}</div>
        </div>
      </div>
    </>
  );
};

export default CalculatriceView;
