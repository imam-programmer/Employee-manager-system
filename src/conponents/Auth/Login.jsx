import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit done");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-2xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log("email is",email)
             console.log("passwor is",password)
             setEmail("")
             setPassword("")
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}
             required
            className="text-white outline-none bg-transparent placeholder:text-white border-2 border-emerald-600 text-xl rounded-full py-4 px-5" 
            type="email"
            placeholder="Enter your email"
          />
          <input value={password} onChange={(e)=>{
setPassword(e.target.value)
          }}
            required
            className="text-white outline-none mt-4 bg-transparent placeholder:text-white border-2 border-emerald-600 text-xl rounded-full py-4 px-5"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 w-full text-white outline-none  bg-emerald-600 text-xl rounded-full py-4 px-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
