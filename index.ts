import { ApplicationContext } from './src/ApplicationContext.js';

const applicationContext = new ApplicationContext();

// ninja, ordinaryPerson의 타입 추론이 잘 된다.
const ninja = applicationContext.get("Ninja")
const ordinaryPerson = applicationContext.get("OrdinaryPerson")

console.log(ninja.katana.damage)
console.log(ordinaryPerson.hello())