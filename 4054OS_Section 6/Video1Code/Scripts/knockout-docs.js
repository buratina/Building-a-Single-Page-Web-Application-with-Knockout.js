﻿var KnockoutDocs = Base.extend({
    constructor: function () {
        this.items = ko.observableArray();
        this.selectedItem = ko.observable();

        this.filter = new Filter();
        this.filteredItems = ko.computed(this._getFilteredItems, this);


        this.createDocument = this.createDocument.bind(this);
        this.createSpreadsheet = this.createSpreadsheet.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        
    },
    createDocument: function() {
        this.addItem(new Document('[New Document]', ''));
    },
    createSpreadsheet: function() {
        this.addItem(new Spreadsheet('[New Spreadsheet]', 5, 3));
    },
    addItem: function(item) {
        this.items.push(item);
        this.selectedItem(item);
    },
    editItem: function (item) {
        this.selectedItem(item);
    },
    _getFilteredItems: function() {
        return _.filter(this.items(), function(item) {
            return this.filter.itemMatchesFilter(item);
        }, this);
    }
});