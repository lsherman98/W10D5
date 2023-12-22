import { useState } from "react"

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneType, setPhoneType] = useState('')
    const [staff, setStaff] = useState('')
    const [bio, setBio] = useState('')
    const [emailSignUp, setEmailSignUp] = useState(false)

    const [errorMessages, setErrorMessages] = useState([]);


    const validate = () => {

        let validationErrors = []

        if (!name.length){
            validationErrors.push("Name cannot be empty!")
        }

        if (!email.length || !email.includes("@")){
            validationErrors.push("Email is Invaild!")
        }

        if (phone.length && phone.length !== 10){
            validationErrors.push("Invaild phone number!")
        }

        if (phone && !phoneType){
            validationErrors.push("Phone type cannot be empty!")
        }

        if (bio.length > 280){
            validationErrors.push("Bio is too long")
        }

        return validationErrors

    }



    const handleSubmit = (e) => {
        e.preventDefault()

        let errors = validate()

        if(errors.length){
            setErrorMessages(errors)
        } else {
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
            setErrorMessages([])
        }

    }

    const showErrors = () => {
        if (!errorMessages.length) {
            return null;
        } else {
            return (
                <ul>
                    {errorMessages.map((error, idx) => {
                        return <li style={{color : "red"}} key={idx}>{error}</li>
                    })}
                </ul>
            )
        }
    };


    return (
        <>
        {showErrors()}
        <form onSubmit={handleSubmit}>
            <label> Name:
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
            </label>
            <br />
            <label> Email:
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label> Phone:
                <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </label>
            <br />
            <label> Phone Type:
                <select value={phoneType} onChange={(e) => setPhoneType(e.target.value)} >
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
            </label>
            <br />
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
            <br />
            <label>Bio:
                <br />
                <textarea cols="30" rows="10" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
            </label>
            <br />

            <label>Sign Up for Emails:
                <input type="checkbox" value={emailSignUp}  onChange={() => setEmailSignUp(!emailSignUp)}/>
            </label>

            <br />
            <button>Sign Up</button>

        
        </form>
        </>
    )
}

export default Form