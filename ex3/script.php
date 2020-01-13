<?php
function howManyTimesTheNumbersIsInTheTable($array,$number) {
  $i = 0;
  $currentElement;
  $count =0;
  while ($i < count($array)) {
    $currentElement = $array[$i];
    if ($currentElement == $number ) {
      $count++;
    }
    $i++;
  }
  echo $count;
  return $count;
}
$numbersArray=[3,3,3,3,5,3];
$numberTest=3;

howManyTimesTheNumbersIsInTheTable($numbersArray,$numberTest);
 ?>
