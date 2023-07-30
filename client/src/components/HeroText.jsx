import React, { useState } from 'react'; // Import useState

import PaypalPayment from './payment/PaypalPayment';

function HeroText() {
  const [showPayment, setShowPayment] = useState(false); // State to control the visibility of the PaypalPayment component

  function callPayment() {
    setShowPayment(true); // Set showPayment to true when the button is clicked
  }

  return (
    <div className='flex flex-col gap-8 items-start w-[80%]'>
      <h1 className='text-5xl font-bold'>Play Station ® 4</h1>
      <p className='text-[#999999]'>
        Choose Your PS4™ Console. Your Choice Of Power. The Same Amazing Games And Entertainment. Discover PS4™ Games
        Created By PlayStation® Studios That You Can't Play Anywhere Else. More Ways To Play. Choose Your Console.
      </p>
      <strong className='text-2xl font-semibold'>$250.00</strong>
      {showPayment ? (
        <PaypalPayment />
      ) : (
        <button onClick={callPayment} className='border border-black hover:bg-[#0a37de] hover:text-white px-8 py-3'>
          Buy Now
        </button>
      )}
    </div>
  );
}

export default HeroText;
