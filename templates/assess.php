<?php
// Page initialisation
$location = "assess";
/**
 * Created by PhpStorm.
 * User: Matthieu
 * Date: 23/10/14
 * Time: 14:24
 */
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
    <h1 class="page-header" data-bind="text: pageHeader">Projecttypes</h1>
</div>

<!-- Content container -->
<div class="container">
    <table class="table table-striped">
        <thead>
        <tr>
            <th data-bind="text: codeTableTitle">Code</th>
            <th data-bind="text: nameTableTitle">Name</th>
            <th data-bind="text: descTableTitle">Description</th>
            <th data-bind="text: actionTableTitle">Actions</th>
        </tr>
        </thead>
        <tbody data-bind="foreach: tabledata">
        <tr>
            <td data-bind="text: tcode">--</td>
            <td data-bind="text: tname">--</td>
            <td data-bind="text: tdesc">--</td>
            <td>
                buttons...
            </td>
        </tr>
        </tbody>
    </table>
</div>

<!-- Pagination and action container -->
<div class="container">
    <!-- Pagination -->
    <ul class="pagination float_left">
        <li class="disabled"><a href="#">&laquo;</a></li>
        <li><a href="#">1</a></li>
        <li class="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
    </ul>

    <!--
    <button type="button" class="btn btn-default pagination-button" id="addProjectTypeBtn">
        <span class="glyphicon glyphicon-plus"></span> <span data-bind="text: addBtn"></span>
    </button>
    -->
</div>

<?php include_once('jsdepends.php') ?>
</body>
</html>