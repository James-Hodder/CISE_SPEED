import React from "react";
//import backend from "../../api/backend";
//import { useHistory } from "react-router-dom";
//import { useAuth } from "../../context/auth";
//import { setToken } from "../../utils/auth";

//check user authorization. If user is authorized allow access to change the db. Otherwise only allow access to view the data
const LoggedIn: React.FC = () => {
    //const { setAuth } = useAuth();
    //const history = useHistory();

    //const handleLogin = async () => {
    //    try {
    //        const response = await backend.post("/auth/login", {
    //            email: "
    if(LogIn == true){
    return (
        <div>
            <p>Displaying logged in view</p>
        </div>
    );
} else {
    return ( <div>
        <p>Displaying unauthorized view</p>
    </div>);
};

const Moderator: React.FC = () => {
    //const { auth } = useAuth();

    //if (auth) {
    //    return <LoggedIn />;
    //} else {
    //    return <NotLoggedIn />;
    //}
    if(Moderator == true){
        return(
            <div>
                <p>Displaying Moderator view</p>
            </div>
        );
    } else {
        return ( <div>
            <p>Displaying unauthorized view</p>
        </div>);
    }
    };
}

// View of the database, where we can interact and display the data
const Database: React.FC = () => {
    return (
        <div>
            <h1>DataBase View</h1>
            <p>Grab the information from the db</p>
            <p>Display information</p>
            <p>Allow user to interact with the data</p>

            <table>
                <tr><td>Article 1</td><td>Article2</td><td>article3</td></tr>
            </table> 

        </div> //end of div
    );
}; //display the data dynamically, updating information as needed.

export default Database; //export the database view, so it can be used in other files