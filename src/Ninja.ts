import { inject, injectable } from "inversify";
import { Katana } from "./Katana.js";

@injectable()
export class Ninja {
  constructor(
    @inject(Katana)
    public readonly katana: Katana,
  ) {
    console.log("***** initialzing Ninja")
  }
}