// src/components/TechCard.jsx
import React from 'react';

export default function TechCard({ tech, IconComponent, color  }) {
  return (
    <div className="flex items-center space-x-2 p-4 border rounded-lg shadow-sm">
      <IconComponent size={60} color={color} />
      <span className="text-lg font-medium">{tech}</span>
    </div>
  );
}
