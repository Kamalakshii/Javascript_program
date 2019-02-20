<?php
/******************************************************************************              
 *  Purpose         : To read in arithmetic expression and ensure parentheses must appear 
                      in a balanced
     
 *  @file           : balancedParenthesis.php
 *  @overview       : Take an Arithmetic Expression  where parentheses are used to 
                      order the performance of operations. Ensure parentheses must appear
                      in a balanced fashion.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          : 17/02/2019
 ******************************************************************************/
require 'Stack.php'; 
require 'UtilDs.php'; 
try{
$stack = new Stack();
$str = "";
echo "enter the arithmetic expression\n";
$str = Utility::string_Input();
for($x=0;$x<strlen($str);$x++)
{
    $ch = $str[$x];
    /*if($ch == '(')
    {
        $stack->push($ch);
    }
    else if($ch == ')')
    {
        $stack->pop();
    }*/
    if ($ch == '(' || $ch == '[' || $ch == '{') {
        $stack->push($ch);
    
    }
    else {
        switch ($ch) {
            case ')': if ( $stack->pop()!= '(') {
                return false;
            }
                break;
            case ']': if ( $stack->pop() != '[') {
                return false;
            }
                break;
            case '}': if ( $stack->pop()!= '{') {
                return false;
            } break;
        }
}
}
if($stack->isEmpty())
{
    echo "balanced\n";
}
else
{
    echo "not balanced\n";
}
}
catch(Exception $e)
{
    echo $e->getMessage();
}
?>
