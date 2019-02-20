<?php
    //require_once ('Player.php');
    //require_once ('Person.php');
    //require_once ('StockData.php');
    
    class Utility
    {
        //function to read the json and to decode it
        //returns object
        public static function read_Json($file)
        {
            //reading the json from the file and storing it
            $fileStr = file_get_contents($file);
            //decoding the json to get the object as associative array
            $jsonData = json_decode($fileStr,true);
            return $jsonData;
        }
        public function read_Json_Object($file)
        {
            return json_decode(file_get_contents($file));
        }
        //function to print the value of every inventory
        public static function inventory_Value($inventoryObject)
        {
            //declaring an array with each inventory as values
            $arr = ['Rice','Pulses','Wheats'];
            //looping over to get each inventory ie key of inventory object
            for($i=0;$i<count($arr);$i++)
            {
                //looping over to get each values of inventory object
                foreach($inventoryObject[$arr[$i]] as $value)
                {
                    //printing inventory details
                    echo "The value of ".$value['name']." is ".($value['weight']*$value['price'])." Rs\n";
                }
                echo "\n";
            }
        }
        //function to get the json string from the inventory object
        //returns the json string
        public static function json_String($inventoryObject)
        {
            //encoding the inventory object to get the json string
            $json = json_encode($inventoryObject);
            return $json;
        }
        //function to get one word string input
        //returns string
        public static function string_Input()
        {
            //taking input from user
            $str = readline(" ");
            //validation for one word string
            while((!(strlen($str)>0)) || (count(explode(" ",$str))>1) || (!preg_match("/^[a-zA-Z ]*$/",$str)))
                {                
                    echo "enter a valid string \n";
                    //calling function again if in case not valid
                    $str = Utility::string_Input();
                }
            return $str;
        } 
        //function to get two word string input
        //returns string
        public static function two_String_Input()
        {                               
            //taking input from user
            $str = readline(" ");
            //validation for two word string
            while((count(explode(" ",$str))<2) || (!preg_match("/^[a-zA-Z ]*$/",$str)))
                {                
                    echo "enter a valid string \n";
                    //calling function again if in case not valid
                    $str = Utility::two_String_Input();
                }
            return $str;
        } 
        //function to get the phone num in a specified format
        //returns phone num
        public static function phone_Num()
        {
            //taking input from user
            $str = readline(" ");
            //validation for phone num
            while((preg_match("/^[0-9]{2}-[0-9]{10}$/", $str)))
                {                
                    echo "enter a valid number \n";
                    //calling function again if in case not valid
                    $str = Utility::phone_Num();
                }
            return $str;
        }
        //function to check whether the number is float
        //returns boolean value
        public static function check_float($num)
        {
            //should be numeric and should have decimal point
            if(is_numeric($num) && strpos($num,'.'))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        //function to get an integer input
        //returns an integer
        public static function integer_Input()
        {
            fscanf(STDIN, "%s\n", $num);
            //validating the integer input
            while((Utility::check_float($num)) || (!(is_numeric($num))) || ($num<0))
            {
                echo "enter a valid number ";
                //calling function again if in case not valid
                $num = Utility::integer_Input();
            }
            return $num;
        }
        /**
         * function to validate integer input from the user and ask the user until proper input is fount and return it
         * @param int the value to verify as int
         * @param min the minimum value of the integer
         * @param max the maximum value of the integer
         * @return int the valid int in that range 
         * 
         */
        public static function validInt($int, $min, $max)
        {
            while (filter_var($int, FILTER_VALIDATE_INT, array("options" => array("min_range" => $min, "max_range" => $max))) === false) 
            {
                echo ("Variable value is not within the legal range\n");
                echo "enter again : ";
                $int = Utility::integer_Input();
            }
            return $int;
        }
        //function to get the string input
        public static function get_String()
        {                               
        fscanf(STDIN, "%s\n", $str);
            //validating the string input
            while((!(strlen($str)>0)) || (is_numeric($str)) || ($str==null))
            {                
                echo "enter a valid string \n";
                //calling function again if in case not valid
                $str = Utility::get_String();
            }
            return $str;
        } 
        //function to take positive number input
        public static function number_Input()
        {                               
            fscanf(STDIN, "%s\n", $num);
            //validation for positive number
            while(($num<0) || (!(is_numeric($num))))
            {
                echo "enter a valid number ";
                //calling function again if in case not valid
                $num = Utility::number_Input();
            }
            return $num;
        } 
        
    } 
?>
