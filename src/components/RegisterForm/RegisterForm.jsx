import { useDispatch } from 'react-redux';
import { register } from '../../redux/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form action="" className={css.registerForm} onSubmit={handleSubmit}>
      <label htmlFor="">
        Username
        <input type="text" name="name" />
      </label>
      <label htmlFor="">
        Email
        <input type="email" name="email" />
      </label>
      <label htmlFor="">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
