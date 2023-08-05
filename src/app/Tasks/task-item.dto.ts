export class TaskItem {
  constructor(public title: string) {}
  public isDone = false;

  toggleDone() {
    this.isDone = !this.isDone;
  }
}
