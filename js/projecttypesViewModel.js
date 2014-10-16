// View model for the index page
function pageViewModel(gvm) {
    // Global i18n bindings
    

    // Page specific i18n bindings
    gvm.title = ko.computed(function(){i18n.setLocale(gvm.lang()); return gvm.app() + ' - ' + i18n.__("ProjecttypeTitle");}, gvm);
    gvm.pageHeader = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("ProjecttypeTitle");}, gvm);
    gvm.projectname = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("ProjectName");}, gvm);
    gvm.homeManual = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("HomeManual");}, gvm);

    // Pagination i18n bindings
    gvm.addBtn = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("AddBtn")}, gvm);

    // Table i18n bindings
    gvm.codeTableTitle = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("CodeTableTitle");}, gvm);
    gvm.nameTableTitle = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("NameTableTitle");}, gvm);
    gvm.descTableTitle = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("DescTableTitle");}, gvm);
    gvm.actionTableTitle = ko.computed(function(){i18n.setLocale(gvm.lang()); return i18n.__("ActionTableTitle");}, gvm);

    // The table data observable array
    gvm.tabledata = ko.observableArray([]);

    // Add data to the table
    gvm.addTableData = function(id, code, name, desc) {
        // Push data
        var tblOject = {tid: id, tcode: code, tname: name, tdesc: desc}
        gvm.tabledata.push(tblOject);

        // Attach delete handler to delete button
        $('#removebtn-' + id).bind('click', function(event, data){
            // Delete the table item
            deleteTableItem(id, tblOject);
            event.stopPropagation();
        });
    }
}

/*
 * Delete item from table given the id. 
 */
function deleteTableItem(id, tblOject) {
    showYesNoModal("Bent u zeker dat u dit item wil verwijderen?", function(val){
        if(val){
            $.ajax({
                url: "/api/projecttypes/" + id,
                type: "DELETE",
                success: function() {
                    viewModel.tabledata.remove(tblOject);
                }
            });
        }
    });
}

/*
 * Add a new projecttype
 */
function addNewProjecttype(code, name, description) {
    $.ajax({
        url: "/api/projecttype",
        type: "PUT",
        data: "code=" + encodeURIComponent(code) + "&name=" + encodeURIComponent(name) + "&description=" + encodeURIComponent(description),
        success: function(data) {
            viewModel.addTableData(data['id'], data['code'], data['name'], data['description']);
        }
    });
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

function initPage() {
    loadTablePage(1);
}