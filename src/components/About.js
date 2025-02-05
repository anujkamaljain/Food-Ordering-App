import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props) {
        super(props);
        
    }

    render() {
         return (
           <div>
             <div className="mt-3 mb-3 flex w-full justify-center transition-colors duration-200 ease-in hover:text-orange-400">
               <h1 className="text-2xl font-extrabold">About Us</h1>
             </div>
             <UserClass name={"Anuj Kamal Jain"} location={"Jaipur"} />
           </div>
         );
    }
}

export default About;