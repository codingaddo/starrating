import './App.css';
import StarRating from './component/StarRating';

function App() {
  return (
    <div >
      <StarRating defaultRating={0} maxRating={10} size={40}/>
      <StarRating defaultRating={3} maxRating={5}/>
    </div>
  );
}

export default App;
