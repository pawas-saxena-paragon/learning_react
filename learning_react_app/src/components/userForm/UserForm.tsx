import { useState } from "react";
import './userForm.css';

export default function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      {showDetails && (
        <div className="user-details">
          {JSON.stringify({ firstName, lastName, gender, nationality })}
        </div>
      )}
      <div className="user-form">
        <div className="user-input">
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="user-input">
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="user-input">
          <label>Gender: </label>
          Male{" "}
          <input
            type="radio"
            checked={gender === "male"} // in vanilla js we use "name" attribute for association in radio button.
            // So that only one is selected at a time
            onChange={(e) => setGender("male")}
          />
          Female{" "}
          <input
            type="radio"
            checked={gender === "female"}
            onChange={(e) => setGender("female")}
          />
        </div>
        <div className="user-input">
          <label>Nationality</label>
          <select
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>
      </div>

      <button onClick={() => setShowDetails((showDetails) => !showDetails)}>
        {showDetails ? "Hide" : "Show"}
      </button>
    </div>
  );
}
