
import React, { Suspense } from 'react';
import Division from './component/Division';
import Headers from './component/Header';
import ServiceAds from './component/adsSection';
import CoordinatorMessage from './component/CoordinatorMessage';

const page = () => {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      
     <Headers></Headers>
     <Division></Division>
     <ServiceAds></ServiceAds>

     <CoordinatorMessage></CoordinatorMessage>
     </Suspense>
    </div>
  );
};

export default page;
