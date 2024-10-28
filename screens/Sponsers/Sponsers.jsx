import React from "react";

// Replace with the actual paths for these assets
import gifbanner from "../../assets/gifbanner.gif"; // Adjust path if needed

export default function Sponsers() {
  return (
    <div className="container-fluid p-0 m-0"  style={{backgroundColor :"#F8F8F4"}}>
      {/* Full-width and height GIF banner that is responsive */}
      <img
        src={gifbanner}
        alt="Header GIF"
        className="w-100 " // Full width and height
      />
    </div>
  );
}
