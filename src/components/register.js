import axios from 'axios';
import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const Register = () => {
    
    const [members, setMembers] = useState('');
    const GetMember = async () => {
        let url = 'http://localhost:4000/api/members';
        let options = {
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        let response = await axios(options);
        let responseOk = response && response.status === 200 && response.statusText === 'OK';
        if(responseOk){
            let members = await response.data;
            console.log(members);
        }
        
        //     // const response = await fetch(url);
        //     // const members = await response.json();
        //     setMembers(members);
        
        //     console.log(members);
        
    }
    useEffect(()=>{
        GetMember();
        setMembers(members);
    },[]);
    return( 
        <>
            <h3>Hello Register</h3>
            <a href="/login">Login</a>
            <a href="/">Back Home</a>
             <div>
                 <ul>
                 { members.map( (member, i)=>{
                    const {member_id,firstname, lastname, email} = member;
                    return (<li key={i}>
                                <h4>{lastname} {firstname}</h4>
                               <h5>{email}</h5>
                            </li>)
                }) }
                 </ul>
             </div>
        </>
    );
}
export default Register;

