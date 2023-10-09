import {isZero} from "./isZero";

test("passing 0 returns true",()=>{
    const result=isZero(0);
    expect(result).toBe(true);
})

test("passing 1 returns false",()=>{
    const result=isZero(1);
    expect(result).toBe(false);
})