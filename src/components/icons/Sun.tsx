import React from "react";

import type { IconProps } from "@/lib/types"

export default function Sun({ className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
      {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
      <path d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1zM352 256c0-53-43-96-96-96s-96 43-96 96s43 96 96 96s96-43 96-96zm32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128z" />
    </svg>
  );
}