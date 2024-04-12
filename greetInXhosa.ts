import { GreetIn } from "./person";


export default class GreetInXhosa implements GreetIn {
    greet(name: string) {
      return "Molo, " + name;
    }
}
