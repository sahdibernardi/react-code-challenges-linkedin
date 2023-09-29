import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [displayedMessage, setDisplayedMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // fields are all fulfilled
    if (!email || !password || !passwordConfirm) {
      setDisplayedMessage('Some fields are empty, please fill them all')
      return
    }
    // password is at least 8 characters
    if (password.length < 8) {
      setDisplayedMessage('Password is too short. It should contain at least 8 characters')
      return
    }
    // password and passwordConfirm match
    if (password !== passwordConfirm) {
      setDisplayedMessage('Passwords do not match')
      return
    }
    // email has exactly one @
    if (email.split('@').length !== 2) {
      setDisplayedMessage('Email is invalid')
      return
    }
    setDisplayedMessage('Success! User Registered')
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
  }

  return (
    <form>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
        value={passwordConfirm}
      />
      <p>{displayedMessage}</p>
      <input type='submit' value='Submit'  onClick={(e) => handleSubmit(e)}/>
    </form>
  )
}
