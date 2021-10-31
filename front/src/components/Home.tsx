import React from 'react';
 type homeProps = {
     fullName:String
 }
const Home = ({fullName}:homeProps) => {
    return (
        <div>
            <h1>{fullName}  به سایت ما خوش امدید</h1>
        </div>
    );
}

export default Home;
