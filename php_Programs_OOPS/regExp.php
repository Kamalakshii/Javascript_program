<?php
/******************************************************************************              
 *  Purpose         :To replace name,fullname,contact number and date.
 *  @file           :regExp.php
 *  @overview       :Replaces the original message in the text by modified message.
 *  @author         :KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          :19/02/2019
 ******************************************************************************/
//require the function below to work
require ('Utility.php');
try
{
    //declaring a name for file
    $file = 'RegExp.json';
    //passing file to get the object
    $str = Utility::read_Json($file);
    //getting the value of object using its key and storing it in string variable
    $str = $str['string'];
    echo"\n";
    echo "The content of the file is :\n\n";
    echo $str."\n\n";
    //taking user input for first name
    echo "enter your first name \n";
    $name = Utility::string_Input();
    //repalcing with first name using regex
    $str = preg_replace('/<{2}\w+>{2}/', $name, $str);
    //taking user input for full name
    echo "enter your full name \n";
    $fullName = Utility::two_String_Input();
    //repalcing with full name using regex
    $str = preg_replace('/<{2}\w+\s\w+>{2}/', $fullName, $str);
    //getting current date using date function
    $date = date("d/m/Y");
    //replacing with current date using regex
    $str = preg_replace('/\d{2}.\d{2}.\d{4}/', $date, $str);
    //taking user input for phone number
    echo "enter your phone number\n";
    $phoneNum = Utility::phone_Num();
    //replacing with phone number using regex
    $str = preg_replace('/\d{2}.x{10}/', $phoneNum, $str);   
    //dispalying the modified message
    echo"\n";
    echo "The modified message is :\n\n";
    echo $str."\n";
}
catch(Exception $e)
{
    echo $e.getMessage();
}
