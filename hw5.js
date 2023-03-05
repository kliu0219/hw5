//ques1
function foo(a){
    function foo1(){
        if(a > 0){
            console.log("Congrats you earn the chance!");
            a--;
        }else{
            console.log("Sorry you missed the chance!");
        }
    }
    return foo1;
}

const foo2 = foo(5);
foo2();
foo2();
foo2();
foo2();
foo2();
foo2();
foo2();
foo2();
foo2();
foo2();
foo2();

//ques2
const arr1 = ["123123", "123", "451511", "422"];
const minimumLength = 3;
const filteredArr = arr1.filter(str => str.length >= minimumLength);
console.log(filteredArr);