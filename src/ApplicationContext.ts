import { Container, type Newable } from "inversify";

export class ApplicationContext<Config extends Record<string, Newable<unknown>>> {
  private container: Container;

  constructor(beanConfig: Config) {
    this.container = new Container({ defaultScope: 'Singleton' });
    Object.entries(beanConfig).forEach(([name, service]) => {
      this.container.bind(name).to(service);
    });
  }

  public get<T extends keyof Config>(serviceIdentifier: T): InstanceType<Config[T]> {
    return this.container.get(serviceIdentifier as string);
  }
}