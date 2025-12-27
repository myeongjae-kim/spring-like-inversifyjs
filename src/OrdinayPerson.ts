import { Component } from "./config/Component.js";

export interface OrdinaryPerson {
  hello(): "world"
}

@Component()
export class OrdinaryPersonImpl implements OrdinaryPerson {
  hello(): "world" {
    return "world";
  }
}
