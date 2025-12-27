import { inject, injectable } from "inversify";
import { Katana } from "./Katana.js";

export interface Ninja {
  katana: Katana
}

@injectable()
export class NinjaImpl implements Ninja {
  constructor(
    @inject(Katana)
    public readonly katana: Katana,
  ) {
    console.log("***** initialzing Ninja")
  }
}