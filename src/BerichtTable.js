// ReusableTable.jsx

import React from "react";

const ReusableTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered align-middle text-center">
        <thead>
          <tr>
            <th>Einheit</th>
            <th>Grundzuschuss</th>
            <th>iSFP-Zuschuss</th>
            <th>Klimageschwindigkeitsbonus</th>
            <th>Einkommensbonus</th>
            <th>max. Fördersatz</th>
            <th>berechneter Fördersatz</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.woEi}</td>
              <td>{item.Grundzuschuss * 100}%</td>
              <td>{item.isfpZuschuss * 100}%</td>
              <td>{item.klimageschwindigkeitsBonusZuschuss * 100}%</td>
              <td>{item.einkommensbonusZuschuss * 100}%</td>
              <td>{item.maxFördersatz * 100}%</td>
              <td>{item.calculatedSatz * 100}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
