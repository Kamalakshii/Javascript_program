/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : To read in arithmetic expression and ensure parentheses must appear 
                      in a balanced
     
 *  @file           : balancedParenthesis.js
 *  @overview       : Take an Arithmetic Expression  where parentheses are used to 
                      order the performance of operations. Ensure parentheses must appear
                      in a balanced fashion.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @version        : 1.0.
 *  @since          : 03/02/2019
 ******************************************************************************/
var readline = require("readline-sync");
/** 
 * To access data from utility file and utilityDataStructure
 */
var accessDs = require("../Utility/utilityDataStructure")
/** 
 * invoking Stack() to perform push and pop operations
 */
try{
function Stack() {
    var st = new accessDs.Stack;
    /** 
     * ask the user to input a mathematical expression
     */
    var str = readline.question("Enter your mathematical expression with parenthesis : ");
    var ch, i;
    /** 
     * loop until length of string to get each character and store it in ch
     */
    for (i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        /** 
         * condition to check if the character is ( , [ or { and compare with ) ,} ,]
         */
        if (ch == '(' || ch == '[' || ch == '{') {
            st.push(ch);

        }
        else {
            switch (ch) {
                case ')': if (st.pop() != '(') {
                    return false;
                }
                    break;
                case ']': if (st.pop() != '[') {
                    return false;
                }
                    break;
                case '}': if (st.pop() != '{') {
                    return false;
                } break;
            }
        }


    }
    if (st.getSize() == 0) {
        return true;
    }
    return false;
}
var b= Stack();
/** 
 * if b returns true then the string is balanced otherwise string is not balanced
 */
if (b) {
    console.log("String is balanced");
}
else {
    console.log("String is not balanced");
}
}
catch(exception)
{
    console.log(err);
}



