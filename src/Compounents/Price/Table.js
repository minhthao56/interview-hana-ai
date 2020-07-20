import React from "react";
import "./Table.scss";

import { dataTable } from "../constant/dataHardClient";

export default function Table() {
  return (
    <div className="table">
      <table style={{ width: 1100, margin: "auto" }}>
        <tr>
          <th style={{ width: "40%", textAlign: "start" }}>TÍNH NĂNG</th>
          <th className="color1">TIÊU CHUẨN </th>
          <th className="color2">NÂNG CAO</th>
          <th className="color3">CAO CẤP </th>
          <th className="color4">ĐẶC BIỆT</th>
        </tr>
        {dataTable.map((data, i) => {
          return (
            <tr className="border-table">
              <td style={{ textAlign: "start" }} className="border-row">
                <b className={data.head === true ? null : "no-header"}>
                  {data.feature}
                </b>
              </td>
              <td className="check-table border-table">
                {data.standar && (
                  <i className="fa fa-check-circle-o color1"></i>
                )}
              </td>
              <td className="check-table border-table">
                {data.advant && <i className="fa fa-check-circle-o color2"></i>}
              </td>
              <td className="check-table border-table">
                {data.prime && <i className="fa fa-check-circle-o color3"></i>}
              </td>
              <td className="check-table border-table">
                {data.ep && <i className="fa fa-check-circle-o color4"></i>}
              </td>
            </tr>
          );
        })}
      </table>
      <div className="action-table">
        <button className="color11">MUA NGAY</button>
        <button className="color21">MUA NGAY</button>
        <button className="color31">MUA NGAY</button>
        <button className="color41">MUA NGAY</button>
      </div>
    </div>
  );
}
