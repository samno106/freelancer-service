import logo from "../../assets/images/logo.png";

const Logo = ()=>{

    return (
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-32"  />
        </div>
    );
}

export default Logo