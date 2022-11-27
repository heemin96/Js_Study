//정직원과 파트타임직원을 나타내는 클래스 만들어보자
//직원들으 정보:이름,부서이름, 한달 근문 시간
// 매달 지원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원 

class Employee {
    constructor(name, department, hoursPerMonth, payRate){
        this.name = name;
        this.department = department;
        this.hoursPerMonth =hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay(){
        return {
            이름 : this.name, 
            직업 : this.department,
            월급 :  this.hoursPerMonth * this.payRate   
        }   
    }


}

class FullTimeEmployee extends Employee{
    static PAY_RATE=10000;
     constructor(name, department, hoursPerMonth){
      super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE)
     }
}

class PartTimeEmployee extends Employee{
    static PAY_RATE=8000;
    constructor(name, department, hoursPerMonth){
        super(name, department, hoursPerMonth, 8000, PartTimeEmployee.PAY_RATE)
    }

}


const ellie = new FullTimeEmployee('엘리', 's/w', 1)
const bob = new PartTimeEmployee('밥', 's/w', 1)
console.log(ellie.calculatePay())
console.log(bob.calculatePay())

