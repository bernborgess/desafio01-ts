export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  deposit = (depositAmount: number): void => {
    if (depositAmount <= 0)
      throw new Error('Valor de deposito invalido')

    if (this.validateStatus()) {
      this.balance += depositAmount
      console.log('Voce depositou')
    }
  }

  withdraw = (withdrawAmount: number): void => {
    if (withdrawAmount <= 0)
      throw new Error('Valor de retirada invalido')

    if (this.validateStatus()) {
      this.balance -= withdrawAmount
      console.log('Voce sacou')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
