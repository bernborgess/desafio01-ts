import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { RiggedAccount } from './class/RiggedAccount'

//? Teste com peopleAccount
const peopleAccount =
  new PeopleAccount(1, 'Nath', 10)

console.log(peopleAccount.getName())
peopleAccount.getBalance()
peopleAccount.deposit(10)
peopleAccount.withdraw(3)
peopleAccount.getBalance()

//? Teste com companyAccount
const companyAccount =
  new CompanyAccount('DIO', 20)

console.log(companyAccount.getName())
companyAccount.getBalance()
companyAccount.deposit(10)
companyAccount.getLoan(300)
companyAccount.withdraw(3)
companyAccount.getBalance()


//? Teste com riggedAccount
const riggedAccount =
  new RiggedAccount('Scam', 31)

console.log(riggedAccount.getName())
riggedAccount.getBalance()
riggedAccount.deposit(10)
riggedAccount.withdraw(3)
riggedAccount.getBalance()

