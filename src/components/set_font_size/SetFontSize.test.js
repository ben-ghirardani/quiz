import setFontSize from './SetFontSize';

test("function returns font size 6vh if no. characters <= 30", ()=>{
  expect(setFontSize(29)).toBe("6vh");
});

test("function returns font size 5vh if no. characters > 30 && < 100", ()=>{
  expect(setFontSize(64)).toBe("5vh");
});

test("function returns font size 3.5vh if no. characters > 100", ()=>{
  expect(setFontSize(114)).toBe("3.5vh");
});