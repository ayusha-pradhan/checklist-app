import React from 'react';


export default class CheckBox extends React.Component{

render(){
    const {places,checked}= this.props;
    return (
                 <div >
                
                    <input
                        // name={this.name}
                        type="checkbox"
                        places={places}
                        checked={checked}
                        onClick={(places)=>this.toggleTodo(places)}
                    />
                    {places}               
                </div>
            );
}
toggleTodo = ()=>{
    // debugger;
    this.props.onClick(this.props.places);
}

}
// export default function CheckBox({ name, place, onCheck }) {
    
//     return (
//         <label>
//             <input
//                 name={name}
//                 type="checkbox"
//                 place={place}
//                 // checked={tick }
//                 onChange={onCheck}
//             />
            
            
//             {place}
//         </label>
//     );
// } 