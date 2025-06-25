import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CottageIcon from '@mui/icons-material/Cottage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import Login from './LoginFrom/Login';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className='p-4'>
        <div className="flex justify-between items-center">
          <div>
            <div className='flex gap-12 items-center'>
              <div>
                <img src="https://i.ibb.co/6cwPq6zj/logo.png" alt="logo" />
              </div>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center"> <CottageIcon /> <h3 className="text-lg">Home</h3></div>

                {/* Tablets with dropdown */}
                <div className="relative group">
                  <div className="flex gap-1 items-center cursor-pointer">
                    <h3 className="text-lg">Tablets</h3>
                    <KeyboardArrowDownIcon />
                  </div>

                  {/* Animated Dropdown modal */}
                  <div className="absolute top-full left-0 mt-2 bg-white p-8 shadow-2xl rounded-md 
  opacity-0 translate-y-4 invisible 
  group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
  transition-all duration-300 ease-out z-50 min-w-[750px]">

                    <div className='mb-5'>
                      <div className='flex gap-20 justify-center items-center'>
                        <div>
                          <div>
                            <h2 className='text-lg font-semibold mb-2'>Computer</h2>
                          </div>
                          <div className='text-gray-500'>
                            <h2 className=''>Accessorices</h2>
                            <h2 className=''>Cameras</h2>
                            <h2 className=''>Electronics</h2>
                            <h2 className=''>Game & Consoles</h2>
                            <h2 className=''>Headphones</h2>
                            <h2 className=''>Laptop</h2>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 className='text-lg font-semibold mb-2'>Watches</h2>
                          </div>
                          <div className='text-gray-500'>
                            <h2 className=''>Automatic</h2>
                            <h2 className=''>Casual</h2>
                            <h2 className=''>Creamic</h2>
                            <h2 className=''>Chronograph</h2>
                            <h2 className=''>Kevincons</h2>
                            <h2 className=''>Pastrami</h2>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 className='text-lg font-semibold mb-2'>Smartphone</h2>
                          </div>
                          <div className='text-gray-500'>
                            <h2 className=''>Apple</h2>
                            <h2 className=''>Dell</h2>
                            <h2 className=''>Esdipiscing</h2>
                            <h2 className=''>Scanners</h2>
                            <h2 className=''>Oppo</h2>
                            <h2 className=''>Sony</h2>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 className='text-lg font-semibold mb-2'>Electronics</h2>
                          </div>
                          <div className='text-gray-500'>
                            <h2 className=''>Apple</h2>
                            <h2 className=''>Consectetur</h2>
                            <h2 className=''>Laptop</h2>
                            <h2 className=''>Monitors</h2>
                            <h2 className=''>Printers</h2>
                            <h2 className=''>Scanners</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                      <div>
                        <img src="https://i.ibb.co/svGKhFVg/banner-1.jpg" alt="banner-1" />
                      </div>
                      <div>
                        <img src="https://i.ibb.co/HpbvnW6H/banner-2.jpg" alt="banner-2" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Joomla! with dropdown */}
                <div className="relative group">
                  <div className="flex gap-1 items-center cursor-pointer">
                    <h3 className="text-lg">Joomla!</h3>
                    <KeyboardArrowDownIcon />
                  </div>

                  {/* Animated Dropdown modal */}
                  <div className="absolute top-full left-0 mt-2 bg-white p-5 shadow-lg rounded-md 
    opacity-0 translate-y-4 invisible 
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
    transition-all duration-300 ease-out z-50 min-w-[750px]
  ">
                    <div>
                      <div className='mb-5'>
                        <div className='flex gap-20 justify-start '>
                          <div>
                            <div>
                              <h2 className='text-lg font-semibold mb-2'>Content Component</h2>
                            </div>
                            <div className='text-gray-500'>
                              <h2 className=''>Single Article</h2>
                              <h2 className=''>Artice Category Blog</h2>
                              <h2 className=''>Article Category List</h2>
                              <h2 className=''>Featured Article</h2>
                            </div>
                          </div>
                          <div>
                            <div>
                              <h2 className='text-lg font-semibold mb-2'>User Component</h2>
                            </div>
                            <div className='text-gray-500'>
                              <h2 className=''>Login Form</h2>
                              <h2 className=''>Users Profile</h2>
                              <h2 className=''>Edit User Profile</h2>
                              <h2 className=''>Registration Form</h2>
                            </div>
                          </div>

                          <div>
                            <div>
                              <h2 className='text-lg font-semibold mb-2'>Others Components</h2>
                            </div>
                            <div className='text-gray-500'>
                              <h2 className=''>Search Components</h2>
                              <h2 className=''>Smart Search</h2>
                              <h2 className=''>SP Simple Portfolio</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="flex gap-1 items-center cursor-pointer">
                    <h3 className="text-lg">Blog</h3>
                    <KeyboardArrowDownIcon />
                  </div>

                  {/* Animated Dropdown modal */}
                  <div className="absolute top-full left-0 mt-2 bg-white p-4 shadow-lg rounded-md 
    opacity-0 translate-y-4 invisible 
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
    transition-all duration-300 ease-out z-50 min-w-[200px]
  ">
                    <ul className="space-y-2 text-gray-700">
                      <div className='text-gray-500'>
                        <li className="hover:text-red-500 cursor-pointer">2 Columns Grid</li>
                        <li className="hover:text-red-500 cursor-pointer">3 Columns Grid</li>
                        <li className="hover:text-red-500 cursor-pointer">4 Columns Grid</li>
                        <li className="hover:text-red-500 cursor-pointer">Blog Style List</li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="relative group">
                  <div className="flex gap-1 items-center cursor-pointer">
                    <h3 className="text-lg">Pages</h3>
                    <KeyboardArrowDownIcon />
                  </div>

                  {/* Animated Dropdown modal */}
                  <div className="absolute top-full left-0 mt-2 bg-white p-4 shadow-lg rounded-md 
    opacity-0 translate-y-4 invisible 
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
    transition-all duration-300 ease-out z-50 min-w-[200px]
  ">
                    <ul className="space-y-2 text-gray-700">
                      <div className='text-gray-500'>
                        <li className="hover:text-red-500 cursor-pointer">404 Page</li>
                        <li className="hover:text-red-500 cursor-pointer">About Us</li>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="relative group">
                  <div className="flex gap-1 items-center cursor-pointer">
                    <h3 className="text-lg">Joomshopping</h3>
                    <KeyboardArrowDownIcon />
                  </div>

                  {/* Animated Dropdown modal */}
                  <div className="absolute top-full left-0 mt-2 bg-white p-4 shadow-lg rounded-md 
    opacity-0 translate-y-4 invisible 
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
    transition-all duration-300 ease-out z-50 min-w-[400px]
  ">
                    <div>
                      <div className='flex gap-20 justify-start mb-5'>
                        <div>
                          <div>
                            <h2 className='text-lg font-semibold mb-2'>Shop Pages</h2>
                          </div>
                          <div className='text-gray-500'>
                            <h2 className=''>Grid Products</h2>
                            <h2 className=''>List Products</h2>
                            <h2 className=''>Detail Products</h2>
                            <h2 className=''>Shop Wishlist</h2>
                            <h2 className=''>Shop Basket</h2>
                            <h2 className=''>Shop Search</h2>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h2 className='text-lg font-semibold mb-2'>Categories</h2>
                          </div>
                          <div className='text-gray-500'>
                            <h2 className=''>Tablets</h2>
                            <h2 className=''>Smartphone</h2>
                            <h2 className=''>Accessories</h2>
                            <h2 className=''>Computer</h2>
                            <h2 className=''>Watches</h2>
                            <h2 className=''>Electronics</h2>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img src="https://i.ibb.co/7JD4Lmfg/menu-guide.jpg" alt="menu--guide" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg">Contact</h3>

                {/* You can repeat same pattern for other items like Joomla!, Blog, etc. */}
              </div>

            </div>
          </div>
          <div>
            <div className="flex gap-4 justify-center items-center">
              <SearchIcon style={{ width: 40, height: 40, color: '#d44145' }} />

              <AccountCircleIcon style={{ width: 40, height: 40, color: '#d44145' }} />

              <h3 className='font-semibold cursor-pointer' onClick={handleOpen}>Login <br /><span className='text-sm text-gray-400'>or Register</span> </h3>

              <AddShoppingCartIcon style={{ width: 40, height: 40, color: '#d44145' }} />

              <h3 className='font-semibold'>My Cart <br /><span className='text-sm text-gray-400'>0 items - $0.00</span></h3>
            </div>
          </div>
        </div>
      </div>
      <Login open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
};

export default Navbar;