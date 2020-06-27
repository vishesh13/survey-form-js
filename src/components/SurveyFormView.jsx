import React from 'react';
import './stylesheet.css';

/**
 * Component havong survey form view layer
 * @param {handler functions and states} props 
 */
const SurveyFormView = (props) => {
    return (
        <div id="CONTENT_VIEW" className="content">
            <div id="FORM_VIEW_HEADER">
                <h2>Parents Survey Form</h2>
            </div>
            <div className="form-container">
                <div className="form-view">
                    <p>Name of Child</p>
                    <input id="INPUT_NAME" name="name" type="text" onChange={(e) => { props.handleOnChange(e) }} value={props.details.name} className="form-input" placeholder="Name" />
                    <div className="invalid">{props.errors.nameField ? 'Enter more than 3 charcters' : ''}</div>

                    <p>Email</p>
                    <input id="INPUT_EMAIL" name="email" type="text" onChange={(e) => { props.handleOnChange(e) }} value={props.details.email} className="form-input" placeholder="Email" />
                    <div className="invalid">{props.errors.mail ? 'Enter valid email id' : ''}</div>

                    <p>Contact Number</p>
                    <input id="INPUT_CONTACT" name="contact" type="text" onChange={(e) => { props.handleOnChange(e) }} value={props.details.contact} className="form-input" placeholder="Contact" />
                    <div className="invalid">{props.errors.number ? 'Enter valid contact number' : ''}</div>

                    <p>Does your child enjoy going to school?</p>
                    <input name="child" id="never" value="Not at all" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 0)} />
                    <label>
                        <span>Not at all</span>
                    </label>
                    <br />
                    <input name="child" id="somewhat" value="Somewhat" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 0)} />
                    <label >
                        <span>Somewhat</span>
                    </label>
                    <br />
                    <input name="child" id="somewhat" value="Moderately" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 0)} />
                    <label>
                        <span>Moderately</span>
                    </label>
                    <br />
                    <input name="child" id="much" value="Very much" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 0)} />
                    <label>
                        <span>Very much</span>
                    </label>
                    <br />
                    <input name="child" id="completely" value="Completely " type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 0)} />
                    <label>
                        <span>Completely</span>
                    </label>
                    <br />

                    <p>Is your child happy at school?</p>
                    <input name="happy" value="Not at all" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 1)} />
                    <label>
                        <span>Not at all</span>
                    </label><br />
                    <input name="happy" value="Somewhat" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 1)} />
                    <label>
                        <span>Somewhat</span>
                    </label><br />
                    <input name="happy" value="Moderately" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 1)} />
                    <label>
                        <span>Moderately</span>
                    </label><br />
                    <input name="happy" id="much" value="Very much" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 1)} />
                    <label>
                        <span>Very much</span>
                    </label><br />
                    <input name="happy" id="completely" value="completely" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 1)} />
                    <label>
                        <span>Completely</span>
                    </label><br />

                    <p>Is your child well taught by his or her teachers?</p>
                    <input name="taught" id="never" value="Not at all" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 2)} />
                    <label>
                        <span>Not at all</span>
                    </label><br />
                    <input name="taught" id="somewhat" value="Somewhat" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 2)} />
                    <label>
                        <span>Somewhat</span>
                    </label><br />
                    <input name="taught" id="moderately" value="Moderately" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 2)} />
                    <label>
                        <span>Moderately</span>
                    </label><br />
                    <input name="taught" id="much" value="Very much" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 2)} />
                    <label>
                        <span>Very much</span>
                    </label><br />
                    <input name="taught" id="extremely" value="Extremely" type="radio" onClick={(e) => props.handleRadioButtonSelection(e, 2)} />
                    <label >
                        <span>Extremely</span>
                    </label><br />

                    <input type="submit" value="SUBMIT" onClick={() => { props.handleSubmit() }} />
                </div>
            </div>
        </div >)
}

export default SurveyFormView;