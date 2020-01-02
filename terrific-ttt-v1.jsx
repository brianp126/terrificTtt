
var Controller = function(doc) {
// DIALOG
// ======
	var dialog = new Window("dialog"); 
		dialog.text = "Terrific Text to Table "; 
		dialog.orientation = "row"; 
		dialog.alignChildren = ["center","top"]; 
		dialog.spacing = 12; 
		dialog.margins = 16; 

	// GROUP1
	// ======
	var group1 = dialog.add("group", undefined, {name: "group1"}); 
		group1.orientation = "column"; 
		group1.alignChildren = ["left","center"]; 
		group1.spacing = 10; 
		group1.margins = 0; 

	// PANEL1
	// ======
	var panel1 = group1.add("panel", undefined, undefined, {name: "panel1", borderStyle: ""}); 
		panel1.text = "Columns and Rows"; 
		panel1.orientation = "column"; 
		panel1.alignChildren = ["right","top"]; 
		panel1.spacing = 10; 
		panel1.margins = 19; 

	// COLUMNSEPARATOR
	// ===============
	var ColumnSeparator = panel1.add("group", undefined, {name: "ColumnSeparator"}); 
		ColumnSeparator.orientation = "row"; 
		ColumnSeparator.alignChildren = ["left","center"]; 
		ColumnSeparator.spacing = 7; 
		ColumnSeparator.margins = 0; 
		ColumnSeparator.alignment = ["center","top"]; 

	var statictext1 = ColumnSeparator.add("statictext", undefined, undefined, {name: "statictext1"}); 
		statictext1.text = "Column Separator:"; 
		statictext1.preferredSize.width = 118; 
		statictext1.justify = "right"; 
		statictext1.alignment = ["left","center"]; 

	var colSepSelection_array = ["Tab","Comma","Paragraph"]; 
	var colSepSelection = ColumnSeparator.add("dropdownlist", undefined, undefined, {name: "colSepSelection", items: colSepSelection_array}); 
		colSepSelection.selection = 0; 
		colSepSelection.preferredSize.width = 200; 

	// GROUP2
	// ======
	var group2 = panel1.add("group", undefined, {name: "group2"}); 
		group2.orientation = "row"; 
		group2.alignChildren = ["left","center"]; 
		group2.spacing = 7; 
		group2.margins = 0; 
		group2.alignment = ["left","top"]; 

	var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 
		statictext2.text = "Row Separator:"; 
		statictext2.preferredSize.width = 118; 
		statictext2.justify = "right"; 
		statictext2.alignment = ["left","center"]; 

	var rowSepSelection_array = ["Tab","Comma","Paragraph"]; 
	var rowSepSelection = group2.add("dropdownlist", undefined, undefined, {name: "rowSepSelection", items: rowSepSelection_array}); 
		rowSepSelection.selection = 0; 
		rowSepSelection.preferredSize.width = 200; 

	// GROUP3
	// ======
	var group3 = panel1.add("group", undefined, {name: "group3"}); 
		group3.orientation = "row"; 
		group3.alignChildren = ["left","center"]; 
		group3.spacing = 7; 
		group3.margins = 0; 
		group3.alignment = ["left","top"]; 

	var statictext3 = group3.add("statictext", undefined, undefined, {name: "statictext3"}); 
		statictext3.text = "Number of Columns:"; 
		statictext3.preferredSize.width = 118; 
		statictext3.justify = "right"; 
		statictext3.alignment = ["left","center"]; 

	var numCols = group3.add('edittext {properties: {name: "numCols"}}'); 
		numCols.enabled = true; 
		numCols.text = "1"; 
		numCols.preferredSize.width = 200; 

	// GROUP4
	// ======
	var group4 = panel1.add("group", undefined, {name: "group4"}); 
		group4.orientation = "row"; 
		group4.alignChildren = ["left","center"]; 
		group4.spacing = 7; 
		group4.margins = 0; 
		group4.alignment = ["left","top"]; 

	var statictext4 = group4.add("statictext", undefined, undefined, {name: "statictext4"}); 
		statictext4.text = "Table Style:"; 
		statictext4.preferredSize.width = 118; 
		statictext4.justify = "right"; 
		statictext4.alignment = ["left","center"]; 

	var tableStyleDropDown_array = doc.tableStyles.everyItem().name; 
	var tableStyleDropDown = group4.add("dropdownlist", undefined, undefined, {name: "tableStyleDropDown", items: tableStyleDropDown_array}); 
		tableStyleDropDown.selection = 0; 
		tableStyleDropDown.preferredSize.width = 200; 

	// GROUP5
	// ======
	var group5 = group1.add("group", undefined, {name: "group5"}); 
		group5.orientation = "row"; 
		group5.alignChildren = ["left","center"]; 
		group5.spacing = 10; 
		group5.margins = [0,0,0,0]; 

	// PANEL2
	// ======
	var panel2 = group5.add("panel", undefined, undefined, {name: "panel2"}); 
		panel2.text = "Clear Overrides"; 
		panel2.orientation = "column"; 
		panel2.alignChildren = ["left","top"]; 
		panel2.spacing = 10; 
		panel2.margins = [10,15,30,18]; 

	var clearParStyles = panel2.add("checkbox", undefined, undefined, {name: "clearParStyles"}); 
		clearParStyles.helpTip = "Clear the text's existing paragraph styles"; 
		clearParStyles.text = "Paragraph Styles"; 

	var clearCharStyles = panel2.add("checkbox", undefined, undefined, {name: "clearCharStyles"}); 
		clearCharStyles.helpTip = "Clear the text's existing character styles"; 
		clearCharStyles.text = "Character Styles"; 

	// PANEL3
	// ======
	var panel3 = group5.add("panel", undefined, undefined, {name: "panel3"}); 
		panel3.text = "Headers and Footers"; 
		panel3.orientation = "column"; 
		panel3.alignChildren = ["left","top"]; 
		panel3.spacing = 0; 
		panel3.margins = [10,13,10,10]; 

	// GROUP6
	// ======
	var group6 = panel3.add("group", undefined, {name: "group6"}); 
		group6.orientation = "row"; 
		group6.alignChildren = ["left","center"]; 
		group6.spacing = 20; 
		group6.margins = 0; 

	var statictext5 = group6.add("statictext", undefined, undefined, {name: "statictext5"}); 
		statictext5.helpTip = "The # of existing header rows in selected text"; 
		statictext5.text = "Existing header rows"; 

	var headerCount = group6.add('edittext {properties: {name: "headerCount"}}'); 
		headerCount.text = "0"; 
		headerCount.preferredSize.width = 32; 

	// GROUP7
	// ======
	var group7 = panel3.add("group", undefined, {name: "group7"}); 
		group7.orientation = "row"; 
		group7.alignChildren = ["left","center"]; 
		group7.spacing = 20; 
		group7.margins = 5; 

	var statictext6 = group7.add("statictext", undefined, undefined, {name: "statictext6"}); 
		statictext6.helpTip = "The # of existing header rows in selected text"; 
		statictext6.text = "Existing footer rows"; 
		statictext6.preferredSize.width = 120; 

	var footerCount = group7.add('edittext {properties: {name: "footerCount"}}'); 
		footerCount.text = "0"; 
		footerCount.preferredSize.width = 32; 

	// GROUP8
	// ======
	var group8 = dialog.add("group", undefined, {name: "group8"}); 
		group8.orientation = "column"; 
		group8.alignChildren = ["left","center"]; 
		group8.spacing = 10; 
		group8.margins = 5; 

	var okButton = group8.add("button", undefined, undefined, {name: "okButton"}); 
		okButton.text = "OK"; 

	var cancelButton = group8.add("button", undefined, undefined, {name: "cancelButton"}); 
		cancelButton.text = "Cancel"; 

	var processSeparator = function(text) {
		//$.writeln(text.constructor.name);
		switch(String(text)) {
			case "Tab": 
				return "\t";
			case "Paragraph": 
				return "\r";
			case "Comma": 
				return ",";
			default: 
				return undefined;
		}
	};

	validateNumberInputs = function(text) {
		if (isNaN(text) || parseInt(Number(text)) != text) {
			alert("Be sure to input integers for all number fields");
			exit();
		}
		return Number(text);
	};

	//SHOW THE WINDOW
	var result = dialog.show();
	var validatedInputObject = {};
	
	if (result == 1) {
		validatedInputObject.footerCount = validateNumberInputs(footerCount.text);
		validatedInputObject.headerCount = validateNumberInputs(headerCount.text);
		validatedInputObject.clearCharStyles = clearCharStyles.value;
		validatedInputObject.clearParStyles = clearParStyles.value;
        validatedInputObject.tableStyle = String(tableStyleDropDown.selection);
        validatedInputObject.colSepSelection = processSeparator(colSepSelection.selection);
        validatedInputObject.rowSepSelection = processSeparator(rowSepSelection.selection);
        if (!numCols.enabled) {
			validatedInputObject.numCols = undefined;
		}
		else {
			validatedInputObject.numCols = validateNumberInputs(numCols.text);
		}
		return validatedInputObject;
	}
	if (result == 2) {
		exit();
	}
};

/*
var Controller = function() {
	
	var dialName = "Table Maker";
	var dialog = app.dialogs.add({ 
		name: dialName,
		canCancel: true,
	});
	
	var radLabels = {
		tab: "Tab",
		par: "Paragraph",
		com: "Comma",
	};
    var colType = undefined; 
    var rowType = undefined;
    
    var typeStrings = {
        comma: ",",
        paragraph: "\r",
        tab: "\t",
    };

	with (dialog) {
		with (dialogColumns.add()) {
			staticTexts.add({staticLabel: "Column Separator"});
			var colGroup = radiobuttonGroups.add();
			with (colGroup) {
				radiobuttonControls.add
				({staticLabel: radLabels.tab});
				radiobuttonControls.add
				({staticLabel: radLabels.par});
				radiobuttonControls.add
				({staticLabel: radLabels.com});
            }
			staticTexts.add({staticLabel: "Row Separator"});
			var rowGroup = radiobuttonGroups.add();
			with (rowGroup) {
				radiobuttonControls.add
				({staticLabel: radLabels.tab});
				radiobuttonControls.add
				({staticLabel: radLabels.par});
				radiobuttonControls.add
				({staticLabel: radLabels.com});
			}
		}
	}
	
	if (dialog.show()) {
		switch(colGroup.selectedButton) {
			case 0:
				colType = radLabels.tab;
				break;
			case 1: 
				colType = radLabels.par;
				break;
			case 2:
				colType = radLabels.com;
				break;
			default: break;
		}
        if (rowGroup.selectedButton == 0) {
			rowType = radLabels.tab;
		}
		else if (rowGroup.selectedButton == 1) {
			rowType = radLabels.par;
		} 
		else if (rowGroup.selectedButton == 2) {
			rowType = radLabels.com;
        }
	}
	else {
		dialog.destroy();
    }
    
    
	
	this.getColType = function() {
		return typeStrings[colType.toLowerCase()];
    };
    
    this.getRowType = function() {
		return typeStrings[rowType.toLowerCase()];
	};
	
	this.getOptions = function() {
		return radLabels;
	};
	
};
*/

var makeHeaders = function(headerCount, table) {
	for (var i = 0; i < headerCount; i++) {
		table.rows[i].rowType = RowTypes.HEADER_ROW;
	}
};

var makeFooters = function(footerCount, table) {
	var tLen = table.rows.length - 1;
	for (var i = tLen; i > (tLen - footerCount); i--) {
		table.rows[i].rowType = RowTypes.FOOTER_ROW;
	}
};

var overrideClearTypes = function(uiObj) {
	if (uiObj.clearCharStyles && uiObj.clearParStyles) {
		return OverrideType.ALL;
	}
	if (uiObj.clearCharStyles) {
		return OverrideType.CHARACTER_ONLY;
	}
	if (uiObj.clearParStyles) {
		return OverrideType.PARAGRAPH_ONLY;
	}
	return false;
};

var main = function() {
    var text = app.selection[0];
	var cont = new Controller(app.activeDocument);
	var textOverrides = overrideClearTypes(cont);
	if (textOverrides) {
		text.clearOverrides(textOverrides);
	}
	var table = text.convertToTable(cont.colSepSelection, cont.rowSepSelection);
	var tableStyle = cont.tableStyle;
	if (tableStyle.toLowerCase().indexOf("no table style") < 0) {
		table.appliedTableStyle = cont.tableStyle;
	}
	makeHeaders(cont.headerCount, table);
	makeFooters(cont.footerCount, table);
	table.clearTableStyleOverrides();
	/*
    table.headerRowCount = 1;
    table.rows[1].remove();
    var tstyle = new TableController();
	table.appliedTableStyle = "Table Style 1";
	*/
};

main();
//$.writeln(app.selection[0].constructor.name);
//$.writeln(app.selection[0].contents);

//table.fit();

//app.menuActions.item("$ID/Convert Text to Table...").invoke();

