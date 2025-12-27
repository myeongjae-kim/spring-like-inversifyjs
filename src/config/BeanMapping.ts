import type { Newable } from "inversify";
import { KatanaImpl, type Katana } from "../Katana.js";
import { NinjaImpl, type Ninja } from "../Ninja.js";
import { OrdinaryPersonImpl, type OrdinaryPerson } from "../OrdinayPerson.js";

// typesafety를 구현하기 위해 타입을 문자열과 매핑한다.
export type BeanNames = {
  "Ninja": Ninja;
  "OrdinaryPerson": OrdinaryPerson;
  "Katana": Katana;
};

// 타입스크립트는 런타임에 타입 정보가 제거되므로 인터페이스를 런타임에 직접 사용할 수 없다.
// 컴포넌트를 인터페이스로 주입받을 수 없으므로 이름으로 주입받기 위해 이름과 구현체를 매핑하는 과정이 필요하다.
// 이름에 해당하는 구현체를 매핑하지 않으면 타입 에러가 발생하도록 Record 타입 선언을 통해 유도한다.
export const beanMapping: Record<keyof BeanNames, Newable<unknown>> = {
  "Ninja": NinjaImpl,
  "OrdinaryPerson": OrdinaryPersonImpl,
  "Katana": KatanaImpl
};