import logo from "../../assets/images/logo.png";

const Logo = ()=>{

    return (
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="md:w-32 w-[60%]"  />
        </div>
    );
}

export default Logo