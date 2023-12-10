import { Link } from 'react-router-dom'
import './Register.scss'
function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Site Using Ant Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam atque ex tempora qui dicta quod explicabo quia dolores dolor, et at quam illo laudantium perspiciatis quos necessitatibus assumenda, in libero!</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" name='username'placeholder="username"/>
            <input type="password" name='password' placeholder="password"/>
            <input type="email" name='email' placeholder="Email"/>
            <input type="text" name='name' placeholder="Name"/>
            <button>Register</button>
          </form>
        </div>
        </div>
    </div>
  )
  
}

export default Register