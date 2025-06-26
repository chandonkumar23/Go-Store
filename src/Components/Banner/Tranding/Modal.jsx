import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const Modal = ({ open, setOpen,handlClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (open) {
            setTimeout(() => setShow(true), 10); // Slight delay to trigger animation
        } else {
            setShow(false);
        }
    }, [open]);

    if (!open) return null;
    return (
        <div>

            <div className='w-[400px] h-[400px]'>

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-60 ">

                    <div>
                        <div className='flex justify-end'>
                            <CloseIcon onClick ={handlClose} />
                        </div>
                        <iframe width="760" height="415" src="https://www.youtube.com/embed/GDlkCkcIqTs?si=coYE2M93cxyo6Zl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;