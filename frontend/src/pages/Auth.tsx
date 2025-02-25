import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Login = ()=>
    {
        return <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div>
                <Auth/>
            </div>
            <div className="hidden lg:block">
            <Quote/>
            </div>
        </div>
    }