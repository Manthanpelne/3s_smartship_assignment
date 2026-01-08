import { useMemo } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import { transformHierarchyToFlow } from '../utils/transformData';
import { VesselNode } from './VesselNode';
import {initialHierarchy} from "../data/mockData"
const nodeTypes = { vesselNode: VesselNode };
import '@xyflow/react/dist/style.css';

export default function VesselTree() {
  // We use useMemo so the transformation only happens once
  const { nodes: flowNodes, edges: flowEdges } = useMemo(() => {
    return transformHierarchyToFlow(initialHierarchy);
  }, []);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={20} color="#f8fafc" />
        <Controls />
      </ReactFlow>
    </div>
  );
}