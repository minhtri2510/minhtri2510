import './App.css';
// import Login from './login';
// import Formik from './hook-form/Formik.js';
import SimpleHookForm from './hook-form/SimpleHookForm';
import Example from './query/Example';
import TodoList from './query/todoList';

function App() {
  return (
    <div className="App">
      {/* demo 3 cách all api */}
      {/* <Login/> */}

      {/* demo formik  */}
      {/* <Formik/> */}

      {/* demo hook form */}
      <SimpleHookForm/>
      {/* <TodoList/> */}
      {/* <Example/> */}
    </div>
  );
}

export default App;
