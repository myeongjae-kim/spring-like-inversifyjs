import { Container } from 'inversify';
import { Ninja } from './src/Ninja.js';

const container: Container = new Container();

const ninja: Ninja = container.get(Ninja, { autobind: true });

console.log(ninja.katana.damage);

// container.get(UnusedBean, {autobind: true})