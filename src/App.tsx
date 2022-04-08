"use strict";
import React from "react" ;
import Header from"./Layouts/Header";
import Main from "./Layouts/Main";

class App extends React.Component {

    render() {

        return(
            <>  
                <Header />
                
                <Main />
            </>
        );

    }
}

export default App;