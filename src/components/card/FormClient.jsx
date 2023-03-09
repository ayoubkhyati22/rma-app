import React from 'react'
import './form-client.css'

const FormClient = () => {
  return (
   
<div>
  <div className="container">
    <header>Ajouter un nouveau client</header>
    <form action="#">
      <div className="form first">
        <div className="details personal">
          <span className="title">Personal Details</span>
          <div className="fields">
            <div className="input-field">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-field">
              <label>Date of Birth</label>
              <input type="date" placeholder="Enter birth date" required />
            </div>
            <div className="input-field">
              <label>Email</label>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-field">
              <label>Mobile Number</label>
              <input type="number" placeholder="Enter mobile number" required />
            </div>
            <div className="input-field">
              <label>Gender</label>
              <select required>
                <option disabled selected>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            <div className="input-field">
              <label>Occupation</label>
              <input type="text" placeholder="Enter your ccupation" required />
            </div>
          </div>
        </div>
        <div className="details ID">
          <span className="title">Identity Details</span>
          <div className="fields">
            <div className="input-field">
              <label>ID Type</label>
              <input type="text" placeholder="Enter ID type" required />
            </div>
            <div className="input-field">
              <label>ID Number</label>
              <input type="number" placeholder="Enter ID number" required />
            </div>
            <div className="input-field">
              <label>Issued Authority</label>
              <input type="text" placeholder="Enter issued authority" required />
            </div>
            <div className="input-field">
              <label>Issued State</label>
              <input type="text" placeholder="Enter issued state" required />
            </div>
            <div className="input-field">
              <label>Issued Date</label>
              <input type="date" placeholder="Enter your issued date" required />
            </div>
            <div className="input-field">
              <label>Expiry Date</label>
              <input type="date" placeholder="Enter expiry date" required />
            </div>
          </div><br />
          <button className="nextBtn">
            <span className="btnText">ENREGISTRER</span>
          </button>
        </div> 
      </div>
    
    </form>
  </div>
</div>

   
  )
}

export default FormClient