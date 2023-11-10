import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import SettingsState, {
  toggleForm,
  setEmail,
  setPassword,
} from '../../store/reducers/settings';
import './Settings.scss';

function Settings() {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.settings);
  const showForm = useAppSelector((state) => state.settings.showForm);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(setEmail(newValue));
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(setPassword(newValue));
  };
  const handleToggleForm = () => {
    dispatch(toggleForm());
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className={`settings ${showForm ? 'open' : 'closed'}`}>
      <button type="button" onClick={handleToggleForm}>
        {showForm ? 'Hide' : 'Show'} Form
      </button>

      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="email"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Settings;
