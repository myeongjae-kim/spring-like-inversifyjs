import { inject } from "inversify";
import type { BeanNames } from "./BeanConfig.js";

export const Autowired = (serviceIdentifier: keyof BeanNames) => inject(serviceIdentifier)