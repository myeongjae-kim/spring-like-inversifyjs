import { injectable } from "inversify";

export interface OrdinaryPerson {
  hello(): "world"
}

@injectable()
export class OrdinaryPersonImpl implements OrdinaryPerson {
  hello(): "world" {
    return "world";
  }
}
