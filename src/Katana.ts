import { Component } from "./config/Component.js";

export interface Katana {
  readonly damage: number;
}

@Component()
export class KatanaImpl implements Katana {
  constructor() {
    console.log("***** initialzing Katana")
  }

  public readonly damage: number = 10;
}