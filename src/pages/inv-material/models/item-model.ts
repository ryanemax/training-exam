export interface Item {
  objectId?:string;
  code: string;
  uom: string;
  description: string;
  count: number;
  updatedAt?:string;
  createdAt?:string;
}