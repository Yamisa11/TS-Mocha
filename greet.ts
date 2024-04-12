import { language } from './language';
import GreetInEnglish from './greetInEnglish';
import GreetInXhosa from './greetInXhosa';
import GreetInZulu from './greetInZulu';
import {Greetable} from './person'



export interface GreetIn {
  greet(name: string): string;
}

export function greet(name: string, chosenLanguage: language) {
  let greetIn: GreetIn = new GreetInEnglish();
  if (chosenLanguage === language.eng) {
    greetIn = new GreetInEnglish();
  }
  if (chosenLanguage === language.xhosa) {
    greetIn = new GreetInXhosa();
  }
  if (chosenLanguage === language.zulu) {
    greetIn = new GreetInZulu()
  }

  return greetIn.greet(name);

}

const greetLanguages = new Map<language, GreetIn>();

const englishGreet = new GreetInEnglish();
const xhosaGreet = new GreetInXhosa();
const zuluGreet = new GreetInZulu();

greetLanguages.set(language.eng, englishGreet);
greetLanguages.set(language.xhosa, xhosaGreet);
greetLanguages.set(language.zulu, zuluGreet);

