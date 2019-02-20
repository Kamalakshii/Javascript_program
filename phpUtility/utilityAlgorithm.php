<?php
class Utility
{
    public static function isNumber($s)
    {
        for ($i = 0; $i < strlen($s); $i++) {
            if (is_numeric($s[$i]) == false) {
                return false;
            }
        }

        return true;
    }
    public static function bubbleSort()
    {
        try {
            $size = readline("Enter the size of an array");
            $array = array();
            for ($index = 0; $index < $size; $index++) {
                $array[$index] = readline("Enter the array elements\r\n");
            }
            echo "The array elements are :\r\n";
            echo implode(" \r\n", $array);
            $n = sizeof($array);
            if ((!is_numeric($array))) {
                for ($i = 0; $i < $n; $i++) {
                    for ($j = $i + 1; $j < $n; $j++) {
                        if ((($array[$i])) > ($array[$j])) {
                            $temp = $array[$i];
                            $array[$i] = $array[$j];
                            $array[$j] = $temp;
                        }
                    }
                }
                echo "\r\nThe sorted elements are :\r\n";
                echo implode("\r\n", $array);
            } else {
                echo "enter valid input\r\n";
            }
        } catch (exception $e) {
            echo $e->getMessage();
        }
    }
/************************************Temperature Conversion****************************************/
    public static function convertTemperature()
    {
        try {
            $temperature = 0;
            $choice = readline("Press 1 to convert from fahrenheit to celcius,Press 2 to convert from celcius to fahrenheit");
            if ($choice == 1) {
                $temperature = readline("enter the temperature in fahrenheit :");
                if (is_numeric($temperature)) {
                    $celcius = ($temperature - 32) * (5 / 9);
                    echo "The temperature in celcius is : $celcius\r\n";
                } else {
                    echo "The temperature is incorrect\r\n";
                    $temperature = readline("enter the temperature in fahrenheit :");
                }
            } else if ($choice == 2) {
                $temperature = readline("enter the temperature in celcius :");
                if (is_numeric($temperature)) {
                    $fahrenheit = $temperature * (9 / 5) + 32;
                    echo " The temperature in fahrenheit is : $fahrenheit\r\n";
                } else {
                    echo "The temperature is incorrect\r\n";
                    $temperature = readline("enter the temperature in celcius :");
                }
            } else {
                echo "Please enter correct choice\r\n";
                $choice = readline("Press 1 to convert from fahrenheit to celcius,Press 2 to convert from celcius to fahrenheit");
            }
        } catch (exception $e) {
            echo $e->getMessage();
        }
    }
/***************************************Anagram******************************************* */
public static function is_Anagram() 
    { 
        $string1 = readline("Enter the first string\r\n");
        $string2 = readline("Enter the second string\r\n");
        if (count_chars($string1, 1) == count_chars($string2, 1))
            echo "The given strings are anagram\r\n"; 
        else 
            echo "The given strings are not anagram\r\n";        
    }
/***************************************Binary********************************************/
function convertToBinary() 
{ 
    try{
    $result; 
    $i = 0; 
    $n = readline("Enter the number to be converted to binary\r\n");
    if(is_numeric($n))
    {
    while ($n > 0 )
    { 
        $result[$i] = $n % 2; 
        $n = (int)($n / 2); 
        $i++; 
    } 
    for ($j = $i - 1; $j >= 0; $j--) 
        echo $result[$j]; 
    }
    else{
        echo "Enter valid input\r\n";
        $n = readline("Enter the number to be converted to binary\r\n");
    }
    }
    catch (exception $e) {
        echo $e->getMessage();
    }
} 
/***********************************Vending Machine************************************/
public static function findNumberOfNotes()
{
    try{
    $array = array(1000,500,100,50,10,5,2,1);
    $amount = readline("enter the amount\r\n");
    $notes = 0;
    if(is_numeric($amount)){
    for($index = 0 ; $index < sizeof($array); $index++)
    {
        if ($amount / $array[$index] >= 1) 
        {
            $c= floor($amount / $array[$index]);
            $notes = $notes + $c;
            echo "$array[$index] notes are : $c\r\n";
            $amount = $amount % $array[$index];
     
        }
    }
    echo "Total number of notes : $notes\r\n";
    }
    else
    {
        echo "enter valid amount";
        $amount = readline("enter the amount\r\n");
    }
    }
    catch(exception $e)
    {
        echo $e->getMessage();
    }
}
}
?>