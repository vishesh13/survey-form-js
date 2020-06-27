import React from 'react';
import SurveyFormView from './SurveyFormView';
import SubmissionModalView from './SubmissionModalView';

/**
 * Container class having the handler methods for maintaining data.
 */
class SurveyFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasSubmitted: false,
            details: {
                name: '',
                email: '',
                contact: '',
                questions: Array(3).fill('')
            },
            errors: {
                mail: false,
                number: false,
                nameField: false
            }
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleRadioButtonSelection = this.handleRadioButtonSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateData = this.validateData.bind(this);
        this.handleSubmissionNotification = this.handleSubmissionNotification.bind(this);
    }

    componentDidUpdate() {
        if (this.state.hasSubmitted) {
            document.getElementById('CONTENT_VIEW').style.display = "block";
            document.getElementById('SUBMISSION_MODAL').style.display = "block";
        }

        // if (this.state.hasSubmitted) {
        //     this.setState(() => {
        //         return {
        //             hasSubmitted: false,
        //             details: {
        //                 name: '',
        //                 email: '',
        //                 contact: '',
        //                 questions: Array(3).fill('')
        //             },
        //             errors: {
        //                 mail: false,
        //                 number: false,
        //                 nameField: false
        //             }
        //         }
        //     })
        // }
    }

    /**
     * function to validate user provided data
     */
    validateData() {
        const mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const contactPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        this.setState((prevState) => {
            return {
                ...prevState,
                errors: {
                    mail: this.state.details.email.match(mailPattern) ? false : true,
                    number: this.state.details.contact.match(contactPattern) ? false : true,
                    nameField: this.state.details.name === '' ? true : false
                },
            }
        })
    }

    /**
     * handler fucntion to update text input field values
     * @param {event} e 
     */
    handleOnChange(e) {
        if (e) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    details: {
                        name: document.getElementById('INPUT_NAME').value,
                        email: document.getElementById('INPUT_EMAIL').value,
                        contact: document.getElementById('INPUT_CONTACT').value,
                        questions: prevState.details.questions
                    },
                    errors: {
                        nameField: (document.getElementById('INPUT_NAME').value.length > 3) ? false : true
                    }
                }
            })
        }
    }

    /**
     * handler fucntion to update radio button selection values
     * 
     * @param {event} e 
     * @param {denotes the question number} index 
     */
    handleRadioButtonSelection(e, index) {
        const { questions } = this.state.details;
        if (e) {
            this.setState((prevState) => {
                questions[index] = event.target.value;
                return {
                    ...prevState.details,
                }
            })
        }
    }

    /**
     * handler function for submit button
     * @param {event} e 
     */
    handleSubmit() {
        this.validateData();
        this.setState((prevState) => {
            if (!prevState.errors.mail && !prevState.errors.number && !prevState.errors.nameField) {
                return {
                    ...prevState,
                    hasSubmitted: true
                }
            } else if (prevState.errors.mail || prevState.errors.number || prevState.errors.nameField) {
                return {
                    ...prevState,
                    hasSubmitted: false
                }
            }
        })
    }

    /**
     * hanlder function for submission notification
     */
    handleSubmissionNotification() {
        document.getElementById('CONTENT_VIEW').style.display = "inline";
        document.getElementById('SUBMISSION_MODAL').style.display = "none";

        if (this.state.hasSubmitted) {
            this.setState(() => {
                return {
                    details: {
                        name: '',
                        email: '',
                        contact: '',
                        questions: Array(3).fill('')
                    },
                    errors: {
                        mail: false,
                        number: false,
                        nameField: false
                    },
                    hasSubmitted: false
                }
            })
        }
        this.resetRadioButtons(document.getElementsByName('child'));
        this.resetRadioButtons(document.getElementsByName('happy'));
        this.resetRadioButtons(document.getElementsByName('taught'));
    }

    /**
     * function to reset radio button selections
     * @param {*} radioSelection 
     */
    resetRadioButtons = (radioSelection) => {
        radioSelection.forEach((r) => {
            r.checked = false
            })
    }

    render() {
        return (
            <React.Fragment>
                <SurveyFormView details={this.state.details} errors={this.state.errors} handleOnChange={this.handleOnChange} handleRadioButtonSelection={this.handleRadioButtonSelection} handleSubmit={this.handleSubmit} />
                <SubmissionModalView handleSubmissionNotification={this.handleSubmissionNotification} />
            </React.Fragment>
        )
    }
}

export default SurveyFormContainer;