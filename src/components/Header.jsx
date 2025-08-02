 import Navigation from "./Navigation";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
    return ( 
        <header 
        className=" w-full h-[8vh] 
        md:h-[10vh]
        lg:h-[18vh] 
        " >
            <div 
            className="h-[50%] w-full flex items-center justify center gap-6 bg-blue-300
            
            ">
                <div className="w-[30%] h-full  flex justify-center gap-2 items-center "> 
                    {/* this contact info willfloat to the left */}
                    <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" 
                        className="  text-1xl font-medium text-gray-600 p-2  "
                        />
                    </a>
                    <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" 
                        className="  text-1xl font-medium text-gray-600 p-2  "
                        />
                    </a>
                    <a href="mailto:umokegerald@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon="fa-brands fa-google-plus" 
                        className="  text-1xl font-medium text-gray-600 p-2 border-0  "
                        />
                    </a>
                </div>
                <div 
                className="w-[70%] flex justify-center h-full gap-6
                md:pl-10
                ">
                    <a 
                    className="h-full w-[50%] flex items-center text-gray-600 font-bold text-1xl
                    md:justify-end md:w-[40%]
                    " 
                    href="mailto:umokegerald@gmail.com">
                        <FontAwesomeIcon icon="fa fa-envelope" />
                        <h2>UmokeGerald@gmail.com</h2>
                    </a>
                    <a 
                     className="h-full w-[50%] flex items-center text-gray-600 font-bold text-1xl
                     md:justify-end md:mr-4 md:w-[40%]
                     " 
                     href="/telephone">
                        <FontAwesomeIcon icon="fa fa-phone"/>
                        <h2>+2349031183272</h2>
                    </a>
                </div>
            </div>

            <Navigation />
        </header>
     );
}
 
export default Header;

