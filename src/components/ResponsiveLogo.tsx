import React from 'react';
import Image from 'next/image';

interface ResponsiveLogoProps {
  mobileSrc: string;
  desktopSrc: string;
  altText: string;
  mobileWidth: number;
  mobileHeight: number;
  desktopWidth: number;
  desktopHeight: number;
}

const ResponsiveLogo: React.FC<ResponsiveLogoProps> = ({
  mobileSrc,
  desktopSrc,
  altText,
  mobileWidth,
  mobileHeight,
  desktopWidth,
  desktopHeight
}) => {
  return (
    <div className="relative">
      <div className="sm:hidden">
        <Image
          src={mobileSrc}
          alt={altText}
          width={mobileWidth}
          height={mobileHeight}
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={desktopSrc}
          alt={altText}
          width={desktopWidth}
          height={desktopHeight}
        />
      </div>
    </div>
  );
};

export default ResponsiveLogo;