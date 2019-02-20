<?php
class Utility
{
/**
 * @description : declaring the function and passing user input as arguments,
 * using random() to get value between 0-1, if value<0.5
 * then it is tail otherwise heads and  find percentage of head and tail
 */
    public static function flipCoin()
    {
        try {
            $heads = 0;
            $tails = 0;
            $number = readline("Enter a number: ");
            if ($number > 0 && is_numeric($number)) {
                for ($i = 0; $i < $number; $i++) {
                    $count = rand(0, 1);
                    if ($count < 0.5) {
                        $tails++;
                    } else {
                        $heads++;
                    }
                }
                $tailPercent = ($tails / $number) * 100;
                $headPercent = ($heads / $number) * 100;
                echo " the tail percent is : $tailPercent \r\n";
                echo " the head percent is : $headPercent \r\n";
            } else {
                echo "Enter valid number\n\r";
            }
        } catch (exception $e) {
            echo $e->getMessage();
        }
    }
/**************************************Harmonic Number***************************************/
/**
 * @description :Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N using the formula.
 */
    public static function harmonicNumber()
    {
        try {
            $sum = 0;
            $number = readline("Enter a number: ");
            if ($number > 0 && is_numeric($number)) {
                for ($i = 1; $i < $number; $i++) {
                    $sum = $sum + (1 / $i);
                }
                echo " The harmonic numbers are : $sum \r\n";
            } else {
                echo "Enter valid number \r\n";
            }
        } catch (exception $e) {
            echo $e->getMessage();
        }
    }
/***********************************Gambling****************************************/
/**
 * @description : Print Number of Wins and Percentage of Win and Loss of a gambler
 *                by incrementing the stake when he wins and decrementing the stake when
 *                he loses.
 * @Function    : using random(), if the value is greater then 0.5 win and stake increments,
 *                otherwise loss increases and stake decreases
 */
    public static function gambling()
    {
        try {
            $win = 0;
            $loss = 0;
            $times = 0;
            $stake = readline("enter the stake amount :");
            $goal = readline("enter the goal amount :");
            if (is_numeric($stake) && is_numeric($goal)) {
                while ($stake > 0 && $stake < $goal) {
                    if (rand(0, 1) > 0.5) {
                        $win++;
                        $stake++;
                    } else {
                        $loss++;
                        $stake--;
                    }
                    $times++;
                }
            } else {
                echo "enter proper stake and goal values :\r\n";
            }
            echo "The number of bets : $times\r\n";
            echo "Gambler won : $win\r\n";
            echo "Gambler lost : $loss\r\n";
            $winPercent = (($win / $times) * 100);
            $lossPercent = (($loss / $times) * 100);
            echo "The win percentage is : $winPercent\r\n";
            echo "The loss percentage is : $lossPercent\r\n";
        } catch (exception $e) {
            echo $e->getMessage();
        }
    }
/*****************************************Coupon Numbers************************************/
/**
 * @Description : To find total random number needed to have all distinct numbers.
 * @Function    : Given N distinct Coupon Numbers, how many random numbers do you
 *                need to generate distinct coupon number. This program simulates this
 *                random process.
 */
    public static function generateCouponNumber()
    {
        try{
        $arr = array();
        $count = 0;
        $number = readline("Enter the number");
        if(is_numeric($number) && $number > 0)
        {
        while ($count != $number) {
            $input = round((rand() * $number));
            echo "$input\r\n";
            if (!in_array($input, $arr)){
                array_push($arr, $input);
                $count++;
            }
        }
        echo implode("\r\n", $arr);
        print_r($arr);
        }
        else{
            echo "Enter valid number \r\n";
        }
    }
    catch (exception $e) {
        echo $e->getMessage();
    }
}
/*****************************************Power of Two************************************/
/**
 * @Description : To Accept value of "N" from user and prints a table of the powers of 2 
 *                that are less than or equal to 2^N. value of N should be less then 31.
 * @Function    : The function checks the given number is less then 31, if less then 31, then it prints
 *                the value of two's power i.e., 2^N value.
 * @param       : It accepts a power as parameter and prints the power table
 */
public static function powerOfTwo($power)
{
    try{
    if($power >= 2 && $power <=31 && is_numeric($power))
    {
        if($power == 1)
        {
            echo "1";
        }
        for($i = 0; $i <= $power; $i++)
        {
            $result = pow(2,$i);
            echo "Result : 2^$i = $result\r\n";
        }
    }
    else{
        echo "enter a valid input\r\n";
    }
}
catch (exception $e) {
    echo $e->getMessage();
}
}
}
?>
