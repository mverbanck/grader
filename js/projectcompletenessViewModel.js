function pageViewModel(gvm) {
    // projecttitle
    gvm.projecttitle = ko.observable("");
    gvm.projectId = $("#projectHeader").data('value');
    gvm.lastIdFromDb = -1;
    gvm.lastId = -1;

    // Page specific i18n bindings
    gvm.title = ko.computed(function (){i18n.setLocale(gvm.lang()); return gvm.app() + ' - ' + i18n.__("ProjectTitle") + ": " + gvm.projecttitle();}, gvm);
    gvm.pageHeader = ko.observable("Project");
    gvm.projectname = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("ProjectName");}, gvm);
    gvm.projectCompletenessTitle = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("ProjectCompletenessTitle");}, gvm);


    gvm.getProjectInfo = function() {
        $.getJSON('/api/project/' + gvm.projectId, function(data) {
            gvm.pageHeader(data[0].code + ' - ' + data[0].name);
        });
    };

    gvm.documents = ko.observableArray([]);

    gvm.addDocument = function(id, description, amount_required, weight) {
        var document = {id: id, description: description, amount_required: amount_required, weight: weight};
        gvm.documents.push(document);

        $('#removebtn-' + id).bind('click', function(event, data) {
            gvm.removeDocument(id, document);
            event.stopPropagation();
        });
    };

    gvm.addDocumentToSubmit = function() {
        ++gvm.lastId;
        gvm.addDocument(gvm.lastId, "", "", "");
    };

    gvm.getDocumentsToSubmit = function() {
        $.getJSON('/api/project/'+ gvm.projectId + '/documents', function(data) {
            $.each(data, function(i, item) {
                gvm.addDocument(item.id, item.description, item.amount_required, item.weight);
                gvm.lastIdFromDb = item.id;
                gvm.lastId = item.id;
            });
        });
    };

    gvm.removeDocument = function(id, document) {
        if(id <= gvm.lastIdFromDb) {
            $.ajax({
                url: "/api/delete/document/" + id,
                type: "DELETE",
                success: function() {
                    gvm.documents.remove(document);
                }
            });
        } else {
            gvm.documents.remove(document);
        }
    };

    gvm.saveDocumentsToSubmit = function() {
        console.log("/api/project/" + gvm.projectId + "/documents/" + gvm.lastId);
        console.log(ko.toJS(gvm.documents));
        var json = JSON.stringify(ko.toJS(gvm.documents));
        $.ajax({
            url: "/api/project/" + gvm.projectId + "/documents/" + gvm.lastIdFromDb,
            type: "POST",
            datatype: "json",
            data: {documents: json},
            success: function() {
                console.log("success");
                location.reload();
            },
            error: function() {
                console.log("error");
            }
        });
    };
}

function initPage() {
    viewModel.getProjectInfo();
    viewModel.getDocumentsToSubmit();
}