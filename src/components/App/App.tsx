import Form from '../Form/Form';
import MessageList from '../MessageList/MessageList';
import Settings from '../Settings/Settings';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Settings />

      <MessageList />

      <Form />
    </div>
  );
}

export default App;
