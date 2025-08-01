// You would import your logo image and icons here
// import MachinebanksLogo from './assets/machinebanks-logo.png';
// import UserIcon from './assets/user-icon.svg';
// import LockIcon from './assets/lock-icon.svg';
import logo from '../public/machinebanks-new-logo.png';

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Form submitted!");
    if(event.target.username.value == event.target.password.value) {
      alert("Login functionality is not implemented yet. This is a placeholder for the login form.");
    }

  };

  return (
    // Main container for the entire page with the background
    <div className="login-page-wrapper">

      {/* Header section for the logo */}
      <header className="login-header">
        <img className="machinebanks-logo" src={logo} alt="Machinebanks Logo" />
      </header>

      {/* Main content holding the login form */}
      <main className="login-content">

        {/* The white card that contains the form itself */}
        <div className="login-card">
        
          {/* Using a <form> element is important for accessibility and functionality */}
          <form onSubmit={handleSubmit}>

            {/* The "LOGIN" title */}
            <h1>LOGIN</h1>

            {/* Input field for the username */}
            <div className="input-group">
              {/* Note: The icon is usually added with CSS or as an inline SVG */}
              {/* <label htmlFor="username" className="visually-hidden">Username</label> */}
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                autoComplete='false'
              />
            </div>

            {/* Input field for the password */}
            <div className="input-group">
              {/* <label htmlFor="password" className="visually-hidden">Password</label> */}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            {/* The submit button */}
            <button type="submit" className="login-button">
              LOGIN
            </button>
            
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage