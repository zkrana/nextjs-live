import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="mx-auto overflow-hidden w-28 h-28 rounded-full mb-4">
      <Image
        src="/profile-photo.jpg"
        width={150}
        height={80}
        alt="User dahsboard picture"
      />
    </div>
  );
}

export default Logo;
