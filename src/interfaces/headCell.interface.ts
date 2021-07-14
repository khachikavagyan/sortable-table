import IOrderData from './orderData.interface';

export default interface IHeadCell {
  disablePadding: boolean;
  id: keyof IOrderData;
  label: string;
  numeric: boolean;
}
