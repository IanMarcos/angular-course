export default class ToDo {
  private task: string;
  private createdAt: Date;
  private completedAt: Date | null;

  constructor(task: string) {
    this.task = task;
    this.createdAt = new Date();
    this.completedAt = null;
  }

  public isCompleted(): boolean {
    return this.completedAt !== null;
  }

  public toggleCompleteToDo(): void {
    if (!this.isCompleted()) {
      this.completedAt = new Date();
    } else {
      this.completedAt = null;
    }
  }

  private formatDate(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let hoursString: string = hours < 10
      ? '0' + hours
      : hours.toString();
    let minutesString: string = minutes < 10
      ? '0' + minutes
      : minutes.toString();

    return `${hoursString}:${minutesString} - ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  public getTask(): string {
    return this.task;
  }

  public getCreationDate(): Date {
    return this.createdAt;
  }

  public getCompletedDate(): Date | null {
    return this.completedAt;
  }

  public getCreationDateAsString(): string {
    return this.formatDate(this.createdAt);
  }

  public getCompletedDateAsString(): string {
    if (this.isCompleted()) {
      return this.formatDate(<Date>this.completedAt);
    }
    return '';
  }
}