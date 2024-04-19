import assert from 'assert';
import { GreetInXhosa, GreetInEnglish, GreetInZulu, MapUserGreetCounter, Greeter, Language } from "./greet";

describe('My first typescript basic test', function () {


    it('should greet in Xhosa', function () {
        const greetInXhosa = new GreetInXhosa();
        assert.equal("Molo, Yamisa", greetInXhosa.greet("Yamisa"));
    });

    it('should greet in English', function () {
        const greetInEnglish = new GreetInEnglish();
        assert.equal("Hello, Yamisa", greetInEnglish.greet("Yamisa"));
    });

    it('should greet in Zulu', function () {
        const greetInZulu = new GreetInZulu();
        assert.equal("Sawubona, Yamisa", greetInZulu.greet("Yamisa"));
    });

    it('should count', function () {
        const mapUserGreetCounter = new MapUserGreetCounter();
        let name = "Majija"
        assert.equal(1, mapUserGreetCounter.userGreetCount(name));
    });


    it("should return the object of all users greeted on local storage", function () {
        let greetMap = new Greeter(Language, new GreetInXhosa());
      
      assert.equal("Molo, Andre", greetMap.greet("Andre", Language.xhosa));
    });

    

   

});