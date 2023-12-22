import { useState } from "react"

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneType, setPhoneType] = useState('')
    const [staff, setStaff] = useState('')
    const [bio, setBio] = useState('')
    const [emailSignUp, setEmailSignUp] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            name, 
            email,
            phone, 
            phoneType, 
            staff, 
            bio,
            emailSignUp
        }
        console.log(user)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label> Name:
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
            </label>

            <label> Email:
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>

            <label> Phone:
                <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </label>

            <label> Phone Type:
                <select value={phoneType} onChange={(e) => setPhoneType(e.target.value)} >
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
            </label>

            <label> Staff:
                <div>
                    <label> Instructor
                        <input type="radio" value="instructor" name='staff' onChange={(e) => setStaff(e.target.value)}/>
                    </label>
                    <label> Student
                        <input type="radio" value="student" name='staff' onChange={(e) => setStaff(e.target.value)}/>
                    </label>
                </div>
            </label>

            <label>Bio:
                <br />
                <textarea cols="30" rows="10" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
            </label>
            <br />

            <label>Sign Up for Emails:
                <input type="checkbox" value={emailSignUp}  onChange={() => setEmailSignUp(!emailSignUp)}/>
            </label>

            <br />
            <button type="submit">Sign Up</button>

        
        </form>
    )
}

export default Form