<!-- Main menu -->
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
	<div class="container">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/home" data-bind="text: projectname">Grader</a>
		</div>
		<div class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li class="active"><a href="/home" data-bind="text: homeBtn">Home</a></li>
				<li><a href="/assess" data-bind="text: assessBtn">Assess</a></li>
				<li><a href="/settings" data-bind="text: settingsBtn">Settings</a></li>
			</ul>
			
			<ul class="nav navbar-nav navbar-right">
				<li><a href="#" data-bind="text: loginModalTitle" id="usermanagement">Login</a></li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Language <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><span class="navspan" onclick="setLang('en')">English</span></li>
						<li><span class="navspan" onclick="setLang('nl')">Nederlands</span></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- Login window -->
<div class="overlay" id="loginoverlay">
	<div id="login_window">
		<div class="modal_title" data-bind="text: loginModalTitle">
			Login
		</div>
		<div class="modal_error" id="login_error"></div>
		<form id="loginform">
			<div class="form-group">
				<input type="text" class="form-control input-lg" placeholder="Username" data-bind="attr: {placeholder: username}" name="username">
			</div>
			<div class="form-group">
				<input type="password" class="form-control input-lg" placeholder="Password" data-bind="attr: {placeholder: password}" name="password">
			</div>
			<div class="form-group">
				<button class="btn btn-primary btn-lg btn-block" data-bind="text: loginBtn">Log in</button>
				<span class="margin-top"><a href="#" data-bind="text: forgotPswdBtn">Forgot password?</a></span>
			</div>
		</form>
	</div>
</div>