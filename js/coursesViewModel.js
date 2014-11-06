// View model for the courses page
function pageViewModel(gvm) {
    // Page specific i18n bindings
    gvm.title = ko.computed(function(){i18n.setLocale(gvm.lang()); return gvm.app() + ' - ' + i18n.__("CoursesTitle");}, gvm);
    gvm.pageHeader = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("CoursesHeader");}, gvm);
    gvm.projectname = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("ProjectName");}, gvm);

    gvm.availableLocations = ko.observableArray([]);
    gvm.availableTrainings = ko.observableArray([]);
    gvm.availableCourses = ko.observableArray([]);

    gvm.addAvailableLocations = function(id, name) {
        var selectObject = {id: id, locationName: name};
        gvm.availableLocations.push(selectObject);
    }
    gvm.addAvailableTrainings = function(id, name) {
        var selectObject = {id: id, trainingName: name};
        gvm.availableTrainings.push(selectObject);
    }

    gvm.addAvailableCourses = function(id, name) {
        var selectObject = {id: id, courseName: name};
        gvm.availableCourses.push(selectObject);
    }

    gvm.clearAll = function() {
        gvm.availableLocations.removeAll();
        gvm.availableTrainings.removeAll();
        gvm.availableCourses.removeAll();
    }
}

function loadAllSelects($locationid, $trainingid)
{
    $.getJSON('/api/locations', function(data){
        // Load table data
        $.each(data, function(i, item) {
            viewModel.addAvailableLocations(item.id, item.name);
        });
    });
    $.getJSON('/api/trainings/' + $locationid, function(data){
        // Load table data
        $.each(data, function(i, item) {
            viewModel.addAvailableTrainings(item.id, item.name);
        });
    });
    $.getJSON('/api/courses/' + $trainingid, function(data) {
        $.each(data, function(i, item) {
            viewModel.addAvailableCourses(item.id, item.name);
        });
    });
}



function initPage() {
    loadAllSelects(1,1);

    $("#location").on("change", function(event) {
        alert("hallo");
        loadAllSelects(this.val(), 1)
    });
}