// RedirectButton.tsx

import Link from 'next/link';
import React from 'react';

interface RedirectButtonProps {
  targetPage: string;
  buttonText: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ targetPage, buttonText }) => {
  return (
    <Link href={targetPage}>
    
        <button>{buttonText}</button>

    </Link>
  );
};

export default RedirectButton;
