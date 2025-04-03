export type Payment = {
  id?: string;
  name: string;
  balance: number;
  email: string;
  registration: string;
  status: "pending" | "processing" | "success" | "failed";
  action: string;
  createdAt?: string;
};
