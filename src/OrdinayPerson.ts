
export interface OrdinaryPerson {
  hello(): "world"
}

export class OrdinaryPersonImpl implements OrdinaryPerson {
  hello(): "world" {
    return "world";
  }
}
