import React from "react";

import styles from "./calculatrice.module.scss";

const CalculatriceView = ({
  saveNumber,
  number,
  operate,
  myArrayOfOperator,
  myArrayOfNumber,
  expression,
}) => {
  console.log(expression);
  return (
    <>
      <div className={styles.calculator}>
        <div>
          {myArrayOfNumber.map((number) => {
            return (
              <button
                className={styles.number}
                key={number}
                onClick={saveNumber}
                value={number}
              >
                {number}
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

          <div className={styles.result}>
            {!expression ? number : expression}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatriceView;
