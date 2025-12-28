import { inject } from "inversify";

export const returnAutowired = <T extends string>() => (serviceIdentifier: T) => inject(serviceIdentifier);