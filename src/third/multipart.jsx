import React, { Component } from "react";
class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }
  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };
  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };
  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;
    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part1</h1>
          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t2}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t2: e.target.value })}
          />



          <br />
          <input
            type="text"
            value={t3}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t3: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part2</h1>
          <div>
            <label>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={t4 === "Male"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={t4 === "Female"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={t4 === "Other"}
              onChange={(e) => this.setState({ t4: e.target.value })}
            />
            <label>Other</label>
          </div>
          <br />
          <div>
            <label>City:</label>
            <br />
            <select
              value={t5}
              onChange={(e) => this.setState({ t5: e.target.value })}
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
          <br />
          <div>
            <label>Branch:</label>
            
            
            <br />
            <input
              type="checkbox"
              checked={t6.includes("CSE")}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ t6: t6 ? t6 + ", CSE" : "CSE" });
                } else {
                  this.setState({ t6: t6.replace(", CSE", "").replace("CSE", "").replace(/^,\s*/, "") });
                }
              }}
            />
            <label>CSE</label>
            <input
              type="checkbox"
              checked={t6.includes("ECE")}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ t6: t6 ? t6 + ", ECE" : "ECE" });
                } else {
                  this.setState({ t6: t6.replace(", ECE", "").replace("ECE", "").replace(/^,\s*/, "") });
                }
              }}
            />
            <label>ECE</label>
            <input
              type="checkbox"
              checked={t6.includes("ME")}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ t6: t6 ? t6 + ", ME" : "ME" });
                } else {
                  this.setState({ t6: t6.replace(", ME", "").replace("ME", "").replace(/^,\s*/, "") });
                }
              }}
            />
            <label>ME</label>
            <input
              type="checkbox"
              checked={t6.includes("CE")}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ t6: t6 ? t6 + ", CE" : "CE" });
                } else {
                  this.setState({ t6: t6.replace(", CE", "").replace("CE", "").replace(/^,\s*/, "") });
                }
              }}
            />
            <label>CE</label>
          </div>
          <br />
        </div>
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part3</h1>
          <div>
            <label>Color:</label>
            <br />
            <input
              type="color"
              value={t7 || "#000000"}
              onChange={(e) => this.setState({ t7: e.target.value })}
            />
          </div>
          <br />
          <div>
            <label>Date of Birth:</label>
            <br />
            <input
              type="date"
              value={t8}
              onChange={(e) => this.setState({ t8: e.target.value })}
            />
          </div>
          <br />
          <div>
            <label>About You:</label>
            <br />
            <textarea
              value={t9}
              placeholder="Tell us about yourself"
              onChange={(e) => this.setState({ t9: e.target.value })}
              rows="4"
              cols="30"
            />
          </div>
          <br />
        </div>
        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>
          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
        </div>
        <div>
          <div>{t1}</div>
          <div>{t2}</div>
          <div>{t3}</div>
        </div>
        <div>
          <div>{t4}</div>
          <div>{t5}</div>
          <div>{t6}</div>
        </div>
        <div>
          <div>{t7}</div>
          <div>{t8}</div>
          <div>{t9}</div>
        </div>
      </div>
    );
  }
}
export default MultiPart;




//       t1: "",      textbox
//       t2: "",      textbox
//       t3: "",      textbox
//       t4: "",      radio(gender)
//       t5: "",      city( dropdown)
//       t6: "",      branch( checkbox)
//       t7: "",      color( color picker)
//       t8: "",      dob (date picker)
//       t9: "",      about you (textarea)
