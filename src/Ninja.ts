import type { Katana } from "./Katana.js";
import { Autowired } from "./config/Autowired.js";

export interface Ninja {
  katana: Katana
}

export class NinjaImpl implements Ninja {
  constructor(
    @Autowired("Katana")
    public readonly katana: Katana,
  ) {
    console.log("***** initialzing Ninja")
  }
}