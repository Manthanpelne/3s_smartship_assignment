import { type Node, type Edge } from '@xyflow/react';

export const transformHierarchyToFlow = (
  item: any,
  x = 0,
  y = 0,
  level = 0,
  nodes: Node[] = [],
  edges: Edge[] = []
) => {
  const id = item.id;
  
  // 1. Add the current item as a Node
  nodes.push({
    id: id,
    type: 'vesselNode', // This must match your nodeTypes key
    data: { label: item.label, type: item.type },
    position: { x: level * 300, y: y }, // Horizontal spacing of 300px
  });

  // 2. If it has children, process them
  if (item.children) {
    item.children.forEach((child: any, index: number) => {
      // Create an edge from parent to child
      edges.push({
        id: `e-${id}-${child.id}`,
        source: id,
        target: child.id,
        type: 'smoothstep',
      });

      transformHierarchyToFlow(child, level * 300, y + (index * 100), level + 1, nodes, edges);
    });
  }

  return { nodes, edges };
};