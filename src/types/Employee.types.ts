export type TRisk = "low" | "mid" | "high";

export interface IEmployee {
  EID: string;
  firstName: string;
  lastName: string;
  startDate: Date;
  salary: number;
  risk: TRisk;
  remote: boolean;
};