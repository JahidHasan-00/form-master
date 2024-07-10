
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data =>{ 
      console.log('Sign UP data', data);
  }

  const handleUpdateProfile = data =>{
      console.log('Profile Update data', data);
  }

  return (
    <>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm 
        formTitle={'Sign UP'} 
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm 
        formTitle={'Profile Update'} 
        handleSubmit={handleUpdateProfile} 
        submitBtnText='Update'
      >
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
