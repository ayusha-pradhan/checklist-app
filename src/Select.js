import React from "react";

export default class Select extends React.Component{

render(){
    const {places}=this.props;
    return(
        
        <div>{places.map((places) =>
           { return(
               (places.checked === true)?
                <div>
                    {places.place}
                </div>
                :
                <>n</>
                
            
                )}
                )}
        </div>

    )
}

}