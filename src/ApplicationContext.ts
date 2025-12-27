import { Container } from "inversify";
import { NinjaImpl, type Ninja } from "./Ninja.js";
import { OrdinaryPersonImpl, type OrdinaryPerson } from "./OrdinayPerson.js";

// TypeScript는 Runtime에 타입 정보(interface, type)가 모두 날아가므로,
// 어떤 문자열이 어떤 타입에 Mapping되는지에 대한 정보를 값으로 남겨두어야
// ApplicationContext#get 메서드를 TypeSafe하게 구현할 수 있다.
export const InterfaceMappingBeans = {
  Ninja: "Ninja",
  OrdinaryPerson: "OrdinaryPerson"
} as const

type BeanNameToType = {
  [InterfaceMappingBeans.Ninja]: Ninja
  [InterfaceMappingBeans.OrdinaryPerson]: OrdinaryPerson
}

export class ApplicationContext {
  private container: Container;

  constructor() {
    this.container = new Container({autobind: true});

    // Smybol mapping을 위해서는 수동으로 bean을 등록해야 한다.
    this.container.bind(InterfaceMappingBeans.Ninja).to(NinjaImpl);
    this.container.bind(InterfaceMappingBeans.OrdinaryPerson).to(OrdinaryPersonImpl);
  }

  public get<T extends keyof BeanNameToType>(serviceIdentifier: T): BeanNameToType[T] {
    return this.container.get(serviceIdentifier);
  }
}