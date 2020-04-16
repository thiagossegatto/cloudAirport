import React from 'react';

export default function Cloud({ color }: any) {
  return (
    <svg
      id="Layer_1"
      viewBox="0 0 496 496"
      xmlns="http://www.w3.org/2000/svg"
      fill={color || 'currentColor'}
    >
      <path d="m496 291c0 70.304-57.196 127.5-127.5 127.5h-267c-55.968 0-101.5-45.532-101.5-101.5 0-55.031 44.021-99.974 98.7-101.462-7.616-69.982 49.688-138.038 126.8-138.038 55.784 0 104.362 36.073 121.22 87.856 78.409-13.506 149.28 47.15 149.28 125.644z" />
    </svg>
  );
}
