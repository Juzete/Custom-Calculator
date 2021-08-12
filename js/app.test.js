/* eslint-disable no-undef */
import {parsePlusSeparatedExpression} from "./parser.js";

it("simple math operations", () => {
    expect(parsePlusSeparatedExpression("1+1")).toEqual(2);
    expect(parsePlusSeparatedExpression("1-1")).toEqual(0);
    expect(parsePlusSeparatedExpression("1*2")).toEqual(2);
    expect(parsePlusSeparatedExpression("2/2")).toEqual(1);
    expect(parsePlusSeparatedExpression("1+1*2")).toEqual(3);
})

it("simple math operations with parentheses", () => {
    expect(parsePlusSeparatedExpression("(3+4)*2")).toEqual(14);
    expect(parsePlusSeparatedExpression("5+7*2+(1+2)")).toEqual(22);
    expect(parsePlusSeparatedExpression("(1*2*(1+2*(2+2)))")).toEqual(18);
    expect(parsePlusSeparatedExpression("1*2*(2*2)+2")).toEqual(10);
    expect(parsePlusSeparatedExpression("(1+1)*2")).toEqual(4);
})

it("simple math operations with divide", () => {
    expect(parsePlusSeparatedExpression("(3+4)/2")).toEqual(3.5);
    expect(parsePlusSeparatedExpression("5/7*2/(1+2)")).toEqual(0.47619047619047616);
    expect(parsePlusSeparatedExpression("1*2*(2/2)+2")).toEqual(4);
    expect(parsePlusSeparatedExpression("(1+1)/2")).toEqual(1);
})


