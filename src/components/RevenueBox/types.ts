import { IStackProps } from "native-base";

export interface RevenueBoxProps extends IStackProps {
  grossRevenue?: number;
  chargedSubscriptions?: number;
  totalClients?: number;
}
