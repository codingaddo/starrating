import './App.css';
import StarRating from './component/StarRating';

function App() {
  return (
    <div >
      <StarRating  maxRating={10} size={60} color='yellow'/>
      <StarRating defaultRating={1} maxRating={8} color='green' size={52}/>
      <StarRating defaultRating={2} maxRating={8} color='blue' size={40}/>
      <StarRating defaultRating={4} maxRating={8} color='violet' size={35}/>
      <StarRating defaultRating={3}  color='#ff1233' messages={['Vey Bad','Bad','Good','Better','Best']}/>
    </div>
  );
}

export default App;
