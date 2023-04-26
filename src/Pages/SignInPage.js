import { useEffect } from "react"
import { useSelector } from "react-redux"
import SignInForm from "../Form/SignInForm"
import { Link, useHistory } from "react-router-dom"
import BlurSpinner from "../BlurSpinner/BlurSpinner"

const SignInPage = () => {
    const history = useHistory()
    const loading = useSelector(state => state.profileData.loading)
    const loggedIn = useSelector(state => state.profileData.loggedIn)
    useEffect(() => {
        if(loggedIn) {
            
            history.push('/profile')
        }
    }, [loggedIn])
    return (
        <section className='form'>
        <h2 className='form-header'>Sign In</h2>
            <SignInForm/>
            <p style={{margin: 0}}>Don’t have an account? <Link to='/sign-up'>Sign Up</Link>.</p>
            {loading ? <BlurSpinner/> : null}
        </section>
    )
}

export default SignInPage