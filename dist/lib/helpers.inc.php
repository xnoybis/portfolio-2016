<?php

function getElapsedYears($startDate) {

    $startDateStr = strtotime($startDate);
    $startDateYear = date('Y', $startDateStr);
    $elapsed = date('Y') - $startDateYear;
    if(strtotime('+' . $elapsed . ' years', $startDateStr) > time()) $elapsed--;
    return $elapsed;
}

?>