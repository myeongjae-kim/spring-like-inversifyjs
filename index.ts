import type { Ninja } from './src/Ninja.js';
import type { OrdinaryPerson } from './src/OrdinayPerson.js';
import { TypesafeContainer } from './src/TypesafeContainer.js';

const applicationContext = new TypesafeContainer();

// fyi) satisfies는 타입 캐스팅을 하지 않고 타입을 만족하는지만 확인하는 예약어
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator
const ninja = applicationContext.get("Ninja") satisfies Ninja
const ordinaryPerson = applicationContext.get("OrdinaryPerson") satisfies OrdinaryPerson

// 타입 추론 덕분에 명시적인 타입 선언 없이도 katana와 hello()에 타입 에러 없이 접근이 가능하다
console.log(ninja.katana.damage)
console.log(ordinaryPerson.hello())