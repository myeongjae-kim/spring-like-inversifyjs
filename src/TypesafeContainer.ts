import { Container } from "inversify";
import { NinjaImpl, type Ninja } from "./Ninja.js";
import { OrdinaryPersonImpl, type OrdinaryPerson } from "./OrdinayPerson.js";

// 타입 안전을 구현하기 위해 타입을 문자열과 매핑한다.
type ServiceIdentifierToType = {
  "Ninja": Ninja
  "OrdinaryPerson": OrdinaryPerson
};

export class TypesafeContainer {
  private container: Container;

  constructor() {
    // autobind 옵션은 Spring의 Component Scan 기능과 유사하다.
    // autobind가 켜져있으면 필요한 컴포넌트를 컨테이너에 자동으로 추가한다.
    this.container = new Container({autobind: true});
    // this.container = new Container();

    // autobind 옵션을 주지 않을 경우 구현체를 명시적으로 컨테이너에 등록해야 작동한다.
    // this.container.bind(Katana).toSelf();
    // this.container.bind(NinjaImpl).toSelf();
    // this.container.bind(OrdinaryPersonImpl).toSelf();

    // ServiceIdentifierToType의 key에 해당하는 문자열만 bind하도록 제한
    const bind = (args: keyof ServiceIdentifierToType) => this.container.bind(args)

    // 타입스크립트는 런타임에 타입 정보가 제거되므로 인터페이스를 런타임에 직접 사용할 수 없다.
    // 컴포넌트를 인터페이스로 주입받을 수 없으므로 이름으로 주입받기 위해 이름과 타입을 매핑하는 과정이 필요하다.
    bind("Ninja").to(NinjaImpl);
    bind("OrdinaryPerson").to(OrdinaryPersonImpl);
  }

  public get<T extends keyof ServiceIdentifierToType>(serviceIdentifier: T): ServiceIdentifierToType[T] {
    return this.container.get(serviceIdentifier);
  }
}