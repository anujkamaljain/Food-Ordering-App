import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
    };
  }

  async componentDidMount() {
    const Data = await fetch(
      "https://proxy.cors.sh/https://api.github.com/users/anujkamaljain",
    );
    const json = await Data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this?.state?.userInfo;
    return (
      <div className="h-66 border-t border-b border-black bg-white p-2 text-center font-semibold text-orange-400 transition-all duration-100 ease-in hover:z-0 hover:border-t-2 hover:border-b-2 hover:bg-orange-500 hover:text-white hover:shadow-[1px_2px_2px_black]">
        <div className="mt-2 flex w-full justify-center">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png  "
            }
            alt="avatar"
            className="mb-0 h-[150px] w-[150px] rounded-full opacity-100"
          ></img>
        </div>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Email: anujkamaljain1234@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
