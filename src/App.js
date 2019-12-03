import React from 'react';
// import CityList from './checklist';
import './App.css';
import CheckBoxList from './CheckBoxList';
import Select from './Select';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        places : [{place:"bagbazar",check :false},
                  {place:"maitighar",check :false},
                  {place:"tinkune",check :false},
                  {place:"kritipur",check :false}],
        
    }

} 

onCheckboxChange = (place) => {
  // debugger;
  const places = this.state.places.map(a =>{
       if (a.place === place){
           return{
               ...a,
               check: !a.check
           }
       }
       else{
           return a;
       }
   });
   this.setState({places:places})
   
}


render(){
  const {places} = this.state
  return (
    <div className="App">
      <CheckBoxList 
      places ={places}
      updateTodoFn={this.onCheckboxChange}/>
    <br/>
    <Select places={places}/>
    </div>
  );
}
}
export default App;
