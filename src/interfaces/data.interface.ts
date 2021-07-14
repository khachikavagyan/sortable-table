interface IAddress {
  city: string;
  line1: string;
  line2: string;
  state: string;
  zip: string;
}

interface ICustomer {
  first_name: string;
  last_name: string;
  address: IAddress;
}

interface IOrderDetails {
  date: string;
  value: number;
}

interface IShippingDetails {
  date: string;
}

export default interface IData {
  customer: ICustomer;
  order_details: IOrderDetails;
  order_number: number;
  shipping_details: IShippingDetails;
  status: string;
}
