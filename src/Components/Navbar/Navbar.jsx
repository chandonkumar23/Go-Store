import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CottageIcon from '@mui/icons-material/Cottage';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './LoginFrom/Login';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full bg-white shadow-md z-50 relative">
      <div className='p-4'>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
           <img src="https://i.ibb.co/6cwPq6zj/logo.png" alt="logo" />
          </div>

          {/* Right icons and Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-12 items-center">
              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center"> <CottageIcon /> <h3 className="text-lg">Home</h3></div>

                {/* Dropdowns */}
                {[
                  {
                    title: 'Tablets',
                    content: (
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Brands</h4>
                          <ul className="space-y-2">
                            <li>Samsung</li>
                            <li>Apple</li>
                            <li>Huawei</li>
                            <li>Lenovo</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Operating System</h4>
                          <ul className="space-y-2">
                            <li>Android</li>
                            <li>iOS</li>
                            <li>Windows</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Accessories</h4>
                          <ul className="space-y-2">
                            <li>Tablet Covers</li>
                            <li>Stylus Pens</li>
                            <li>Screen Protectors</li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: 'Joomla!',
                    content: (
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Extensions</h4>
                          <ul className="space-y-2">
                            <li>Modules</li>
                            <li>Plugins</li>
                            <li>Templates</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Resources</h4>
                          <ul className="space-y-2">
                            <li>Documentation</li>
                            <li>Community</li>
                            <li>Support Forum</li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                  {
                    title: 'Blog',
                    content: (
                      <ul className="space-y-2">
                        <li>Latest Posts</li>
                        <li>Tech News</li>
                        <li>Tips & Tutorials</li>
                        <li>Product Reviews</li>
                      </ul>
                    ),
                  },
                  {
                    title: 'Pages',
                    content: (
                      <ul className="space-y-2">
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                      </ul>
                    ),
                  },
                  {
                    title: 'Joomshopping',
                    content: (
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Categories</h4>
                          <ul className="space-y-2">
                            <li>Electronics</li>
                            <li>Clothing</li>
                            <li>Home & Garden</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Shop Features</h4>
                          <ul className="space-y-2">
                            <li>Cart System</li>
                            <li>Checkout</li>
                            <li>Shipping Options</li>
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                ].map(({ title, content }) => (
                  <div className="relative group" key={title}>
                    <div className="flex gap-1 items-center cursor-pointer">
                      <h3 className="text-lg">{title}</h3>
                      <KeyboardArrowDownIcon />
                    </div>
                    <div className="absolute top-full left-0 mt-2 bg-white p-6 shadow-2xl rounded-md opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 min-w-[300px]">
                      {content}
                    </div>
                  </div>
                ))}

                <h3 className="text-lg">Contact</h3>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex gap-4 items-center">
              <SearchIcon style={{ width: 30, height: 30, color: '#d44145' }} />
              <AccountCircleIcon style={{ width: 30, height: 30, color: '#d44145' }} />
              <div className='hidden md:block cursor-pointer' onClick={handleOpen}>
                <h3 className='font-semibold'>Login <br /><span className='text-sm text-gray-400'>or Register</span></h3>
              </div>
              <AddShoppingCartIcon style={{ width: 30, height: 30, color: '#d44145' }} />
              <div className='hidden md:block'>
                <h3 className='font-semibold'>My Cart <br /><span className='text-sm text-gray-400'>0 items - $0.00</span></h3>
              </div>

              {/* Hamburger Icon */}
              <div className="lg:hidden block">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Section */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-5 flex flex-col gap-4">
            <div className="flex flex-col gap-3 text-base">
              <div className="flex items-center gap-2"><CottageIcon /> Home</div>
              {["Tablets", "Joomla!", "Blog", "Pages", "Joomshopping"].map((item) => (
                <div className="flex items-center gap-2" key={item}>{item} <KeyboardArrowDownIcon /></div>
              ))}
              <div className="flex items-center gap-2">Contact</div>
            </div>
          </div>
        )}
      </div>
      <Login open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
}
