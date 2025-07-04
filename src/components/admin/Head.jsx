
const Head = () => {
    return ( 
        <header className="flex flex-col w-full h-[70px] " >
            <div className="flex flex-row bg-sky-50 h-[70px] w-full items-center text-gray-400">
                <div className="flex flex-row gap-3 ml-5"> 
                    {/* this contact info willfloat to the left */}
                    <a href="/linkedin"><i className="fa fa-linkedin w-2"></i></a>
                    <a href="/facebook"><i className="fa fa-facebook w-2"></i></a>
                    <a href="mailto:umokegerald@gmail.com"><img className="w-5 mt-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO2UvWoCQRDHf9Zaii9g1EKIqTSNEfzIc+UVNJX4LopCHsBGTGdhq+IHmFTKwQjDqndrbpNY7A8Gjtv/zn/2dm7A4/HcOa9AD5gCO4lPedf8TeMCMAIOERFosq7Na8DKwvwUH0DC5clXKvkX0AYqQFKiDHRkbQxkcMhImc+BUoj2EUhb5j3lDKVlnDzM/FasCugpYfDZ+esCpkpYjkh0LSY3aM/YqsXUDwvY/HcB64h9sa/gEtkrVxCrCTvY86b2deMU0DR+wycL87xxdXViMjQGUVgRRWCm9H0ckAeWKuk38A48S2MmZSwHc2KvdAvgAUe8GEVERWBexTE5YGBh3nd58ks0pLMn0mxbee66aDiPx3MXHAFWoax/b2csBQAAAABJRU5ErkJggg==" alt="google-plus" /></a>
                </div>
                <div className="ml-120 flex flex-row gap-4 items-center">
                    {/* this will float to the right */}
                    <a className="flex flex-row gap-2" href="mailto:umokegerald@gmail.com"><i className="fa fa-envelope text-blue-400 m-1"></i><h2>UmokeGerald@gmail.com</h2></a>
                    <a className="flex flex-row gap-2" href="/telephone"><i className="fa fa-phone text-blue-400 m-1"></i><h2>+2349031183272</h2></a>
                </div>
            </div>
        </header>
     );
}
 
export default Head;