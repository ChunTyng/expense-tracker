import { Timestamp } from 'firebase/firestore';
import { Icon } from 'phosphor-react-native';
import React, { ReactNode } from 'react';
import {
  TextInput,
  TextInputProps,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export type TScreenWrapper = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export type TModalWrapper = {
  style?: ViewStyle;
  children: React.ReactNode;
  bg?: string;
};

export type TaccountOption = {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  routeName?: any;
};

export type TTypo = {
  children: any | null;
  size?: number;
  color?: string;
  fontWeight?: TextStyle['fontWeight'];
  style?: TextStyle;
  textProps?: TextProps;
};

export type TIconComponent = React.Component<{
  height?: number;
  width?: number;
  strokeWidth?: number;
  color?: string;
  fill?: string;
}>;

export type TIcon = {
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  fill?: string;
};

export type THeader = {
  title?: string;
  style?: ViewStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export type TBackButton = {
  style?: ViewStyle;
  iconSize?: number;
};

export type TTransaction = {
  id?: string;
  type: string;
  amount: number;
  category?: string;
  date: Date | Timestamp | string;
  description?: string;
  image?: any;
  uid?: string;
  walletId: string;
};

export type TCategory = {
  label: string;
  value: string;
  icon: Icon;
  bgColor: string;
};
export type TExpenseCategories = {
  [key: string]: TCategory;
};

export type TTransactionList = {
  data: TTransaction[];
  title?: string;
  loading?: boolean;
  emptyListMessage?: string;
};

export type TTransactionItem = {
  item: TTransaction;
  index: number;
  handleClick: Function;
};

export interface TInput extends TextInputProps {
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: React.RefObject<TextInput>;
  //   label?: string;
  //   error?: string;
}

export interface TCustomButton extends TouchableOpacityProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  loading?: boolean;
}

export type TImageUpload = {
  file?: any;
  onSelect: (file: any) => void;
  onClear: () => void;
  containerStyle?: ViewStyle;
  imageStyle?: ViewStyle;
  placeholder?: string;
};

export type TUserType = {
  uid?: string;
  email?: string | null;
  name: string | null;
  image?: any;
} | null;

export type TUserData = {
  name: string;
  image?: any;
};

export type TAuthContextType = {
  user: TUserType;
  setUser: Function;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; msg?: string }>;
  register: (
    email: string,
    password: string,
    name: string,
  ) => Promise<{ success: boolean; msg?: string }>;
  updateUserData: (userId: string) => Promise<void>;
};

export type TResponse = {
  success: boolean;
  data?: any;
  msg?: string;
};

export type TWallet = {
  id?: string;
  name: string;
  amount?: number;
  totalIncome?: number;
  totalExpenses?: number;
  image: any;
  uid?: string;
  created?: Date;
};
