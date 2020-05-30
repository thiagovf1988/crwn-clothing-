import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    //handle submit funcstion to prevent the default submit from acting

    handleSubmit = event => {
        event.preventDefault();

        this.state({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target; //to pull the value and the name of the event
        this.setState({ [name]: value })//dynamic set our state to point to the value so if the user type the email the target is email and if he types the password th target name will be password
        //the property value is dynamic....it can be used to email and to password and we make an economy on the component code
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}//point to handle change ... which we made in a way that we can pass the same function into password and email
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}//point to handle change ... which we made in a way that we can pass the same function into password and email
                        label="password"
                        required />

                    <CustomButton type='submit'  > Sign In</CustomButton>


                </form>
            </div>

        );
    }
}

export default SignIn;
