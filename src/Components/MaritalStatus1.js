import React from "react";
import MaritalStatusService from "../Services/MaritalStatusService";

function MaritalStatus1() 
  return (
        <div>
            <select value = {this.state.mstatus} onChange={this.handle_maritalstatus_Change}><option value="0">--</option>
                {
                    this.state.status.map(
                      mstatus => 
                      <option key={mstatus.id} value={mstatus.id}>{mstatus.statusName} </option>
                      )
                }
            </select>
        </div>
  )


export default MaritalStatus1