import { DioAccount } from "./DioAccount";


export class RiggedAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (depositAmount: number): void => {
    super.deposit(depositAmount + 10);
  }

}