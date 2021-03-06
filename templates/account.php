<?php
// Page initialisation
$location = "account";
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
    <style>
        .avatarimg {
            width: 210px;
        }
        
        .edit-pencil {
            width: 40px;
            height: 40px;
            position: absolute;
            right: 80px;
            bottom: 20px;
            background-color: #FFF;
            border: 5px solid #FFF;
            border-radius: 20px;
            opacity: 0.3;
        }
        
        .edit-pencil:hover {
            opacity: 1;
            cursor: pointer;
        }
        
        .edit-picture {
            position: relative;
        }
    </style>
</head>

<body>
<?php include_once('menu.php') ?>

<!-- Header container -->
<div class="container">
    <h1 class="page-header"><span data-bind="text: pageHeader">My Account</span>: <?php echo Security::getLoggedInName() ?></h1>
</div>

<!-- Content container -->
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <div id="edit-picture">
                <img src="/upload/unknown.png" class="avatarimg" alt="avatar" id="avatar"/>
                <img src="/img/pencil.svg" class="edit-pencil" alt="edit-pencil" id="edit-avatar"/>
            </div>
        </div>
        <div class="col-md-9">
            <table class="table">
                <tr>
                    <td data-bind="text: firstname">First name:</td>
                    <td id="firstname"></td>
                </tr>
                
                <tr>
                    <td data-bind="text: lastname">Last name:</td>
                    <td id="lastname"></td>
                </tr>
                
                <tr>
                    <td data-bind="text: email">Email:</td>
                    <td id="email"></td>
                </tr>
                
                <tr>
                    <td data-bind="text: memberSince">Member since:</td>
                    <td id="member_since"></td>
                </tr>
            </table>
        </div>
    </div>
</div>

<div class="container">
    <h1 class="page-header" data-bind="text: myProjects">Mijn projecten</h1>
</div>

<?php include_once('jsdepends.php') ?>
</body>
</html>
