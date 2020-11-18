import React        from 'react'
import                   '../Registration/Registerpage.css'
import InputTag     from '../Reusabletags/InputTag'
import SubmitButton from '../Reusabletags/SubmitButton'
import {toast}      from 'react-toastify'
import GoogleLogin  from 'react-google-login';
import Userstore    from '../stores/Userstore'
import                   'react-toastify/dist/ReactToastify.css'
import FacebookLogin from 'react-facebook-login';
toast.configure()

class Registerpage extends React.Component{
    constructor(props){
        super(props);
        this.state={
          name            :'',
          username        :'',
          password        :'',
          buttonDisabled  : false,
          registeremail   :'',
          registerpassword:'',
          registername    :''
        }
      }
      setInputValue(property,val)
      {
        val=val.trim();
        if(val.length > 30){
          return;
        }
        this.setState({
          [property]: val
        })
      }
      resetForm(){
        this.setState({
            username        :'',
            password        :'',
            buttonDisabled  : false,
            registeremail   :'',
            registerpassword:'',
            registername    :''
        })
      }
      logincontent(){
        document.getElementById('logincredentials').style.display ="block";
        document.getElementById('signcredentials').style.display  ="none";
      }
      signcontent(){
        document.getElementById('logincredentials').style.display ="none";
        document.getElementById('signcredentials').style.display  ="block";
      }
      async doLogin(){
        if(!this.state.username){
          toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_RIGHT})
          return;
        }
    
        if(!this.state.password){
          toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_RIGHT})
          return;
        }
    
        if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(this.state.password)==false)
        {
          toast.error('EXPECTED PATTERN NOT MATCHED',{position: toast.POSITION.TOP_CENTER})
          return;
        }
        
    

        try{
          let res = await fetch('/login',{
            method:'post',
            headers:{
              'Accept':'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
          });
          let result = await res.json();
          if(result && result.success){
            toast.error('SUCCESSFULLY LOGGED IN',{position: toast.POSITION.TOP_CENTER});
            Userstore.username    = result.username;
            Userstore.isLoggedIn  = true;
            Userstore.showlogin   =false;
            
          }
          else if(result && result.success === false){
            this.resetForm();
            toast.error(result.msg,{position: toast.POSITION.TOP_CENTER})
          }
        }
        catch(e){
          console.log(e);
          this.resetForm();
        }
    }
    async doSign(){
      if(!this.state.registername){
        toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_RIGHT})
        return;
      }
      if(!this.state.registeremail){
        toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_RIGHT})
        return;
      }
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.registeremail)==false)
      {
        toast.info('ENTER VALID EMAIL ADDRESS',{position: toast.POSITION.TOP_RIGHT})
        return;
  
      }
  
      if(!this.state.registerpassword){
        toast.error('ALL FIELDS ARE REQUIRED',{position: toast.POSITION.TOP_RIGHT})
        return;
      }
  
      if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(this.state.registerpassword)==false)
      {
        toast.error('EXPECTED PATTERN NOT MATCHED',{position: toast.POSITION.TOP_CENTER})
        return;
      }
      try{
        let res = await fetch('/signup',{
          method:'post',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username  : this.state.registername,
            password  : this.state.registerpassword,
            email     : this.state.registeremail
          })
        });
        let result = await res.json();
        if(result && result.success){

          toast.error(result.msg,{position: toast.POSITION.TOP_CENTER});
  

        }
        else if(result && result.success === false){
          this.resetForm();
          toast.error(result.msg,{position: toast.POSITION.TOP_CENTER})
        }
      }
      catch(e){
        console.log(e);
        this.resetForm();
      }
      
    }
    render(){
      const responseGoogle=response=>{
        console.log(response);
        console.log(response.profileObj.name);
        Userstore.username=response.profileObj.name;
        toast.info("LOGGED IN USING GOOGLE ",{position: toast.POSITION.TOP_RIGHT})

        Userstore.isLoggedIn=true;
        Userstore.showlogin =false;

        
      }

      const responseFacebook = (response) => {
        console.log(response);
        Userstore.username=response.name;
        toast.info("LOGGED IN USING FACEBOOK "+Userstore.username,{position: toast.POSITION.TOP_RIGHT})
        Userstore.isLoggedIn=true;
        Userstore.showlogin =false;


      }
      const componentClicked = (response) => {
        console.log(response);
      }
        return(
            <div className='container registration'>
                <div className='register-text'>Register / Login</div>
                  <div className='singleaddon'>
                    <GoogleLogin
                      clientId="3548792767-pt11kgjnt2i0t2jg250ssku9afpmuuc0.apps.googleusercontent.com"
                      render={renderProps => (
                      <button className='google' onClick={renderProps.onClick} disabled={renderProps.disabled}>GOOGLE LOGIN</button>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                    />

                    <FacebookLogin
                      appId="313366446597081"
                      autoLoad={false}
                      fields="name,email,picture"
                      onClick={componentClicked}
                      cssClass="google"
                      textButton="Facebook LOGIN"
                      callback={responseFacebook} />               
                  </div>
                  <div class="w3-bar m-5">
                    <button class="w3-bar-item w3-button w3-black" onClick={()=>this.logincontent()}>LOGIN</button>
                    <button class="w3-bar-item w3-button w3-black ml-5" onClick={()=>this.signcontent()}>REGISTER</button>
                  </div>
                  <div className='row m-5'>
                    <div className='col-lg-6 col-md-6 col-sm-6 ' id='logincredentials'>
                          <div class="control-group">
                                    <label class="control-label">Username</label>
                                    <div class="controls">
                                        <InputTag
                                            type='text'
                                            className='input-xlarge'
                                            placeholder='Enter your username'
                                            value={this.state.username ? this.state.username : ''}
                                            onChange={ (val) => this.setInputValue('username',val) }/>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Password</label>
                                        <div class="controls">
                                        <InputTag
                                            type='password'
                                            className='input-xlarge'
                                            placeholder='Enter your password'
                                            value={this.state.password ? this.state.password : ''}
                                            onChange={ (val) => this.setInputValue('password',val) }/>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                    <SubmitButton
                                        text='LOGIN INTO YOUR ACCOUNT'
                                        disabled={this.state.buttonDisabled}
                                        onClick={ () => this.doLogin()}
                                    />                                        
                                    <hr/>
                                    <p class="reset">Recover your <a tabindex="4" href="#" title="Recover your username or password">username or password</a></p>
                                    </div>
                    </div>
                    
                    <div className='col-lg-6 col-md-6 col-sm-6' id='signcredentials'>

                                <div class="control-group">
                                        <label class="control-label">Username</label>
                                        <div class="controls">
                                        <InputTag
                                            type='text'
                                            className='input-xlarge'
                                            placeholder='Enter your username'
                                            value={this.state.registername ? this.state.registername : ''}
                                            onChange={ (val) => this.setInputValue('registername',val) }/>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Email Address</label>
                                        <div class="controls">
                                        <InputTag
                                            type='text'
                                            className='input-xlarge'
                                            placeholder='Enter your email'
                                            value={this.state.registeremail ? this.state.registeremail : ''}
                                            onChange={ (val) => this.setInputValue('registeremail',val) }/>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Password</label>
                                        <div class="controls">
                                        <InputTag
                                            type='password'
                                            className='input-xlarge'
                                            placeholder='Enter your password'
                                            value={this.state.registerpassword ? this.state.registerpassword : ''}
                                            onChange={ (val) => this.setInputValue('registerpassword',val) }/>
                                        </div>
                                    </div>
                      
                                    <div class="control-group">
                                        <p>Now that we know who you are. I'm not a mistake! In a comic, you know how you can tell who the arch-villain's going to be?</p>
                                    </div>
                                    <hr/>
                                    <div class="actions">      
                                    <SubmitButton
                                        text='CREATE YOUR ACCOUNT'
                                        disabled={this.state.buttonDisabled}
                                        onClick={()=>this.doSign()}
                                    /></div>
                        </div>				
                    </div>
                </div>
        )
    }
}
export default Registerpage;