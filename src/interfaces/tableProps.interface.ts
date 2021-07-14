import IOrderData from './orderData.interface';

export default interface IEnhancedTableProps {
  classes: any;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IOrderData
  ) => void;
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
}
