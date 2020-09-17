import React, { useContext, useState } from 'react';
import "./Auth.css"
import Header from '../Header/Header'
import fb from '../../images/icon/fb.png'
import google from '../../images/icon/google.png'
import * as firebase from "firebase/app";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FormGroup } from 'react-bootstrap';

const Auth = () => {
    const [showArea, setShowArea, loggedIn, setLoggedIn, name, setName] = useContext(UserContext)

    const [isSignedUp, setisSignedUp]=useState(false)
    const [submiter, setSubmiter]=useState("")
    const [user, setUser]=useState({})

    const location=useLocation().location?.pathname
    const history=useHistory()

    const formHandler=(event)=>{
        event.preventDefault()
        
        
            if(submiter === "signup") {
            
                user.password == user.confirmationPassword ?
                firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
                .then(res=>{
                setUser({...user,confirmationError:false})

                    setisSignedUp(true)
                })
                .catch(err=>{
                    console.log(err)
                })
                : setUser({...user,confirmationError:true})
        
            }
        
    

        submiter === "signin" &&
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
            
            setLoggedIn(true)
            history.replace(location || "/")
        })
        .catch(err=>{
            console.log(err.message)
        })
        
    }

    const facebookSigninHandler =()=>{
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const currentUser = firebase.auth().currentUser;
            setName(currentUser.displayName)
            setLoggedIn(true)
            history.replace(location || '/')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const googleSigninHandler =()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            setLoggedIn(true)
            history.replace(location || '/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div>
            <Header />
            
            <form onSubmit={formHandler} className="form-group auth-form">
                
                <FormGroup>
                {
                    isSignedUp? <h2 style={{textAlign:"left"}}>Login</h2>
                    : <h2 style={{textAlign:"left"}}>Login</h2>
                }
                    {
                        !isSignedUp && <>
                            <input 
                            onBlur={(event)=>setUser({...user,fname:event.target.value})} type="text" placeholder="First name" required/>
                            <br/>
                            <input 
                            onBlur={(event)=>setUser({...user,lname:event.target.value})}
                            type="text" placeholder="Last name" required/>
                            <br/>
                        </> 
                    }
                    <input onBlur={(event)=>setUser({...user,email:event.target.value})} type="email" placeholder="Email address" required/>
                    <br/>
                    <input onBlur={(event)=>setUser({...user,password:event.target.value})} type="password" placeholder="Password" required/>
                    <br/>

                    {
                        !isSignedUp && <input
                        onBlur={(event)=>setUser({...user,confirmationPassword:event.target.value})}
                         type="password" placeholder="Confirm Password" required/>
                    }


                    {
                        isSignedUp && <div style={{display:"flex", justifyContent:"space-between", fontSize:"13px", fontWeight:"500"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <input id="checkbox"  type="Checkbox" /><label for="checkbox" style={{marginBottom:"6px"}}>Remember me</label>
                        </div>
                        <p style={{color:"orange", cursor:"pointer"}}>Forgot Password</p>
                    </div>
                    }


                    {
                        user.confirmationError && <p style={{color:"red", fontSize:"13px"}}>Doesn't match your password</p>
                    }
                    {
                        isSignedUp ? <input name="signin" onClick={(event)=>setSubmiter(event.target.name)} type="submit" value="Signin"/>
                        : <input name="signup" onClick={(event)=>setSubmiter(event.target.name)} type="submit" value="Signup"/>
                    }
                </FormGroup>
                
                    {
                        isSignedUp ?<>
                        <span>Don't have an account? </span>
                        <span onClick={()=>setisSignedUp(false)} style={{color:"orange",cursor:"pointer"}}>Signup</span>
                    </>
                        
                        :<>
                        <span>Already have an account? </span>
                        <span onClick={()=>setisSignedUp(true)} style={{color:"orange",cursor:"pointer"}}>Login</span>
                        </>
                        
                    } 
            </form>


           <div style={{width:"300px", margin:"auto"}}>
            <p style={{textAlign:"center"}}>---------- Or -----------</p>

                    <div onClick={facebookSigninHandler} className="auth-provider">
                        <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={fb} alt=""/>
                        <p>Continue with Facebook</p>
                    </div>

                    <div onClick={googleSigninHandler} className="auth-provider">
                        <img style={{width:"30px", height:"30px", marginRight:"10px"}} src={google} alt=""/>
                        <p>Continue with Google</p>
                    </div>

                </div>
        </div>
    );
};

export default Auth;