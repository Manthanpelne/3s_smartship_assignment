// types.ts
export interface VesselNodeData {
  label: string;
  type: 'Equipment' | 'Engine' | 'System' | 'Assembly' | 'Component';
  isExpanded?: boolean;
}