import React from "react";
import LhsMenu from "./LhsMenu";
import Header from "./Header";
import Page from "./Page";

export default function Main() {

    return(
        <div className='main'>

            <LhsMenu></LhsMenu>

            <div className="page-area">

                <Header></Header>
                <Page></Page>

            </div>

            
            
            

        </div>
    )

    
}