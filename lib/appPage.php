<?php
// create page
function pageName () {
    return isset($_GET['title']) ? $_GET['title'] : 'home';
}
