 <?php
 /******************************************************************************               
 *  Purpose         :To manage data inventory of rice, wheat and pulses
 *  @file           :inventoryDM.js
 *  @overview       :Create a JSON file having Inventory Details for Rice, Pulses and
                     Wheat with properties name, weight, price per kg.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          : 19/02/2019
 ******************************************************************************/
    /**
     * set top level error handler function to handle in case of error occurence
     * 
    */
        set_error_handler(function ($errno, $errstr, $error_file, $error_line) {
        echo "!!!!Error Occured!!!!!!!\n";
        echo "Error: [$errno] $errstr - $error_file:$error_line \n";
        echo "Terminating!!!!!!!!!\n";
        die();
        });
    //require the function below to work
    require ('Utility.php');
        try
        {
            //declaring a name for file
            $file = 'inventoryDM.json';
            //passing file to get the inventory object
            $inventoryObject = Utility::read_Json($file);
            //calling function to print each inventory value
            echo "The value of each inventory is :\n\n";
            Utility::inventory_Value($inventoryObject);
            //calling function to get back the json string and printing it
            echo "JSON string is\n\n";
            echo Utility::json_String($inventoryObject);
            echo "\n";
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
    ?>
