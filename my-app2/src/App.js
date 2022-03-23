import LessText from './components/LessText'
import './App.css';

function App(){
  return(
    <div className='container'>
      <LessText
        text={'Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the nest step towards completing it.'} maxLenght={35}
      />;
      
    </div>
  )
}


export default App