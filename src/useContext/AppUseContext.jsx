import React, { Component } from 'react';
import Profile from "./Profile";
import {UserContexts, ColorContext } from "./MyContext";

class AppUseContext extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {
                name: 'lisa',
                age: 8
            }
         }
    }
    render() { 
        console.log(this.state.user);
        return ( 
            <>
            <h1 style={{color:"pink"}}>MyContext.jsx exemple</h1>
            <h3>UsecontextApp (.Provider) => Profile => ProfileData => ContentData (.Consumer) </h3>


            <div>
                <UserContexts.Provider value={this.state.user}>
                    <ColorContext.Provider  value={"red"}>
                         <Profile/>      
                    </ColorContext.Provider>          
                </UserContexts.Provider>
               
            </div>
               
            </>
         );
    }
}
 
export default AppUseContext;
