import  { FormEvent, useEffect, useState } from 'react';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import './Login.scss';
import { useSelector, useDispatch } from 'react-redux';



type UserData = {
  username: string | null;
  password: string | null;
}

function Login() {
const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const currentUser = useSelector((state:{currentUser:boolean}) => state.currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loginButton = userName.length > 7 && password.length > 7;
  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
   dispatch({type:'true', value: true})
  };
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social Site Using Ant Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam atque ex tempora qui dicta quod explicabo
            quia dolores dolor, et at quam illo laudantium perspiciatis quos necessitatibus assumenda, in libero!
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <Form method="post" className="form">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={(e) => loginHandler(e)}
              disabled={!loginButton}
              className={`${!loginButton ? 'disabled' : undefined}`}
            >
              Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

export async function action({ request, params }: any) {
  const data = await request.formData();

  const userData: UserData = {
    username: data.get('username'),
    password: data.get('password'),
  };

  console.log(userData);
  return redirect('/');
}
