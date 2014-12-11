<?php
// Page initialisation
$location = "projectstudents";
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
    <style>
        #top-col {
            padding-bottom: 15px;
        }

        .form-next {
            display: inline-block !important;
            margin-right: 10px;
            width: auto !important;
        }
    </style>

    <?php include_once('hddepends.php') ?>
</head>

<body>
<?php include_once('menu.php') ?>

<!-- Header container -->
<div class="container">
    <h1 class="page-header" id="projectHeader" data-value="<?php echo $projectid ?>" data-bind="text: pageHeader">Project</h1>
    <div class="row">

    </div>
</div>

<!-- Content container -->
<div class="container">

</div>

<div class="container">

</div>

<?php include_once('jsdepends.php') ?>
</body>
</html>