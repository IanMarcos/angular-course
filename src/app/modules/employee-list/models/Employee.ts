export default class Employee {
  private id: string;
  private name: string;
  private surname: string;
  private gender: string;
  private salary: number;

  constructor(id:string, name:string, surname: string, gender: string, salary: number) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.salary = salary;
  }
  
  public getId() : string {
    return this.id;
  }
  public getName() : string {
    return this.name;
  }
  public getSurname() : string {
    return this.surname;
  }
  public getGender() : string {
    return this.gender;
  }
  public getSalary() : number {
    return this.salary;
  }
  
}
