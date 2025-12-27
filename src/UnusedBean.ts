import { injectable } from "inversify";

@injectable()
export class UnusedBean {
  constructor() {
    console.log("***** initialzing unused bean")
  }
}