<?php
// Page initialisation
$location = "accountstudentlists";
?>
<!DOCTYPE html>
<html lang="nl" id="htmldoc">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/img/favicon.ico">

    <title data-bind="text: title"></title>

    <?php include_once('hddepends.php') ?>
</head>

<body>
<?php include_once('menu.php') ?>

<!-- Header container -->
<div class="container">
    <h1 class="page-header"><span data-bind="text: pageHeader">My User lists</span>: <?php echo Security::getLoggedInName() ?></h1>
</div>

<!-- Content container -->
<div class="container">
    <div class="row">

    </div>
</div>

<?php include_once('jsdepends.php') ?>
</body>
</html>