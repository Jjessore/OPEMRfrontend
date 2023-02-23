import React, { Component } from 'react'
import MaritalStatusService from '../Services/MaritalStatusService';

class MaritalStatus extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         mstatus:0,
         status: []
      }

    }

    handle_maritalstatus_Change = (event) => {
        this.setState({
          mstatus: event.target.value
        })
        this.props.getmStatus(event.target.value)
    }

    componentDidMount(){
        MaritalStatusService.getMaritalStatus().then((response) => {
            this.setState({status:response.data})
        })
    }
    
  render() {
    return (
        <div>
            <select name="marStatus" value = {this.state.mstatus} onChange={this.handle_maritalstatus_Change}><option value={0}>--</option>
                {
                    this.state.status.map(
                      mstatus => 
                      <option key={mstatus.id} value={mstatus.id}>{mstatus.statusName} </option>
                      )
                }
            </select>
        </div>
    )
  }
}

export default MaritalStatus