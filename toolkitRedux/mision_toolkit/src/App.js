import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Text from './components/Text';
import InputText from './components/InputText';
import Post from './components/Post';
import { decrement, increment } from './store/slices/CounterSlice'
function App() {
  return (
    <div className="App">
      <h1>Configuración reduxToolkit by Ruben</h1>
      <Counter></Counter>
      <Button type={decrement}>Decrement</Button>
      <Button type={increment}>Increment</Button>
      <Text></Text>
      <InputText></InputText>
      <Post></Post>
    </div>
  );
}

export default App;
