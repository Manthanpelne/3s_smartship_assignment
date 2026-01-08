// components/VesselNode.tsx

import { Handle, Position, type NodeProps } from '@xyflow/react';
import {type VesselNodeData } from "../types";

export const VesselNode = ({ data }: NodeProps<VesselNodeData>) => {
  const styles: Record<string, string> = {
    Equipment: 'bg-blue-600 text-white border-blue-700',
    Engine: 'bg-blue-100 text-blue-800 border-blue-300',
    System: 'bg-red-500 text-white border-red-600',
    // Add other types from Figma
  };

  return (
    <div className={`px-4 py-2 shadow-lg rounded-md border-2 min-w-[150px] ${styles[data.type]}`}>
      {/* Target handle on the left */}
      <Handle type="target" position={Position.Left} className="w-2 h-2 bg-gray-400!" />
      
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold uppercase tracking-tight">{data.label}</span>
        <button className="ml-2 bg-white/20 hover:bg-white/40 rounded px-1 text-xs">
          +
        </button>
      </div>

      {/* Source handle on the right */}
      <Handle type="source" position={Position.Right} className="w-2 h-2 bg-gray-400!" />
    </div>
  );
};