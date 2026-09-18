import React from 'react';
import '@fontsource/lato';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full bg-[#E53935] text-white text-center py-4 font-[lato]'>
            <p>{currentYear} Divyam Cafe</p>
        </footer>
    );
}

export default Footer;
