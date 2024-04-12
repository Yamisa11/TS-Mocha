import { GreetIn } from "./person";

export default class GreetInEnglish implements GreetIn {
    greet(name: string) {
      return "Hello, " + name;
    }
}