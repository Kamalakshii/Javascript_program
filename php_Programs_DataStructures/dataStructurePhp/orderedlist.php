<?php
/******************************************************************************               
 *  Purpose         :To read from file a list of numbers by taking user input  
 *  @file           :orderedList.php
 *  @overview       :Read a List of Numbers from a file and arrange it ascending order
                     in a Linked List. Take user input for a number, if found then pop 
                     the number out of the list else insert the number in appropriate 
                     position.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          : 15/02/2019
 ******************************************************************************/
/**
 * Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user 
 * input for a number, if found then pop the number out of the list else insert the number in 
 * appropriate position
 **/
//requires the function in below files to work
require 'LinkedList.php';
require 'Utility.php';
 //name of the file and opening the file
$myfile = fopen("file.txt","r") or die("Unable to open file!");
//reading the file
$str = fread($myfile,filesize("file.txt"));
//creating the array of the words
$arr = explode(" ",$str);
$list = new LinkedList();
for($x=0;$x<count($arr);$x++)
{
    //adding to the list
    $list->add($arr[$x]);
}
echo "The numbers in the list are :\n";
//showing the list
$list-> printl();
echo "Enter the number to be searched\n";
$num = Utility::integer_Input();
//searching the element in the list
if($list->search($num))
{
    echo "The number has been removed from the list as it was already present\r\n";
    $list->remove($num);
    echo "\n";
    echo "The data after removing the number is : \n";
    $list-> printl();
}
else
{
    echo "The number has been added into the list as it was not present\n";
    $list->add($num);
    echo "The data after adding the number is :\n";
    $list-> printl();
}
   $str2 = "";
   $current = $list->front;
        while($current)
        {
            $str2 =$str2.$current->data." ";
            $current = $current->next;
        }
   $myfile = fopen("file.txt","w") or die("Unable to open file!");
   //writing back to the file
   fwrite($myfile,$str2);
   fclose($myfile);
?>
