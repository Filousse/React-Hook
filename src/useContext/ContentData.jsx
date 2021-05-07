import React, { useContext } from 'react';
import { UserContexts, ColorContext } from "./MyContext"

export default function Contentdata(props) {

    const user = useContext(UserContexts);
    const color = useContext(ColorContext);

    console.log("UserContext off MyContext.jsx : ", user);
    console.log("ColorContext off MyContext.jsx : ", color);

    return (
    // useContext() YUHUUUU 
        <>
            <div style={{color}}>
                <ul>
                    <li> Nom: {user.name}</li>
                    <li> Age: {user.age} </li>
                </ul>
            </div>
        </>

        // SANS useContext Hook Histoire de comprendre l'imbriquement ;) 
        //     <>
        //     <UserContexts.Consumer>
        //         {
        //             user => {
        //                  console.log(user);
        //                 return (
        //                     <ColorContext.Consumer>
        //                         {
        //                             color => {
        //                                   console.log("ColorContext off MyContext.jsx :", color);
        //                                 return (
        //                                     <div style={{ color }}>
        //                                         <ul>
        //                                             <li> Nom: {user.name}</li>
        //                                             <li> Age: {user.age} </li>
        //                                         </ul>
        //                                     </div>
        //                                 )

        //                             } 
        //                         }
        //                     </ColorContext.Consumer>
        //                 )
        //             }
        //         }
        //     </UserContexts.Consumer>


        // </>


    )
}
