import React from 'react';
import './stylesheet.css';

const SubmissionModalView = (props) => {
    return (<div id="SUBMISSION_MODAL" className="submit-popup">
        <p>Submitted Succesfully !!!</p>
        <button className="ok-button" type="submit" onClick={() => { props.handleSubmissionNotification() }}>OK</button>
    </div>
    )
}

export default SubmissionModalView;