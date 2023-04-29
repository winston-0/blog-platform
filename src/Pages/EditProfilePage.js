import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import EditProfileForm from '../Form/EditProfileForm'
import BlurSpinner from '../BlurSpinner/BlurSpinner'

const EditProfilePage = () => {
  const loggedIn = useSelector((state) => state.profileData.loggedIn)
  const loading = useSelector((state) => state.profileData.loading)
  if (loggedIn) {
    return (
      <section className="form">
        <h2 className="form-header">Edit Profile</h2>
        <EditProfileForm />
        {loading ? <BlurSpinner /> : null}
      </section>
    )
  } else if (!localStorage.getItem('token') && !loggedIn) {
    return <Redirect to="/sign-up" />
  }
}

export default EditProfilePage
