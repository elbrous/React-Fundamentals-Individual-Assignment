// src/Layout.js
import React, { useState } from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Image from './components/Image';
import Navbar from './components/Navbar';

const Layout = () => {
 const [showText, setShowText] = useState(false);

 const handleClick = () => {
    setShowText(!showText);
 };

 return (
    <div>
      <Navbar />
      <Image />
      <Button handleClick={handleClick} text={showText ? 'Hide text' : 'Show text'} />
      <Text showText={showText} />
    </div>
 );
};

export default Layout;