// Page wide variables  
var viewModel = null;
var i18n = null;

// View model for the index page
function ViewModel() {
	// Global settings
	this.lang = ko.observable(document.documentElement.lang);
	
	
	// Global i18n bindings
	this.loginModalTitle = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("LoginModalTitle")}, this);
	this.homeBtn = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("HomeButton")}, this);
	this.assessBtn = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("AssessButton")}, this);
	this.structureBtn = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("StructureButton")}, this);
	this.forgotPswdBtn = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("ForgotPassword")}, this);
	this.loginBtn = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("LoginBtn")}, this);
	this.username = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("Username")}, this);
	this.password = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("Password")}, this);
	this.projecttypeBtn = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("ProjecttypesButton")}, this); 
	
	// Page specific i18n bindings
	this.title = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("ProjectName") + ' - ' + i18n.__("ProjecttypeTitle")}, this);
	this.pageHeader = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("ProjecttypeTitle")}, this);
	this.projectname = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("ProjectName")}, this);
	this.homeManual = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("HomeManual")}, this);
	
	// Pagination i18n bindings
	this.addBtn = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("AddBtn")}, this);
	
	// Table i18n bindings
	this.codeTableTitle = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("CodeTableTitle")}, this);
	this.nameTableTitle = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("NameTableTitle")}, this);
	this.descTableTitle = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("DescTableTitle")}, this);
	this.actionTableTitle = ko.computed(function(){i18n.setLocale(this.lang()); return i18n.__("ActionTableTitle")}, this);
	
	// The table data observable array
	this.tabledata = ko.observableArray([]);
	
	// Add data to the table
	this.addTableData = function(id, code, name, desc) {
		this.tabledata.push({
			tcode: code,
			tname: name,
			tdesc: desc
		});
	}
	
	/**
	 * Change the UI locale
	 * @locale: the new UI locale
	 */
	this.setLocale = function(locale) {
		this.lang(locale);
		i18n.setLocale(this.lang());
	}
}

/*
 * Load page of the table
 */
function loadTablePage(pagenr)
{
	$.getJSON('/api/projecttypes/page/' + pagenr, function(data){
		$.each(data, function(i, item) {
			viewModel.addTableData(item.id, item.code, item.name, item.description);
		});
	});
}

$('document').ready(function(){
	
	// Instantiate internationalisation
	i18n = new I18n({
		directory: "/locales",
		locale: document.documentElement.lang,
		extension: ".json"
	});
	
	// Activate knockout framework
	viewModel = new ViewModel();
	ko.applyBindings(viewModel, document.getElementById("htmldoc"));
	
	// Load current table page
	loadTablePage(1);
});

/* Set the site language */
function setLang(locale) {
	viewModel.setLocale(locale);
	/* Close navbar when open */
	$(".navbar-collapse").stop().css({ 'height': '1px' }).removeClass('in').addClass("collapse");
	$(".navbar-toggle").stop().removeClass('collapsed');
	return false;
}