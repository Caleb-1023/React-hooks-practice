import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

const UserForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        let emailValid = false;
        if (email.length === 0) {
            setEmailError("Email is required")
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters")
        }
        else if (email.indexOf(" ") >= 0) {
            setEmailError("Email cannot contain spaces")
        }
        else {
            setEmailError("")
            emailValid = true;
        }

        if (emailValid === true) {
            alert(`Email: ${email} \nPassword: ${password}`);
        }

        let passwordValid = false;
        
    }

  return (
    <>
        <Form onSubmit={handleSubmit}> 
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' onChange={event => setEmail(event.target.value)} />
                <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' onChange={event => setPassword(event.target.value)} />
            </Form.Group>
            {emailError.length > 0 && 
            <Alert variant='danger'>{emailError}</Alert>}

            {/* <Form.Group controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Check me out' />
            </Form.Group> */}

            <Button variant='primary' type='submit'>
                Submit
            </Button>
        </Form>
        <p>
            Email entered: {email}
            <br />
            Password entered: {password}
        </p>
    </>
  )
}

export default UserForm