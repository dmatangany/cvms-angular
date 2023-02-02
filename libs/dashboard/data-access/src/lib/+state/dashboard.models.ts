export interface GroupedMembers {
  additionalProp1: number;
  additionalProp2: number;
  additionalProp3: number;
}

export interface TotalAutomatedAmountCurrentMonth {
  amount: string;
  currencyCode: string;
}

export interface TotalAutomatedAmountCurrentYear {
  amount: string;
  currencyCode: string;
}

export interface TotalAutomatedAmountInHistory {
  amount: string;
  currencyCode: string;
}

export interface DashboardEntity {
  groupedMembers: GroupedMembers;
  inActiveMembers: number;
  newCurrentYearMembers: number;
  totalAutomatedAmountCurrentMonth: TotalAutomatedAmountCurrentMonth[];
  totalAutomatedAmountCurrentYear: TotalAutomatedAmountCurrentYear[];
  totalAutomatedAmountInHistory: TotalAutomatedAmountInHistory[];
  totalCurrentMonthSubscriptions: number;
  totalCurrentYearSubscriptions: number;
  totalMembers: number;
  totalSubscriptions: number;
}
