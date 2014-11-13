<?php
// Page initialisation
$location = "courses";
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
    <div class="row">
        <h1 class="page-header" data-bind="text: pageHeader">Courses</h1>
    </div>
    <div class="row">
        <div class="dropdown col-md-4">
            <button class="btn btn-default dropdown-toggle" type="button" id="locations" data-toggle="dropdown" aria-expanded="true">
                Locations
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="locations" data-bind="foreach: availableLocations">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><span data-bind="text: locationName"</a> </li>
            </ul>
        </div>

        <div class="dropdown col-md-4">
            <button class="btn btn-default dropdown-toggle" type="button" id="trainings" data-toggle="dropdown" aria-expanded="true">
                trainings
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="trainings" data-bind="foreach: availableTrainings">
                <li role="presentation"><a role="menuitem" data-bind="tabindex: 'id'" href="#"><span data-bind="text: trainingName"</a></li>
            </ul>
        </div>

        <div class="dropdown col-md-4">
            <button class="btn btn-default dropdown-toggle" type="button" id="availableCourses" data-toggle="dropdown" aria-expanded="true">
                Courses
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="availableTrainings">
            </ul>

        </div>
    </div>




    <div class="col-lg-12"><select id="location" data-bind="options: availableLocations, optionsText: 'locationName', optionsValue: 'id'"></select></div>

    <select id="training" data-bind="options: availableTrainings, optionsText: 'trainingName', optionsValue: 'id'"></select>
    <select id="course" data-bind="options: availableCourses, optionsText: 'courseName', optionsValue: 'id'"></select>

    <button class="btn btn-lg"></button>
</div>

<!-- Content container -->
<div class="container">
</div>

<?php include_once('jsdepends.php') ?>
</body>
</html>
