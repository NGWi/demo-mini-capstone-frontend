import { useState, useEffect } from 'react';

export function FlashMsg(){
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    const storedFlash = localStorage.getItem('flash');
    if (storedFlash) {
      setFlash(storedFlash);
      localStorage.removeItem('flash');
    }
  }, []);

  // Under construction:
  // useEffect(() => {
  //   if (flash) {
  //     setTimeout(() => {
  //       setFlash(null);
  //     }, 3000); // display flash message for 3 seconds
  //   }
  // }, [flash]);

  if (!flash) return null;

  return (
    <div className="flash-message">
      {flash}
    </div>
  );
}