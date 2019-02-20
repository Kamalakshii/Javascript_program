<?php
/******************************************************************************               
 *  Purpose         :To read from file a list of words  by taking user input    
 *  @file           :unordered.php
 *  @overview       :Read the Text from a file, split it into words and arrange it as 
                     Linked List. Take a user input to search a Word in the List. If the 
                     Word is not found  then add it to the list, and if it found then
                    remove the word from the List. In the end save the list into a file.
 *  @author         : KAMALAKSHI SWAMY   <swamykamalakshi103@gmail.com>
 *  @since          : 15/02/2019
 ******************************************************************************/
/**
 * Read the Text from a file, split it into words and arrange it as Linked List. Take a user input to
 * search a Word in the List. If the Word is not found then add it to the list, and if it found 
 * then remove the word from the List. In the end save the list into a file
**/
//require function in below files to work
require 'Utility.php';
require_once ('SinglyLinkedList.php');
//name of the file and opening the file
$myfile = fopen("word.txt","r") or die("Unable to open file!");
//reading the file
$str = fread($myfile,filesize("word.txt"));
//creating the array of the words
$arr = explode(" ",$str);
$list = new SinglyLinkedList();
for($x=count($arr)-1;$x>=0;$x--)
{
    //adding to the list
    $list->add($arr[$x]);
}
/*for($x=0;$x<count($arr);$x++)
{
    //adding to the list
    $list->add($arr[$x]);
}*/
echo "Data in the list :\r\n";
//showing the list
$list-> printl();
echo "\n";
echo "enter the word to be searched\r\n";
$str1 = Utility::string_Input();
 //searching the element in the list
if($list->search($str1))
{
  echo "The word has been removed from the list  as it was already present\r\n";
    $list->remove($str1);
    echo "The data after removing the word is : \n";
    $list-> printl();
}
else
{
   echo "The word has been added into the list as it was not present\n";
    $list->add($str1);
    echo "The data after adding the word is :\n";
    $list-> printl();
}
$str2 = "";
$current = $list->first;
     while($current)
     {
         $str2 =$str2.$current->data." ";
         $current = $current->next;
     }
$myfile = fopen("word.txt","w") or die("Unable to open file!");
//writing back to the file
fwrite($myfile,$str2);
fclose($myfile);
?>
