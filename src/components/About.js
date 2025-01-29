import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props) {
        super(props);
        
    }

    render() {
         return (
           <div>
             <div className="flex w-full justify-center mt-3 mb-3">
               <h1 className="text-3xl transition-colors duration-200 ease-in hover:text-orange-400">
                 About Us
               </h1>
             </div>
             <UserClass name={"Anuj Kamal Jain"} location={"Jaipur"} />
           </div>
         );
    }
}

export default About;