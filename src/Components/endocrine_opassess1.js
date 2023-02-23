import React, { Component, useState } from 'react'
import MaritalStatus from './MaritalStatus'
import axios from 'axios'
//import MaritalStatus1 from './MaritalStatus1'

//var mnstrl_hist_cycles = '';

class endocrine_opassess extends Component {

    
    constructor(props) {
      
      super(props)     

      this.state = {

        uhid:'',
        encounterid:'',
        presenting_complaints: '',
        presenting_complaints_det: '',
        past_hist_medical: '',
        past_hist_surgical: '',
        rel_investigations: '',
        current_medications: '',        
        family_history:'',
        marital_status:0,
        no_of_child:'',
        last_child_birth:'',
        mnstrl_hist_cycles: '',      
        mnstrl_hist_cycles_rmrk:'',
        mnstrl_hist_amnrh: '',
        mnstrl_hist_amnrh_rmrk:'',  
        mnstrl_hist_mnps:  '',
        mnstrl_hist_mnps_rmrk:'',
        mnstrl_hist_dur:'',        
        smoking: '',
        smoking_rmrk: '',
        alcohol: '',
        alcohol_rmrk:'',
        clin_exam_pallor:'',
        clin_exam_oedema:'',
        clin_exam_thyroid: '',
        clin_exam_thyroid_rmrk:'',
        clin_exam_opthlmpthy: '',
        clin_exam_opthlmpthy_rmrk:'',
        clin_exam_crvcl_lymph_adnpthy: '',
        clin_exam_crvcl_lymph_adnpthy_rmrk:'',
        clin_exam_othr_findings:'',
        cvs: '',
        cvs_rmrk: '',
        rsprtrysystm: '',
        rsprtrysystm_rmrk:'',
        abd_liver: '',
        abd_spleen: '',
        abd_othr_fndngs: '',
        tnnrstg_brst: '',
        tnnrstg_pbchr: '',
        strch_pen_len: '',
        tstclr_vol_right: '',
        tstclr_vol_left: '',
        cns: '',
        cns_rmrk: '',
        vslflds: '',
        vslflds_rmrk: '',
        fundus: '',
        fundus_rmrk: '',
        extr_oclr_mvmnts: '',
        extr_oclr_mvmnts_rmrk: '',
        rflxs: '',
        rflxs_rmrk: '',
        monofil_testing: '',
        feet: '',
        feet_corns: '',
        feet_corns_rmrk: '',
        feet_callosities: '',
        feet_callosities_rmrk: '',
        feet_fissures: '',
        feet_fissures_rmrk: '',
        feet_ulcers: '',
        feet_ulcers_rmrk: '',
        feet_deformities: '',
        feet_deformities_rmrk: ''
      }
    }

    handle_uhid_Change = (event) => {
        this.setState({
            uhid: event.target.value
        })

    }

    handle_encounterid_Change = (event) => {
        this.setState({
            encounterid: event.target.value
        })

    }

    handle_presenting_complaints_Change = (event) => {
        this.setState({
            presenting_complaints: event.target.value
        })

    }

    handle_presenting_complaints_det_Change = (event) => {
      this.setState({
        presenting_complaints_det: event.target.value
      })

    }

    handle_past_hist_medical_Change = (event) => {
        this.setState({
            past_hist_medical: event.target.value
        })

    }

    handle_past_hist_surgical_Change = (event) => {
        this.setState({
            past_hist_surgical: event.target.value
        })
    }

    handle_rel_investigations_Change = (event) => {
        this.setState({
            rel_investigations: event.target.value
        })
    }

    handle_current_medications_Change = (event) => {
        this.setState({
            current_medications: event.target.value
        })
    }

    handle_family_history_Change = (event)  => {
        this.setState({
            family_history: event.target.value
        })
    }

    handle_no_of_child_Change = (event) => {
        this.setState({
            no_of_child: event.target.value
        })
    }

    handle_last_child_birth_Change = (event) => {
        this.setState({
            last_child_birth: event.target.value
        })
    }

    handle_mnstrl_hist_cycles_Change = (event) => {
        this.setState({
            mnstrl_hist_cycles: event.target.value
        })
    }

    handle_mnstrl_hist_cycles_rmrk_Change = (event) => {
        this.setState({
            mnstrl_hist_cycles_rmrk: event.target.value
        })

    }

    handle_mnstrl_hist_amnrh_Change = (event) => {
        this.setState({
            mnstrl_hist_amnrh: event.target.value
        })
    }

    handle_mnstrl_hist_amnrh_rmrk_Change = (event) => {
        this.setState({
            mnstrl_hist_amnrh_rmrk: event.target.value
        })

    }

    handle_mnstrl_hist_mnps_Change = (event) => {
        this.setState({
            mnstrl_hist_mnps: event.target.value
        })
    }

    handle_mnstrl_hist_mnps_rmrk_Change = (event) => {
        this.setState({
            mnstrl_hist_mnps_rmrk: event.target.value
        })
    }

    handle_mnstrl_hist_dur_Change = (event) => {
        this.setState({
            mnstrl_hist_dur: event.target.value
        })
    }


    handle_smoking_Change = (event) => {
        this.setState({
            smoking: event.target.value
        })
    }


    handle_smoking_rmrk_Change = (event) => {
        this.setState({
            smoking_rmrk: event.target.value
        })
    }

    handle_alcohol_Change = (event) => {
        this.setState({
            alcohol: event.target.value
        })
    }

    handle_alcohol_rmrk_Change = (event) => {
        this.setState({
            alcohol_rmrk: event.target.value
        })
    }
    
    handle_clin_exam_pallor_Change = (event) => {
        this.setState({
            clin_exam_pallor: event.target.value
        })
    }

    handle_clin_exam_oedema_Change = (event) => {
        this.setState({
            clin_exam_oedema: event.target.value
        })
    }


    handle_clin_exam_thyroid_Change = (event) => {
        this.setState({
            clin_exam_thyroid: event.target.value
        })
    }

    handle_clin_exam_thyroid_rmrk_Change = (event) => {
        this.setState({
            clin_exam_thyroid_rmrk: event.target.value
        })

    }

    handle_clin_exam_opthlmpthy_Change = (event) => {
        this.setState({
            clin_exam_opthlmpthy: event.target.value
        })
    }

    handle_clin_exam_opthlmpthy_rmrk_Change = (event) => {
        this.setState({
            clin_exam_opthlmpthy_rmrk: event.target.value
        })
    }
    
    handle_clin_exam_crvcl_lymph_adnpthy_Change = (event) => {
        this.setState({
            clin_exam_crvcl_lymph_adnpthy: event.target.value
        })
    }

    handle_clin_exam_crvcl_lymph_adnpthy_rmrk_Change = (event) => {
        this.setState({
            clin_exam_crvcl_lymph_adnpthy_rmrk: event.target.value
        })
    }

    handle_clin_exam_othr_findings_Change = (event) => {
        this.setState({
            clin_exam_othr_findings: event.target.value
        })
    }

    handle_cvs_Change = (event) => {
        this.setState({
            cvs: event.target.value
        })
    }

    handle_cvs_rmrk_Change=(event) => {
        this.setState({
            cvs_rmrk: event.target.value
        })
    }

    handle_rsprtrysystm_Change = (event) => {
        this.setState({
            rsprtrysystm: event.target.value
        })
    }

    handle_rsprtrysystm_rmrk_Change = (event) => {
        this.setState({
            rsprtrysystm_rmrk: event.target.value
        })
    }

    handle_liver_Change = (event) => {
        this.setState({
            abd_liver: event.target.value
        })
    }

    handle_spleen_Change = (event) => {
        this.setState({
            abd_spleen: event.target.value
        })
    }

    handle_abd_othr_fndngs_Change = (event) => {
        this.setState({
            abd_othr_fndngs: event.target.value
        })
    }

    handle_tnnrstg_brst_Change = (event) => {
        this.setState({
            tnnrstg_brst: event.target.value
        })
    }

    handle_tnnrstg_pbchr_Change = (event) => {
        this.setState({
            tnnrstg_pbchr: event.target.value
        })
    }

    handle_strch_pen_len_Change = (event) => {
        this.setState({
            strch_pen_len: event.target.value
            
        })
    }

    handle_tstclr_vol_right_Change = (event) => {
        this.setState({
            tstclr_vol_right: event.target.value
        })
    }

    handle_tstclr_vol_left_Change = (event) => {
        this.setState({
            tstclr_vol_left: event.target.value
        })
    }

    handle_cns_Change = (event) => {
        this.setState({
            cns: event.target.value
        })
    }

    handle_cns_rmrk_Change = (event) => {
        this.setState({
            cns_rmrk: event.target.value
        })
    }

    handle_vslflds_Change = (event) => {
        this.setState({
            vslflds: event.target.value
        })
    } 

    handle_vslflds_rmrk_Change = (event) => {
        this.setState({
            vslflds_rmrk: event.target.value
        })
    }

    handle_fundus_change = (event) => {
        this.setState({
            fundus: event.target.value
        })
    }

    handle_fundus_rmrk_Change = (event) => {
        this.setState({
            fundus_rmrk: event.target.value
        })

    }

    handle_extr_oclr_mvmnts_Change = (event) => {
        this.setState({
            extr_oclr_mvmnts: event.target.value
        })
    }

    handle_extr_oclr_mvmnts_rmrk_Change = (event) => {
        this.setState({
            extr_oclr_mvmnts_rmrk: event.target.value
        })            
    }

    handle_rflxs_Change = (event) => {
        this.setState({
            rflxs: event.target.value
        })
    }

    handle_rflxs_rmrk_Change = (event) => {
        this.setState({
            rflxs_rmrk: event.target.value
        })
    }   

    handle_monofil_testing_Change = (event) => {
        this.setState({
            monofil_testing: event.target.value
        })
    }

    handle_feet_Change = (event) => {
        
        if (event.target.value==="healthy"){
            this.setState({
                corns:'',
                corns_rmrk:'',
                cllsts:'',
                cllsts_rmrk:'',
                fssrs:'',
                fssrs_rmrk:'',
                ulcrs:'',
                ulcrs_rmrk:'',
                dfrmts:'',
                dfrmts_rmrk:''
            })
        }

        this.setState({
            feet: event.target.value
        })

    }



    handle_corns_Change = (event) =>{
        this.setState({
            corns: event.target.value
        })
    }

    handle_feet_corns_rmrk_Change = (event) =>{
        this.setState({
            feet_corns_rmrk: event.target.value
        })
            
    }

    handle_cllsts_Change = (event) =>{
        this.setState({
            cllsts: event.target.value
        })

    }

    handle_feet_callosities_rmrk_Change = (event) =>{
        this.setState({
            feet_callosities_rmrk: event.target.value
        })

    }

    handle_fssrs_Change = (event) =>{
        this.setState({
            fssrs: event.target.value
        })

    }

    handle_feet_fissures_rmrk_Change = (event) =>{
        this.setState({
            feet_fissures_rmrk: event.target.value
        })
    }

    handle_ulcrs_Change = (event) =>{
        this.setState({
            ulcrs: event.target.value
        })

    }

    handle_feet_ulcers_rmrk_Change = (event) =>{
        this.setState({
            feet_ulcers_rmrk: event.target.value
        })
    }

    handle_dfrmts_Change = (event) =>{
        this.setState({
            dfrmts: event.target.value
        })
    }

    handle_feet_deformities_rmrk_Change = (event) =>{
        this.setState({
            feet_deformities_rmrk: event.target.value
        })

    }

    displaydata = (data) =>{
        //console.log ("select component changed")
        console.log ("The mstatus returned from child component is : ",data)
    }

    getStatus = (data) => {
        console.log(" Received data : " + data)
    }


    submitHandler = (event) => {
        event.preventDefault()
        
        var res =
             {
                uhid: this.state.uhid,
                encounterid: this.state.encounterid,
                presenting_complaints: this.state.presenting_complaints,
                presenting_complaints_det: this.state.presenting_complaints_det,
                past_hist_medical: this.state.past_hist_medical,
                past_hist_surgical: this.state.past_hist_surgical,
                rel_investigations: this.state.rel_investigations,
                current_medications: this.state.current_medications,        
                family_history: this.state.family_history,
                marital_status: this.state.MaritalStatus.value,
                no_of_child: this.state.no_of_child,
                last_child_birth: this.state.last_child_birth,
                mnstrl_hist_cycles:this.state.mnstrl_hist_cycles,
                mnstrl_hist_cycles_rmrk: this.state.mnstrl_hist_cycles_rmrk,
                mnstrl_hist_amnrh:this.state.mnstrl_hist_amnrh,
                mnstrl_hist_amnrh_rmrk: this.state.mnstrl_hist_amnrh_rmrk,  
                mnstrl_hist_mnps_rmrk: this.state.mnstrl_hist_mnps_rmrk,
                mnstrl_hist_dur: this.state.mnstrl_hist_dur,        
                smoking_rmrk: this.state.smoking_rmrk,
                alcohol_rmrk: this.state.alcohol_rmrk,
                clin_exam_pallor: this.state.clin_exam_pallor,
                clin_exam_oedema: this.state.clin_exam_oedema,
                clin_exam_thyroid_rmrk: this.state.clin_exam_thyroid_rmrk,
                clin_exam_opthlmpthy_rmrk: this.state.clin_exam_opthlmpthy_rmrk,
                clin_exam_crvcl_lymph_adnpthy_rmrk: this.state.clin_exam_crvcl_lymph_adnpthy_rmrk,
                clin_exam_othr_findings: this.state.clin_exam_othr_findings,
                cvs_rmrk: this.state.cvs_rmrk,
                rsprtrysystm_rmrk: this.state.rsprtrysystm_rmrk,
                abd_liver: this.state.abd_liver,
                abd_spleen: this.state.abd_spleen,
                abd_othr_fndngs: this.state.abd_othr_fndngs,
                tnnrstg_brst: this.state.tnnrstg_brst,
                tnnrstg_pbchr: this.state.tnnrstg_pbchr,
                strch_pen_len: this.state.strch_pen_len,
                tstclr_vol_right: this.state.tstclr_vol_right,
                tstclr_vol_left: this.state.tstclr_vol_left,
                cns_rmrk: this.state.cns_rmrk,
                vslflds_rmrk: this.state.vslflds_rmrk,
                fundus_rmrk: this.state.fundus_rmrk,
                extr_oclr_mvmnts_rmrk: this.state.extr_oclr_mvmnts_rmrk,
                rflxs_rmrk: this.state.rflxs_rmrk,
                monofil_testing: this.state.monofil_testing,
                feet: this.state.feet,
                feet_corns_rmrk: this.state.feet_corns_rmrk,
                feet_callosities_rmrk: this.state.feet_callosities_rmrk,
                feet_fissures_rmrk: this.state.feet_fissures_rmrk,
                feet_ulcers_rmrk: this.state.feet_ulcers_rmrk,
                feet_deformities_rmrk: this.state.feet_deformities_rmrk
            }
        
        console.log("This is the console log")
        console.log(JSON.stringify(res))
        
        axios
            .post('http://localhost:8000/newassessment',res)
            .then(response => {
                console.log(response)
                alert("Assessment saved successfully")
            })
            .catch(error => {
                console.log(error)
            })
    }


  render() {
    return (
          <form onSubmit={this.submitHandler}>
            <table>
                  <tbody>
                      <tr>
                          <td></td>
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>UHID</label></td> 
                          <td><input className='txtbx' placeholder="UHID" type = "text" value={this.state.uhid} onChange={this.handle_uhid_Change} /></td>
                      </tr>
                      <tr>
                          <td><label className='title'>Encounter No</label></td> 
                          <td><input className='txtbx' placeholder="Encounter Number" type = "text" value={this.state.encounterid} onChange={this.handle_encounterid_Change} /></td>
                      </tr>
                      <tr>
                          <td><label className='title'>Presenting Complaints</label></td> 
                          <td><input className='txtbx' placeholder="prsnt_cmplnt" type = "text" value={this.state.presenting_complaints} onChange={this.handle_presenting_complaints_Change} /></td>
                      </tr>
                      <tr>
                          <td><label className='title'>Details of Presenting Complaints</label></td>
                          <td><textarea className='txtbx' placeholder="prsnt_cmplnt_det" id="prsnt_cmplnt_det" name="prsnt_cmplnt_det" cols="50" value={this.state.presenting_complaints_det} onChange={this.handle_presenting_complaints_det_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label className='title'>Past History</label></td>
                      </tr>
                      <tr>
                          <td><label className='subtitle'>Medical</label></td>
                          <td><textarea className='txtbx' placeholder="pst_hist_med" id="pst_hist_med" name="pst_hist_med" cols="50" value={this.state.past_hist_medical} onChange={this.handle_past_hist_medical_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label className='subtitle'>Surgical</label></td>
                          <td><textarea className='txtbx' placeholder="pst_hist_surg" id="pst_hist_surg" name="pst_hist_surg" cols="50" value={this.state.past_hist_surgical} onChange={this.handle_past_hist_surgical_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label className='title'>Relevant Investigations</label></td>
                          <td><textarea className='txtbx' id = "rlvnt_investigation" name = "rlvnt_investigation" cols="50" value={this.state.rel_investigations} onChange={this.handle_rel_investigations_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label className='title'>Currrent Medication</label></td>
                          <td><textarea className='txtbx' id = "curr_medication" name = "curr_medication" cols="50" value={this.state.current_medications} onChange={this.handle_current_medications_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label className='title'>Family History</label></td>
                          <td><textarea className='txtbx' id = "fmly_hstry" name = "fmly_hstry" cols="50" value={this.state.family_history} onChange={this.handle_family_history_Change}></textarea></td> 
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Personal History</label></td>
                      </tr>
                      <tr>
                          <td><label>Marital status</label></td>
                          <td><MaritalStatus statushandler={this.getStatus()} /></td>

                      </tr>
                      <tr>
                          <td><label>No of children</label></td>
                          <td><input className='txtbx' placeholder="No.of.children" type = "text" value={this.state.no_of_child} onChange={this.handle_no_of_child_Change}/></td>
                      </tr>
                      <tr>
                          <td><label>Last child birth</label></td>
                          <td><input className='txtbx' placeholder="Last child birth" type = "text" value={this.state.last_child_birth} onChange={this.handle_last_child_birth_Change}/></td>
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Menstrual History</label></td>
                      </tr>
                      <tr>
                          <td><label>Cycles</label></td>
                          <td><input placeholder="cycles" name="cycles" type="radio" value="regular" onChange={this.handle_mnstrl_hist_cycles_Change} />Regular
                              <input placeholder="cycles" name="cycles" type="radio" value="irregular" onChange={this.handle_mnstrl_hist_cycles_Change} />Irregular
                          </td>
                      </tr>
                      {
                        this.state.mnstrl_hist_cycles === "irregular"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "mnstrl_hstry_cycle_rmrk" name = "mnstrl_hstry_cycle_rmrk" cols="50" value={this.state.mnstrl_hist_cycles_rmrk} onChange={this.handle_mnstrl_hist_cycles_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr>
                          <td><label>Amenorrhea</label></td>
                          <td><input placeholder="amenorrhea" name="amenorrhea" type="radio" value="primary" onChange={this.handle_mnstrl_hist_amnrh_Change} />Primary
                              <input placeholder="amenorrhea" name="amenorrhea" type="radio" value="secondary" onChange={this.handle_mnstrl_hist_amnrh_Change} />Secondary
                          </td>
                      </tr>
                      {
                        this.state.mnstrl_hist_amnrh==="secondary"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "mnstrl_hstry_amnrrhea_rmrk" name = "mnstrl_hstry_amnrrhea_rmrk" cols="50" value={this.state.mnstrl_hist_amnrh_rmrk} onChange={this.handle_mnstrl_hist_amnrh_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr>
                          <td><label>Menopause</label></td>
                          <td><input placeholder="menopause" name="menopause" type="radio" value="yes" />Yes
                              <input placeholder="menopause" name="menopause" type="radio" value="no" />No
                          </td>
                      </tr>
                      <tr>
                          <td><label>Duration (years)</label></td>
                          <td><input className='txtbx' placeholder="Duration" type = "text" value={this.state.mnstrl_hstry_duration} onChange={this.handle_mnstrl_hist_dur_Change}/></td>
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Smoking</label></td>
                          <td><input placeholder="smoking" name="smoking" type="radio" value="yes" onChange={this.handle_smoking_Change} /> Yes
                              <input placeholder="smoking" name="smoking" type="radio" value="no" onChange={this.handle_smoking_Change} /> No
                          </td>
                      </tr>
                      {
                        this.state.smoking==="yes"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "smoking_rmrk" name = "smoking_rmrk" cols="50" value={this.state.smoking_rmrk} onChange={this.handle_smoking_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Alcohol</label></td>
                          <td><input placeholder="alcohol" name="alcohol" type="radio" value="yes" onChange={this.handle_alcohol_Change} /> Yes
                              <input placeholder="alcohol" name="alcohol" type="radio" value="no" onChange={this.handle_alcohol_Change}/> No
                          </td>
                      </tr>
                      {
                        this.state.alcohol==="yes"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "alcohol_rmrk" name = "alcohol_rmrk" cols="50" value={this.state.alcohol_rmrk} onChange={this.handle_alcohol_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Clinical examination</label></td>
                      </tr>
                      <tr>
                          <td><label>Pallor</label></td>
                          <td><input placeholder="pallor" name="pallor" type="radio" value="present" onChange={this.handle_clin_exam_pallor_Change} />Present
                              <input placeholder="pallor" name="pallor" type="radio" value="notpresent" onChange={this.handle_clin_exam_pallor_Change} />Not Present
                          </td>
                      </tr>
                      <tr>
                          <td><label>Oedema</label></td>
                          <td><input placeholder="oedema" name="oedema" type="radio" value="present" onChange={this.handle_clin_exam_oedema_Change} />Present
                              <input placeholder="oedema" name="oedema" type="radio" value="notpresent" onChange={this.handle_clin_exam_oedema_Change} />Not Present
                          </td>
                      </tr>
                      <tr>
                          <td><label>Thyroid</label></td>
                          <td><input placeholder="thyroid" name="thyroid" type="radio" value="enlarged" onChange = {this.handle_clin_exam_thyroid_Change} />Enlarged
                              <input placeholder="thyroid" name="thyroid" type="radio" value="notenlarged" onChange = {this.handle_clin_exam_thyroid_Change} />Not Enlarged
                          </td>
                      </tr>
                      {
                        this.state.clin_exam_thyroid==="enlarged"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "clin_exam_thyroid_rmrk" name = "clin_exam_thyroid_rmrk" cols="50" value={this.state.clin_exam_thyroid_rmrk} onChange={this.handle_clin_exam_thyroid_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr>
                          <td><label>Ophthalmopathy</label></td>
                          <td><input placeholder="Ophthlmpthy" name="Ophthlmpthy" type="radio" value="present" onChange={this.handle_clin_exam_opthlmpthy_Change} />Present
                              <input placeholder="Ophthlmpthy" name="Ophthlmpthy" type="radio" value="notpresent" onChange={this.handle_clin_exam_opthlmpthy_Change} />Not Present
                          </td>
                      </tr>
                      {
                        this.state.clin_exam_opthlmpthy==="present"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "clin_exam_thyroid_rmrk" name = "clin_exam_thyroid_rmrk" cols="50" value={this.state.clin_exam_opthlmpthy_rmrk} onChange={this.handle_clin_exam_opthlmpthy_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr>
                          <td><label>Cervical Lymph adenopathy</label></td>
                          <td><input placeholder="cervlymphadnpthy" name="cervlymphadnpthy" type="radio" value="present" onChange={this.handle_clin_exam_crvcl_lymph_adnpthy_Change} />Present
                              <input placeholder="cervlymphadnpthy" name="cervlymphadnpthy" type="radio" value="notpresent" onChange={this.handle_clin_exam_crvcl_lymph_adnpthy_Change} />Not Present
                          </td>
                      </tr>
                      {
                        this.state.clin_exam_crvcl_lymph_adnpthy==="present"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "clin_exam_crvcl_lymph_adnpthy_rmrk" name = "clin_exam_crvcl_lymph_adnpthy_rmrk" cols="50" value={this.state.clin_exam_crvcl_lymph_adnpthy_rmrk} onChange={this.handle_clin_exam_crvcl_lymph_adnpthy_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr>
                          <td><label>Other findings</label></td>
                          <td><textarea className='txtbx' id="clin_exam_other_findings" name="clin_exam_other_findings" cols="50" value={this.state.clin_exam_othr_findings} onChange={this.handle_clin_exam_othr_findings_Change} /></td>
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>CVS</label></td>
                          <td><input placeholder="cvs" name="cvs" type="radio" value="normal"  onChange={this.handle_cvs_Change} />Normal
                              <input placeholder="cvs" name="cvs" type="radio" value="abnormal"  onChange={this.handle_cvs_Change} />Abnormal
                          </td>
                      </tr>
                      {
                        this.state.cvs==="abnormal"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "cvs_rmrk" name = "cvs_rmrk" cols="50" value={this.state.cvs_rmrk} onChange={this.handle_cvs_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Respiratory system</label></td>
                          <td><input placeholder="rsprtrysystm" name="rsprtrysystm" type="radio" value="normal" onChange={this.handle_rsprtrysystm_Change} />Normal
                              <input placeholder="rsprtrysystm" name="rsprtrysystm" type="radio" value="abnormal" onChange={this.handle_rsprtrysystm_Change} />Abnormal
                          </td>
                      </tr>
                      {
                        this.state.rsprtrysystm==="abnormal"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "rsprtrysystm_rmrk" name = "rsprtrysystm_rmrk" cols="50" value={this.state.rsprtrysystm_rmrk} onChange={this.handle_rsprtrysystm_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Abdomen</label></td>
                      </tr>
                      <tr>
                          <td><label>Liver</label></td>
                          <td><textarea className='txtbx' id = "liver" name = "liver" cols = "50" value={this.state.abd_liver} onChange={this.handle_liver_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label>Spleen</label></td>
                          <td><textarea className='txtbx' id = "spleen" name = "spleen" cols = "50" value={this.state.abd_spleen} onChange={this.handle_spleen_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label>Other findings</label></td>
                          <td><textarea className='txtbx' id = "abdmn_othr_findings" name = "abdmn_othr_findings" cols = "50" value={this.state.abd_othr_fndngs} onChange={this.handle_abd_othr_fndngs_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label className='title'>Secondary sexual characteristics</label></td>
                      </tr>
                      <tr>
                          <td><label>Breasts - Tanner's stage</label></td>
                          <select value={this.state.tnnrstg_brst} onChange={this.handle_tnnrstg_brst_Change}>
                                <option value={1}> 1 </option>
                                <option value={2}> 2 </option>
                                <option value={3}> 3 </option>
                                <option value={4}> 4 </option>
                                <option value={5}> 5 </option>
                          </select>
                      </tr>
                      <tr>
                          <td><label>Pubic hair - Tanner's stage</label></td>
                          <select value={this.state.tnnrstg_pbchr} onChange={this.handle_tnnrstg_pbchr_Change}>
                                <option value={1}> 1 </option>
                                <option value={2}> 2 </option>
                                <option value={3}> 3 </option>
                                <option value={4}> 4 </option>
                                <option value={5}> 5 </option>
                          </select>
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Stretched Penile length</label></td>
                          <td><textarea className='txtbx' id="str_pnl_len" name="str_pnl_len" cols="50" value={this.state.strch_pen_len} onChange={this.handle_strch_pen_len_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label className='title'>Testicular volume</label></td>
                      </tr>
                      <tr>
                          <td><label>Right</label></td>
                          <td><textarea className='txtbx' id="tst_vol_rght" name="tst_vol_rght" cols="50" value={this.state.tstclr_vol_right} onChange={this.handle_tstclr_vol_right_Change}></textarea></td> 
                      </tr>
                      <tr>
                          <td><label>Left</label></td>
                          <td><textarea className='txtbx' id="tst_vol_lft" name="tst_vol_lft" cols="50" value={this.state.tstclr_vol_left} onChange={this.handle_tstclr_vol_left_Change}></textarea></td> 
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>CNS</label></td>
                          <td><input placeholder = "cns" name = "cns" type="radio" value="normal" onChange={this.handle_cns_Change} />Normal
                              <input placeholder = "cns" name = "cns" type="radio" value="abnormal" onChange={this.handle_cns_Change} />Abnormal
                          </td>
                      </tr>
                      {
                            this.state.cns==="abnormal"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "cns_rmrk" name = "cns_rmrk" cols="50" value={this.state.cns_rmrk} onChange={this.handle_cns_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Visual fields</label></td>
                          <td><input placeholder = "visual_fields" name = "visual_fields" type="radio" value="normal" onChange={this.handle_vslflds_Change} />Normal
                              <input placeholder = "visual_fields" name = "visual_fields" type="radio" value="abnormal" onChange={this.handle_vslflds_Change} />Abnormal
                          </td>
                      </tr>
                      {
                            this.state.vslflds==="abnormal"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "vslflds_rmrk" name = "vslflds_rmrk" cols="50" value={this.state.vslflds_rmrk} onChange={this.handle_vslflds_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Fundus</label></td>
                          <td><input placeholder = "fundus" name = "fundus" type="radio" value="normal" onChange={this.handle_fundus_change} />Normal
                              <input placeholder = "fundus" name = "fundus" type="radio" value="abnormal" onChange={this.handle_fundus_change} />Abnormal
                          </td>
                      </tr>
                      <tr></tr>
                      {
                            this.state.fundus==="abnormal"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "fundus_rmrk" name = "fundus_rmrk" cols="50" value={this.state.fundus_rmrk} onChange={this.handle_fundus_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr>
                          <td><label className='title'>Extra ocular movements</label></td>
                          <td><input placeholder="extr_oclr_mvmnts" name= "extr_oclr_mvmnts" type="radio" value="normal" onChange={this.handle_extr_oclr_mvmnts_Change}/>Normal
                              <input placeholder="extr_oclr_mvmnts" name= "extr_oclr_mvmnts" type="radio" value="abnormal" onChange={this.handle_extr_oclr_mvmnts_Change}/>Abnormal
                          </td>
                      </tr>
                      {
                            this.state.extr_oclr_mvmnts==="abnormal"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "extr_oclr_mvmnts_rmrk" name = "extr_oclr_mvmnts_rmrk" cols="50" value={this.state.extr_oclr_mvmnts_rmrk} onChange={this.handle_extr_oclr_mvmnts_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Reflexes</label></td>
                          <td><input placeholder="reflexes" name="reflexes" type="radio" value="normal" onChange={this.handle_rflxs_Change} />Normal
                              <input placeholder="reflexes" name="reflexes" type="radio" value="sluggish" onChange={this.handle_rflxs_Change} />Sluggish
                          </td>
                      </tr>
                      {
                            this.state.rflxs==="sluggish"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "rflxs_rmrk" name = "rflxs_rmrk" cols="50" value={this.state.rflxs_rmrk} onChange={this.handle_rflxs_rmrk_Change}></textarea></td></tr>:""
                      }
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Monofilament testing (10 gr)</label></td>
                          <td><input placeholder = "mnflmnt_tstng" name = "mnflmnt_tstng" type="radio" value="present" onChange={this.handle_monofil_testing_Change}/>Present
                              <input placeholder = "mnflmnt_tstng" name = "mnflmnt_tstng" type="radio" value="absent" onChange={this.handle_monofil_testing_Change}/>Absent
                          </td>
                      </tr>
                      <tr></tr>
                      <tr>
                          <td><label className='title'>Feet</label></td>
                          <td><input placeholder = "feet" name = "feet" type = "radio" value = "healthy" onChange={this.handle_feet_Change} />Healthy
                              <input placeholder = "feet" name = "feet" type = "radio" value = "unhealthy" onChange={this.handle_feet_Change} />Unhealthy
                          </td>
                      </tr>
                      {
                            this.state.feet==="unhealthy"?<>
                                <tr>
                                    <td><label>Corns</label></td>
                                    <td><input placeholder = "corns" name = "corns" type="radio" value="present" onChange= {this.handle_corns_Change} />Present
                                        <input placeholder = "corns" name = "corns" type="radio" value="absent" onChange= {this.handle_corns_Change} />Absent
                                    </td>
                                </tr>
                                {
                                    this.state.corns==="present"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "corns_rmrk" name = "corns_rmrk" cols="50" value={this.state.feet_corns_rmrk} onChange={this.handle_feet_corns_rmrk_Change}></textarea></td></tr>:""
                                }
                                <tr>
                                    <td><label>Callosities</label></td>
                                    <td><input placeholder = "callosities" name = "callosities" type="radio" value="present" onChange={this.handle_cllsts_Change}/>Present
                                        <input placeholder = "callosities" name = "callosities" type="radio" value="absent" onChange={this.handle_cllsts_Change}/>Absent
                                    </td>
                                </tr>
                                {
                                    this.state.cllsts==="present"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "cllsts_rmrk" name = "cllsts_rmrk" cols="50" value={this.state.feet_callosities_rmrk} onChange={this.handle_feet_callosities_rmrk_Change}></textarea></td></tr>:""
                                }
                                <tr>
                                    <td><label>Fissures</label></td>
                                    <td><input placeholder = "fissures" name = "fissures" type="radio" value="present" onChange={this.handle_fssrs_Change} />Present
                                        <input placeholder = "fissures" name = "fissures" type="radio" value="absent" onChange={this.handle_fssrs_Change} />Absent
                                    </td>
                                </tr>
                                {
                                    this.state.fssrs==="present"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "fssrs_rmrk" name = "fssrs_rmrk" cols="50" value={this.state.feet_fissures_rmrk} onChange={this.handle_feet_fissures_rmrk_Change}></textarea></td></tr>:""
                                }
                                <tr>
                                    <td><label>Ulcers</label></td>
                                    <td><input placeholder = "ulcers" name = "ulcers" type="radio" value="present" onChange={this.handle_ulcrs_Change} />Present
                                        <input placeholder = "ulcers" name = "ulcers" type="radio" value="absent" onChange={this.handle_ulcrs_Change} />Absent
                                    </td>
                                </tr>
                                {
                                    this.state.ulcrs==="present"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "ulcrs_rmrk" name = "ulcrs_rmrk" cols="50" value={this.state.feet_ulcers_rmrk} onChange={this.handle_feet_ulcers_rmrk_Change}></textarea></td></tr>:""
                                }
                                <tr>
                                    <td><label>Deformities</label></td>
                                    <td><input placeholder = "deformities" name = "deformities" type="radio" value="present" onChange={this.handle_dfrmts_Change} />Present
                                        <input placeholder = "deformities" name = "deformities" type="radio" value="absent" onChange={this.handle_dfrmts_Change} />Absent
                                    </td>
                                </tr>
                                {
                                    this.state.dfrmts==="present"?<tr><td><label>Remarks</label></td><td><textarea className='txtbx' id = "dfrmts_rmrk" name = "dfrmts_rmrk" cols="50" value={this.state.feet_deformities_rmrk} onChange={this.handle_feet_deformities_rmrk_Change}></textarea></td></tr>:""
                                }
                              </>: ""
                        }
                  </tbody>
            </table>
            <button type="submit"> Submit </button>
          </form>        
    )
  }

}

export default endocrine_opassess