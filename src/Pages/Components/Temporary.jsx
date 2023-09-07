import React, { useState } from 'react';

const Temporary = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openDiv = () => {
      setIsOpen(true);
    };
  
    const closeDiv = () => {
      setIsOpen(false);
    };

    return (
        <div className="App">
             <button onClick={isOpen ? closeDiv : openDiv}>
                {isOpen ? 'Close Div' : 'Open Div'}
             </button>
            {isOpen && <div className="bg-red-500 p-10 mt-10">This is the toggled div.</div>}
        </div>
    );
};

export default Temporary;