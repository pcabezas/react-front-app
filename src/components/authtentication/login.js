import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authentication/thunks/loginUser";

const Login = () => {
  const [ formState, setFormState ] = useState({email: '', password: ''});
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(formState.email, formState.password));
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
  }

  return <div>
    <form onSubmit={onSubmit}>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={ formState.email } onChange={ onInputChange }/>
          <input type="password" name="password" value={ formState.password } onChange={ onInputChange }/>
          <input type="submit" value="Login" />
        </div>
      </div>
    </form>
  </div>
}

export default Login;