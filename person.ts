import { language } from "./language"

export default interface Person {
    _greet: any
    firstName: string
    lastName: string
    
    
}
export interface GreetIn {
   
    greet(name: string): string
}

export interface UserGreetCounter {
    countGreet(firstName: string): void
    greetCounter: number
    userGreetCount(firstName: string): number
}

export interface GreetingCount {

    id?: number;
    user_name?: string;
    user_count?: number;
    incrementGreetingCount(userId: number, user_name: string): Promise<void>;
    getGreetingCount(userId: number, user_name: string): Promise<number>;

}
export interface  Greetable {
    greet(firstName:string, language:language) : string
}
