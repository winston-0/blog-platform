import { Link, useHistory } from "react-router-dom"
import SignUpForm from "../Form/SignUpForm"
import { useSelector } from "react-redux"
import BlurSpinner from "../BlurSpinner/BlurSpinner"
import { useEffect } from "react"

const SignUpPage = () => {
    const loading = useSelector(state => state.profileData.loading)
    const loggedIn = useSelector(state => state.profileData.loggedIn)
    const history = useHistory();
    useEffect(() => {
        if(loggedIn) {
            history.push('/profile')
        }
    }, [loggedIn])
    return (
        <section className='form'>
        <h2 className='form-header'>Create new account</h2>
        <SignUpForm></SignUpForm>
        <p style={{margin: 0}}>Already have an account? <Link to='/sign-in'>Sign In</Link>.</p>
        {loading ? <BlurSpinner/> : null}
        </section>
    )
}

export default SignUpPage