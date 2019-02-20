<?php
class Utility
{
public static function string_Input()
    {                               
       fscanf(STDIN, "%s\n", $str);
       while((!(strlen($str)>0)) || (is_numeric($str)) || ($str==null))
            {                
                echo "enter a valid string \n";
                echo "enter the arithmetic expression\n";
                $str = Utility::string_Input();
            }
        return $str;
    } 
}
?>