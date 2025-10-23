// ReusableTable.jsx

import React from "react";

const ReusableTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover table-bordered align-middle text-center">
        <thead className="">
          <tr>
            <th>Maßnahme</th>
            <th>Zuschuss</th>
            <th>iSFP Bonus</th>
            <th>Effizienz Bonus</th>
            <th>Klimageschwindigkeits Bonus</th>
            <th>Einkommensbonus</th>
            <th>Max Satz</th>
            <th>Max Zuschuss ohne iSFP</th>
            <th>Max Zuschuss mit iSFP</th>
            <th>Max Zuschuss 1.WE</th>
            <th>Max Zuschuss 2.- 6.WE</th>
            <th>Max Zuschuss ab 7.WE</th>
            <th>Max Zuschuss 1.- 2.WE</th>
            <th>Max Zuschuss ab 3.WE</th>
            <th>Zuschuss Pro Qm </th>
            <th>Zuschuss bis 150qm </th>
            <th>Zuschuss Pro Qm bis 400</th>
            <th>Zuschuss Pro Qm bis 1000</th>
            <th>Zuschuss Pro Qm ab 1000</th>
            <th>Zuschuss Gewerbe maximal</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.maßnahme}</td>
              <td>{item.zuschuss * 100}%</td>
              <td>{item.isfpBonus * 100}%</td>
              <td>{item.effizienzBonus * 100}%</td>
              <td>{item.klimageschwindigkeitsBonus * 100}%</td>
              <td>{item.einkommensbonus * 100}%</td>
              <td>{item.maxSatz * 100}%</td>
              <td>{item.maxZuschuss}€</td>
              <td>{item.maxZuschussIsfp}€</td>
              <td>{item.zuschussWE1}€</td>
              <td>{item.zuschussWE2_6}€</td>
              <td>{item.zuschussWE7}€</td>
              <td>{item.maxZuschussWE1_2}€</td>
              <td>{item.maxZuschussWE3}€</td>
              <td>{item.zuschussProQm}€</td>
              <td>{item.zuschussProQm150}€</td>
              <td>{item.zuschussProQm400}€</td>
              <td>{item.zuschussProQm1000}€</td>
              <td>{item.zuschussProQm1001}€</td>
              <td>{item.zuschussProQmMax}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
