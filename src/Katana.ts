import { injectable } from "inversify";

@injectable()
export class Katana {
  constructor() {
    console.log("***** initialzing Katana")
  }

  public readonly damage: number = 10;
}