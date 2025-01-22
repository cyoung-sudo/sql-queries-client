export type TRisk = "low" | "mid" | "high";

export interface IEmployee {
  eID: string;
  firstName: string;
  lastName: string;
  startDate: string;
  salary: number;
  risk: TRisk;
  remote: boolean;
};