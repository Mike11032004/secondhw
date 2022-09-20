let text = 'Lex Luter has a big suit'

console.log(
    text.slice(text.search('a'), text.search('a') + 1).toUpperCase() +
    text.slice(text.search('L'), text.search('L') + 1).toLowerCase() +
    text.slice(text.search('e'), text.search('e') + 1) +
    text.slice(text.search('x'), text.search('x') + 1) 
);


let str = 'aaa@bbb@ccc'

str = str.replace("@", "!") 
str = str.replace("@", "!") 
console.log(
    str
);



let str2 = 'HELLOWORLD'
str2 = str2.toLowerCase()
console.log(
    str2.slice(str2.search("h"), str2.search("h") + 1).toUpperCase() +
    str2.slice(str2.search("ello"), str2.search("ello") + 4) + " " + str2.slice(str2.search("world"), str2.search("world") + 5) 
)

let text2 = "Hello, it is HTML";
let name = "not JS"
console.log(
    text2.slice(text2.search("Hello"), text2.search("Hello") + 5) + " " + text2.slice(text2.search("it is"), text2.search("it is") + 5) + " " + name
);

let a = 'alex'

console.log(
    a.slice(a.search('a'), a.search('a') +1).toUpperCase() +
    a.slice(a.search('lex'), a.search('lex') +3)
);



let math = Math.random()
console.log(
    Math.ceil(math * 10)
);
