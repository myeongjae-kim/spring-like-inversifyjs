import { Container } from "inversify";
import { beanConfig, type BeanNames } from "./config/BeanConfig.js";
import { extractScope } from "./config/extractScope.js";
import { ShouldNotInitializedBean } from "./ShouldNotInitializedBean.js";

export class ApplicationContext {
  private container: Container;

  constructor() {
    // autobind 옵션은 Spring의 Component Scan 기능과 유사하다.
    // autobind가 켜져있으면 필요한 컴포넌트를 컨테이너에 자동으로 추가한다.
    this.container = new Container({ autobind: true });
    // this.container = new Container();

    // autobind 옵션을 주지 않을 경우 구현체를 명시적으로 컨테이너에 등록해야 작동한다.
    // this.container.bind(Katana).toSelf();
    // this.container.bind(NinjaImpl).toSelf();
    // this.container.bind(OrdinaryPersonImpl).toSelf();

    Object.entries(beanConfig).forEach(([name, service]) => {
      if (!extractScope(service)) {
        throw new Error(`Bean ${name} does not have an explicit scope. Use @Component() decorator!`);
      }

      return this.container.bind(name).to(service);
    });

    // 기본으로 lazy다. bean으로 등록되어 있더라도 get하지 않으면 bean을 생성하지 않는다. Serverless 환경에서 사용하기 좋음.
    this.container.bind(ShouldNotInitializedBean).toSelf();
  }

  public get<T extends keyof BeanNames>(serviceIdentifier: T): BeanNames[T] {
    return this.container.get(serviceIdentifier);
  }
}