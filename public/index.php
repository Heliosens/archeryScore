<?php

require __DIR__ . "/../lib/appPage.php";

// construct the page
require __DIR__ . "/../partials/header.php";
require __DIR__ . "/../" . pageName() . ".php";
require __DIR__ . "/../partials/footer.php";
