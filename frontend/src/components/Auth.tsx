import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@vaibhavmittal/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = () => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [SignupInput, setSignupInput] = useState<boolean>(false)
  
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${SignupInput ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.error("Error during authentication:", e);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="mb-6">
              <div className="text-5xl font-bold mb-5">Create an Account</div>
              <div className="text-slate-500 ml-10 text-xl">
                {SignupInput
                  ? "Don't have an Account?"
                  : "Already have an account?"}
                {/* <Link
                  className="pl-3 underline"
                  to={SignupInput ? "/signup" : "/signin"}
                >
                  {type === "signin" ? "Sign up" : "Sign in"}
                </Link> */}
                {
                  SignupInput ? <button onClick={()=>setSignupInput(false)} className="pl-3 underline">Sign in</button> : <button onClick={()=>setSignupInput(true)} className="pl-3 underline">Sign up</button>
                }
              </div>
            </div>
          </div>
          <div className="">
            {SignupInput ? (
              <LabelledInput
                label="Name"
                id="name"
                placeholder="Vaibhav Mittal.."
                onChange={(e) =>
                  setpostInputs((c) => ({ ...c, name: e.target.value }))
                }
              />
            ) : null}

            <LabelledInput
              label="Email"
              id="email"
              placeholder="Vaibhavmittal@gmail.com"
              onChange={(e) =>
                setpostInputs((c) => ({ ...c, email: e.target.value }))
              }
            />

            <LabelledInput
              label="Password"
              id="password"
              type="password"
              placeholder="123456"
              onChange={(e) =>
                setpostInputs((c) => ({ ...c, password: e.target.value }))
              }
            />
            <button
              onClick={sendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {SignupInput ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  id: string;
}

function LabelledInput({ label, placeholder, onChange, type, id }: LabelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-lg text-black font-bold pt-5">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
