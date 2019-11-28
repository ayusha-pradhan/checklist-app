import React from 'react';
// import CityList from './checklist';
import './App.css';
import CheckBoxList from './CheckBoxList';
import Select from './Select';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        places : [{place:"bagbazar",checked :false},{place:"maitighar"},{place:"tinkune"},{place:"kritipur"}],
        
        // complete : false
    }

} 

onCheckBoxChange = (place) => {
        
  const places = this.state.places.map(a =>{
       if (a.place === place){
           return{
               ...a,
               checked: !this.state.checked
           }
       }
       else{
           return a;
       }
   });
  console.log(places)
   this.setState({places:places})
   
}

// onCheckChange=(e)=>{
//   console.log(e.target.checked);
// this.setState({[e.target.place] : e.target.checked})
// //   [e.target.place] = e.target.checked
// }

render(){
  const {places} = this.state
  return (
    <div className="App">
      <CheckBoxList 
      places ={places}
      // options ={places}
      onClick={()=>this.onCheckBoxChange}/>
    <br/>
    <Select places={places}/>
    </div>
  );
}
}
export default App;
