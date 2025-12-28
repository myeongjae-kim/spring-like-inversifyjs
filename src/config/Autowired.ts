import type { BeanNames } from "./BeanConfig.js";
import { returnAutowired } from "./returnAutowired.js";

export const Autowired = returnAutowired<keyof BeanNames>();