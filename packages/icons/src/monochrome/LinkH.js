import React from 'react';

export default function LinkH(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M10 17H7A5 5 0 0 1 7 7h3a1 1 0 0 1 0 2H7a3 3 0 0 0 0 6h3a1 1 0 0 1 0 2zM17 17H14a1 1 0 0 1 0-2h3a3 3 0 0 0 0-6H14a1 1 0 0 1 0-2h3a5 5 0 0 1 0 10z" />
      <path className="uim-tertiary" d="M15,13H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
    </svg>
  );
}
