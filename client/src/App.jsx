import React from 'react';
import Navlinks from './components/Navlinks';
import HeroText from './components/HeroText';
import LeftFooter from './components/LeftFooter';
import Navicons from './components/Navicons';
import ImageContainer from './components/ImageContainer';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalPayment from './components/payment/PaypalPayment';

function App() {
  const initialOptions = {
    clientId: "AU0La8M_EMSphmQqQHGFvbIMcdzc5PaaJL7AVD_5vUEwuXKNh10MPaSrqdBMCO2JIfuI-P20_PylVyjS",
    currency: "USD", // Set the currency to USD
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <div className='w-screen h-screen font-alata flex'>
        <div className='h-full flex-1 w-1/2 pl-20 pr-24 flex flex-col justify-between'>
          <Navlinks />
          <HeroText />
        
          <LeftFooter />
        </div>
        <div className='h-full flex-1 w-1/2 bg-[#1f1e1e] pr-40 flex flex-col justify-between relative'>
          <Navicons />
          <ImageContainer />
          <div></div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
