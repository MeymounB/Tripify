// RedirectButton.tsx

import Link from 'next/link';
import React from 'react';
import { Button } from "@/components/ui/button"


interface RedirectButtonProps {
  targetPage: string;
  buttonText: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ targetPage, buttonText }) => {
  return (
    <Link href={targetPage}>
        <Button variant="outline">{buttonText}</Button>
    </Link>
  );
};

export default RedirectButton;
