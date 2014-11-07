// View model for the courses page
function pageViewModel(gvm) {
    // Page specific i18n bindings
    gvm.title = ko.computed(function(){i18n.setLocale(gvm.lang()); return gvm.app() + ' - ' + i18n.__("CoursesTitle");}, gvm);
    gvm.pageHeader = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("CoursesHeader");}, gvm);
    gvm.projectname = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("ProjectName");}, gvm);

    gvm.isUpdating = false;

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
    viewModel.clearAll();
    $.when($.getJSON('/api/courses/' + $locationid + '/' +  $trainingid, function(data) {
        $.each(data[1],function(i, item) {
            viewModel.addAvailableLocations(item.id, item.name);
        });
        $.each(data[2], function(i, item) {
            viewModel.addAvailableTrainings(item.id, item.name);
        });
        $.each(data[3], function(i, item) {
            viewModel.addAvailableCourses(item.id, item.name);
        });
    })).done($("#location").bind("onChange", function() {
            alert("hallo");
            loadTrainingsAndCourses($("#location").val(), $("#training").val());
        }));
}

function loadTrainingsAndCourses($locationid, $trainingid) {
    viewModel.availableTrainings.removeAll();
    viewModel.availableCourses.removeAll();
    $.getJSON('/api/courses/' + $locationid + '/' +  $trainingid, function(data) {
        $.each(data[2], function(i, item) {
            viewModel.addAvailableTrainings(item.id, item.name);
        });
    }).done(loadCourses($("#location").val(), $("#training").val()));

}

function loadCourses($locationid, $trainingid) {
    viewModel.availableCourses.removeAll();
    $.getJSON('/api/courses/' + $locationid + '/' +  $trainingid, function(data) {
        $.each(data[3], function(i, item) {
            viewModel.addAvailableCourses(item.id, item.name);
        });
    });
}



function initPage() {
    loadAllSelects(1,4);
}