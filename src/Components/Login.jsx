import React , {useState} from "react"

const Form1 =()=>{
    
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[loading,setLoading]=useState(false)

    const handleLogin=(event)=>{
        event.preventDefault()
        setLoading(true)
        console.log({email,password})
        //timeout
        setTimeout(()=>{
            setLoading(false)

        },4000)            

    }

 return(
         <>
        
            <div className="grid md:grid-cols-2">
                <div>
                    <h1 className="py-10 text-5xl text-center"> Welcome back</h1>
                    <p className=" text-xl text-center">The Faster you fill up,the faster you get a ticket</p>

                <form  onSubmit={handleLogin} className="p-8 max-w-lg mx-auto ">

                        <label>Email</label><br />
                        <input  type="text" value={email} onChange={(event)=>setEmail(event.target.value)} className="p-2 rounded-lg border border-green-700 w-full mb-4" placeholder="Enter your email" />
                    <br />

                    <label>Password</label><br />

                    <input  type="password" value={password} onChange={(event)=>setPassword(event.target.value)} className="p-2 rounded-lg border border-green-700 w-full mb-4" placeholder="Enter your password " />
                    <br />

                
                    <input type="checkbox" /> Remember me 
                     
                   <input type=""  className=""/> <a href="" className="text-skyblue-300 hover:text-sky-400 ">Forgot Password</a><br />
                    
                    
                    <br />
                
                    {!loading&&<button type="submit"  className="bg-gray-900  text-white w-full h-10"> Sign in</button>}
                    {loading&& <p>loading..</p>} 
                    <br />
                    <br />
                
                    <button type="submit" className="bg-gray-100 border-2 w-full  h-10"> <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJa5OIHC7MIeMonuaMAC6ebD-PwqgmezodUw&usqp=CAU "
                    className="inline-block w-4" /> Signin with google</button>
                  <br />
                  <p className="mt-9 text-center">Don't have an account?<a href="" className="text-sky-400"> Sing Up</a></p>
                  
                    </form>
                    
                </div>

                <div>
                <img className="w-full h-screen" src="https://images.unsplash.com/photo-1538905386057-4a5a580c45a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
            </div>

    
        </>

        
      )
}

      export default Form1;

      
      
