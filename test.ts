import assert from 'assert';
import { GreetIn } from '../person';
import { language } from '../language';
import GreetInZulu from '../greetInZulu';
import GreetInEnglish from '../greetInEnglish';
import GreetInXhosa from '../greetInXhosa';

describe('My function', function() {
    it('should test', function() {
        assert.equal(1, 1);
    });

    it('should test name and surname function', function() {
        assert.equal("Hello, Bob Crow we will be in touch at: bob@crow.com", greet({
            firstName : "Bob", 
            lastName : "Crow",
            email : "bob@crow.com"
          }));
    });

    it('should test name and surname function, no email', function() {
        assert.equal("Hello, Bob Crow we can't contact you.", greet({
            firstName : "Bob", 
            lastName : "Crow"
          }));
    });

    it('should greet the name in isiXhosa', () => {
        const result = greet('Yamisa', language.xhosa);
        const theGreet = 'Molo, Yamisa';
        assert.equal(theGreet, result);
      });
      it('should greet the name in English', () => {
        const result = greet('Yamisa', language.eng);
        const theGreet = 'Hello, Yamisa';
        assert.equal(theGreet, result);
      });
      it('should greet the name in Zulu', () => {
        const result = greet('Yamisa', language.zulu);
        const theGreet = 'Sawubona, Yamisa';
        assert.equal(theGreet, result);
      });
      
      })
});