import { ReactNode } from "react";

export interface IOrder {
  id: number;
  user: IUser;
  createdAt: string;
  status: IOrderStatus;
  adress: IAddress;
  amount: number;
}

export interface IUser {
  id: number;
  fullName: string;
  gender: string;
  gsm: string;
  createdAt: string;
  addresses: IAddress[];
}

export interface IOrderStatus {
  id: number;
  text: "Pending" | "Ready" | "On The Way" | "Delivered" | "Cancelled";
}

export interface IAddress {
  text: string;
  coordinate: [string, string];
}

export interface IChartDatum {
  date: string;
  value: string;
}

export interface IChart {
  data: IChartDatum[];
  total: number;
  trend: number;
}

export interface IProduct {
  id: number;
  name: string;
  isActive: boolean;
  description: string;
  createdAt: string;
  price: number;
  category: ICategory;
  stock: number;
}

export interface ICategory {
  id: number;
  title: string;
  isActive: boolean;
}

export type TTab = {
  id: number;
  label: string;
  content: JSX.Element;
};

export type TLineData = { date: string; value: number; oldValue: number };

export interface IStatItem {
  title: string;
  value: string;
  icon: ReactNode;
  percentageDifference: string;
  isIncreased: boolean;
  isSelected: boolean;
  description: string;
}

export interface IOldData {
  date: string;
  value: string;
}

export type TResponseData<T> = T[];
