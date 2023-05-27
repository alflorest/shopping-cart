export const NavBarComponent =()=>{
    return (
    <>
    <nav className="bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">  
                    <span className="text-white font-bold text-lg">SHOPPING CART</span>
                </div>
                <div className="flex">
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                </div>
            </div>
        </div>
    </nav>
    </>   
  );
};
