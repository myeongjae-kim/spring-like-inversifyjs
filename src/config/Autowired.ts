import { inject } from "inversify";
import type { BeanNames } from "./BeanMapping.js";

export const Autowired = (serviceIdentifier: keyof BeanNames) => inject(serviceIdentifier)