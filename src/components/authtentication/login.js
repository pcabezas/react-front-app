import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../features/authentication/thunks/loginUser";
import { getUser } from "../../features/authentication/thunks/getUser";

const Login = () => {
  const [ formState, setFormState ] = useState({email: '', password: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async(event) => {
    event.preventDefault();
    const response = await dispatch(loginUser(formState.email, formState.password));
    if(response){
      dispatch(getUser())
      navigate('/');
    }else{
      console.log('error', response)
    }
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