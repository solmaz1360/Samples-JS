var SimpleGroup = {
  "ReportVersion": "2015.1.13",
  "ReportGuid": "894d3a78714643a7b698216f6a9b93c7",
  "ReportName": "Report",
  "ReportAlias": "Simple Group",
  "ReportAuthor": "Stimulsoft",
  "ReportDescription": "This sample demonstrates how to create a simple group report with one group.",
  "ReportCreated": "/Date(1085817540000+0300)/",
  "ReportChanged": "/Date(1437976568550+0300)/",
  "EngineVersion": "EngineV2",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Components;\r\nusing Stimulsoft.Base.Drawing;\r\n\r\nnamespace StiReports\r\n{\r\n    \r\n    public class Report : Stimulsoft.Report.StiReport\r\n    {\r\n        \r\n        public Report()\r\n        {\r\n            this.InitializeComponent();\r\n        }\r\n        \r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}",
  "Styles": {
    "0": {
      "Ident": "StiStyle",
      "Name": "Title1",
      "HorAlignment": "Right",
      "VertAlignment": "Center",
      "Font": ";19;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "1": {
      "Ident": "StiStyle",
      "Name": "Title2",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": ";102,77,38;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "2": {
      "Ident": "StiStyle",
      "Name": "Header1",
      "VertAlignment": "Center",
      "Font": ";19;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "3": {
      "Ident": "StiStyle",
      "Name": "Header2",
      "HorAlignment": "Center",
      "VertAlignment": "Center",
      "Font": ";12;Bold;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "4": {
      "Ident": "StiStyle",
      "Name": "Header3",
      "HorAlignment": "Center",
      "VertAlignment": "Center",
      "Font": ";9;Bold;",
      "Border": "All;193,152,89;;;;;;solid:Black",
      "Brush": "solid:242,234,221",
      "TextBrush": "solid:193,152,89",
      "AllowUseHorAlignment": true,
      "AllowUseVertAlignment": true,
      "AllowUseBorderSides": false
    },
    "5": {
      "Ident": "StiStyle",
      "Name": "Header4",
      "HorAlignment": "Center",
      "VertAlignment": "Center",
      "Font": ";9;Bold;",
      "Border": "All;193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "6": {
      "Ident": "StiStyle",
      "Name": "Data1",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "7": {
      "Ident": "StiStyle",
      "Name": "Data2",
      "Font": ";9;;",
      "Border": ";;;;;;;solid:Black",
      "Brush": "solid:240,237,232",
      "TextBrush": "solid:Black",
      "AllowUseFont": false,
      "AllowUseBorderFormatting": false,
      "AllowUseBorderSides": false,
      "AllowUseTextBrush": false,
      "AllowUseTextOptions": false
    },
    "8": {
      "Ident": "StiStyle",
      "Name": "Data3",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:240,237,232",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "9": {
      "Ident": "StiStyle",
      "Name": "Footer1",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": "Top;193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "10": {
      "Ident": "StiStyle",
      "Name": "Footer2",
      "HorAlignment": "Right",
      "VertAlignment": "Center",
      "Font": ";12;Bold;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "11": {
      "Ident": "StiCrossTabStyle",
      "Name": "CrossTab",
      "Color": "242,234,221"
    }
  },
  "ReferencedAssemblies": {
    "0": "System.Dll",
    "1": "System.Drawing.Dll",
    "2": "System.Windows.Forms.Dll",
    "3": "System.Data.Dll",
    "4": "System.Xml.Dll",
    "5": "Stimulsoft.Base.Dll",
    "6": "Stimulsoft.Controls.Dll",
    "7": "Stimulsoft.Report.Dll"
  },
  "Dictionary": {
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "Categories",
        "Alias": "Categories",
        "Columns": {
          "0": {
            "Name": "CategoryID",
            "Index": -1,
            "NameInSource": "CategoryID",
            "Alias": "CategoryID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "CategoryName",
            "Index": -1,
            "NameInSource": "CategoryName",
            "Alias": "CategoryName",
            "Type": "System.String"
          },
          "2": {
            "Name": "Description",
            "Index": -1,
            "NameInSource": "Description",
            "Alias": "Description",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Categories"
      },
      "1": {
        "Ident": "StiDataTableSource",
        "Name": "Customers",
        "Alias": "Customers",
        "Columns": {
          "0": {
            "Name": "CustomerID",
            "Index": -1,
            "NameInSource": "CustomerID",
            "Alias": "CustomerID",
            "Type": "System.String"
          },
          "1": {
            "Name": "CompanyName",
            "Index": -1,
            "NameInSource": "CompanyName",
            "Alias": "CompanyName",
            "Type": "System.String"
          },
          "2": {
            "Name": "ContactName",
            "Index": -1,
            "NameInSource": "ContactName",
            "Alias": "ContactName",
            "Type": "System.String"
          },
          "3": {
            "Name": "ContactTitle",
            "Index": -1,
            "NameInSource": "ContactTitle",
            "Alias": "ContactTitle",
            "Type": "System.String"
          },
          "4": {
            "Name": "Address",
            "Index": -1,
            "NameInSource": "Address",
            "Alias": "Address",
            "Type": "System.String"
          },
          "5": {
            "Name": "City",
            "Index": -1,
            "NameInSource": "City",
            "Alias": "City",
            "Type": "System.String"
          },
          "6": {
            "Name": "Region",
            "Index": -1,
            "NameInSource": "Region",
            "Alias": "Region",
            "Type": "System.String"
          },
          "7": {
            "Name": "PostalCode",
            "Index": -1,
            "NameInSource": "PostalCode",
            "Alias": "PostalCode",
            "Type": "System.String"
          },
          "8": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          },
          "9": {
            "Name": "Phone",
            "Index": -1,
            "NameInSource": "Phone",
            "Alias": "Phone",
            "Type": "System.String"
          },
          "10": {
            "Name": "Fax",
            "Index": -1,
            "NameInSource": "Fax",
            "Alias": "Fax",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Customers"
      },
      "2": {
        "Ident": "StiDataTableSource",
        "Name": "Employees",
        "Alias": "Employees",
        "Columns": {
          "0": {
            "Name": "EmployeeID",
            "Index": -1,
            "NameInSource": "EmployeeID",
            "Alias": "EmployeeID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "LastName",
            "Index": -1,
            "NameInSource": "LastName",
            "Alias": "LastName",
            "Type": "System.String"
          },
          "2": {
            "Name": "FirstName",
            "Index": -1,
            "NameInSource": "FirstName",
            "Alias": "FirstName",
            "Type": "System.String"
          },
          "3": {
            "Name": "Title",
            "Index": -1,
            "NameInSource": "Title",
            "Alias": "Title",
            "Type": "System.String"
          },
          "4": {
            "Name": "BirthDate",
            "Index": -1,
            "NameInSource": "BirthDate",
            "Alias": "BirthDate",
            "Type": "System.DateTime"
          },
          "5": {
            "Name": "HireDate",
            "Index": -1,
            "NameInSource": "HireDate",
            "Alias": "HireDate",
            "Type": "System.DateTime"
          },
          "6": {
            "Name": "Address",
            "Index": -1,
            "NameInSource": "Address",
            "Alias": "Address",
            "Type": "System.String"
          },
          "7": {
            "Name": "City",
            "Index": -1,
            "NameInSource": "City",
            "Alias": "City",
            "Type": "System.String"
          },
          "8": {
            "Name": "Region",
            "Index": -1,
            "NameInSource": "Region",
            "Alias": "Region",
            "Type": "System.String"
          },
          "9": {
            "Name": "PostalCode",
            "Index": -1,
            "NameInSource": "PostalCode",
            "Alias": "PostalCode",
            "Type": "System.String"
          },
          "10": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          },
          "11": {
            "Name": "HomePhone",
            "Index": -1,
            "NameInSource": "HomePhone",
            "Alias": "HomePhone",
            "Type": "System.String"
          },
          "12": {
            "Name": "Notes",
            "Index": -1,
            "NameInSource": "Notes",
            "Alias": "Notes",
            "Type": "System.String"
          },
          "13": {
            "Name": "ReportsTo",
            "Index": -1,
            "NameInSource": "ReportsTo",
            "Alias": "ReportsTo",
            "Type": "System.Int32"
          }
        },
        "NameInSource": "Demo.Employees"
      },
      "3": {
        "Ident": "StiDataTableSource",
        "Name": "Order Details",
        "Alias": "Order Details",
        "Columns": {
          "0": {
            "Name": "OrderID",
            "Index": -1,
            "NameInSource": "OrderID",
            "Alias": "OrderID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "ProductID",
            "Index": -1,
            "NameInSource": "ProductID",
            "Alias": "ProductID",
            "Type": "System.Int32"
          },
          "2": {
            "Name": "UnitPrice",
            "Index": -1,
            "NameInSource": "UnitPrice",
            "Alias": "UnitPrice",
            "Type": "System.Decimal"
          },
          "3": {
            "Name": "Quantity",
            "Index": -1,
            "NameInSource": "Quantity",
            "Alias": "Quantity",
            "Type": "System.Int16"
          },
          "4": {
            "Name": "Discount",
            "Index": -1,
            "NameInSource": "Discount",
            "Alias": "Discount",
            "Type": "System.Single"
          }
        },
        "NameInSource": "Demo.Order Details"
      },
      "4": {
        "Ident": "StiDataTableSource",
        "Name": "Orders",
        "Alias": "Orders",
        "Columns": {
          "0": {
            "Name": "OrderID",
            "Index": -1,
            "NameInSource": "OrderID",
            "Alias": "OrderID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "CustomerID",
            "Index": -1,
            "NameInSource": "CustomerID",
            "Alias": "CustomerID",
            "Type": "System.String"
          },
          "2": {
            "Name": "EmployeeID",
            "Index": -1,
            "NameInSource": "EmployeeID",
            "Alias": "EmployeeID",
            "Type": "System.Int32"
          },
          "3": {
            "Name": "OrderDate",
            "Index": -1,
            "NameInSource": "OrderDate",
            "Alias": "OrderDate",
            "Type": "System.DateTime"
          },
          "4": {
            "Name": "RequiredDate",
            "Index": -1,
            "NameInSource": "RequiredDate",
            "Alias": "RequiredDate",
            "Type": "System.DateTime"
          },
          "5": {
            "Name": "ShippedDate",
            "Index": -1,
            "NameInSource": "ShippedDate",
            "Alias": "ShippedDate",
            "Type": "System.DateTime"
          },
          "6": {
            "Name": "ShipVia",
            "Index": -1,
            "NameInSource": "ShipVia",
            "Alias": "ShipVia",
            "Type": "System.Int32"
          },
          "7": {
            "Name": "Freight",
            "Index": -1,
            "NameInSource": "Freight",
            "Alias": "Freight",
            "Type": "System.Decimal"
          },
          "8": {
            "Name": "ShipName",
            "Index": -1,
            "NameInSource": "ShipName",
            "Alias": "ShipName",
            "Type": "System.String"
          },
          "9": {
            "Name": "ShipAddress",
            "Index": -1,
            "NameInSource": "ShipAddress",
            "Alias": "ShipAddress",
            "Type": "System.String"
          },
          "10": {
            "Name": "ShipCity",
            "Index": -1,
            "NameInSource": "ShipCity",
            "Alias": "ShipCity",
            "Type": "System.String"
          },
          "11": {
            "Name": "ShipRegion",
            "Index": -1,
            "NameInSource": "ShipRegion",
            "Alias": "ShipRegion",
            "Type": "System.String"
          },
          "12": {
            "Name": "ShipPostalCode",
            "Index": -1,
            "NameInSource": "ShipPostalCode",
            "Alias": "ShipPostalCode",
            "Type": "System.String"
          },
          "13": {
            "Name": "ShipCountry",
            "Index": -1,
            "NameInSource": "ShipCountry",
            "Alias": "ShipCountry",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Orders"
      },
      "5": {
        "Ident": "StiDataTableSource",
        "Name": "Products",
        "Alias": "Products",
        "Columns": {
          "0": {
            "Name": "ProductID",
            "Index": -1,
            "NameInSource": "ProductID",
            "Alias": "ProductID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "ProductName",
            "Index": -1,
            "NameInSource": "ProductName",
            "Alias": "ProductName",
            "Type": "System.String"
          },
          "2": {
            "Name": "SupplierID",
            "Index": -1,
            "NameInSource": "SupplierID",
            "Alias": "SupplierID",
            "Type": "System.Int32"
          },
          "3": {
            "Name": "CategoryID",
            "Index": -1,
            "NameInSource": "CategoryID",
            "Alias": "CategoryID",
            "Type": "System.Int32"
          },
          "4": {
            "Name": "QuantityPerUnit",
            "Index": -1,
            "NameInSource": "QuantityPerUnit",
            "Alias": "QuantityPerUnit",
            "Type": "System.String"
          },
          "5": {
            "Name": "UnitPrice",
            "Index": -1,
            "NameInSource": "UnitPrice",
            "Alias": "UnitPrice",
            "Type": "System.Decimal"
          },
          "6": {
            "Name": "UnitsInStock",
            "Index": -1,
            "NameInSource": "UnitsInStock",
            "Alias": "UnitsInStock",
            "Type": "System.Int16"
          }
        },
        "NameInSource": "Demo.Products"
      },
      "6": {
        "Ident": "StiDataTableSource",
        "Name": "Shippers",
        "Alias": "Shippers",
        "Columns": {
          "0": {
            "Name": "ShipperID",
            "Index": -1,
            "NameInSource": "ShipperID",
            "Alias": "ShipperID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "CompanyName",
            "Index": -1,
            "NameInSource": "CompanyName",
            "Alias": "CompanyName",
            "Type": "System.String"
          },
          "2": {
            "Name": "Phone",
            "Index": -1,
            "NameInSource": "Phone",
            "Alias": "Phone",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Shippers"
      },
      "7": {
        "Ident": "StiDataTableSource",
        "Name": "Suppliers",
        "Alias": "Suppliers",
        "Columns": {
          "0": {
            "Name": "SupplierID",
            "Index": -1,
            "NameInSource": "SupplierID",
            "Alias": "SupplierID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "CompanyName",
            "Index": -1,
            "NameInSource": "CompanyName",
            "Alias": "CompanyName",
            "Type": "System.String"
          },
          "2": {
            "Name": "ContactName",
            "Index": -1,
            "NameInSource": "ContactName",
            "Alias": "ContactName",
            "Type": "System.String"
          },
          "3": {
            "Name": "ContactTitle",
            "Index": -1,
            "NameInSource": "ContactTitle",
            "Alias": "ContactTitle",
            "Type": "System.String"
          },
          "4": {
            "Name": "Address",
            "Index": -1,
            "NameInSource": "Address",
            "Alias": "Address",
            "Type": "System.String"
          },
          "5": {
            "Name": "City",
            "Index": -1,
            "NameInSource": "City",
            "Alias": "City",
            "Type": "System.String"
          },
          "6": {
            "Name": "Region",
            "Index": -1,
            "NameInSource": "Region",
            "Alias": "Region",
            "Type": "System.String"
          },
          "7": {
            "Name": "PostalCode",
            "Index": -1,
            "NameInSource": "PostalCode",
            "Alias": "PostalCode",
            "Type": "System.String"
          },
          "8": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          },
          "9": {
            "Name": "Phone",
            "Index": -1,
            "NameInSource": "Phone",
            "Alias": "Phone",
            "Type": "System.String"
          },
          "10": {
            "Name": "Fax",
            "Index": -1,
            "NameInSource": "Fax",
            "Alias": "Fax",
            "Type": "System.String"
          },
          "11": {
            "Name": "HomePage",
            "Index": -1,
            "NameInSource": "HomePage",
            "Alias": "HomePage",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Suppliers"
      },
      "8": {
        "Ident": "StiDataTableSource",
        "Name": "Countries",
        "Alias": "Countries",
        "Columns": {
          "0": {
            "Name": "CountriesID",
            "Index": -1,
            "NameInSource": "CountriesID",
            "Alias": "CountriesID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "Flag",
            "Index": -1,
            "NameInSource": "Flag",
            "Alias": "Flag",
            "Type": "System.Byte[]"
          },
          "2": {
            "Name": "CountryName",
            "Index": -1,
            "NameInSource": "CountryName",
            "Alias": "CountryName",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Countries"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiXmlDatabase",
        "Name": "Demo",
        "Alias": "Demo",
        "PathData": "Data/Demo.xml",
        "PathSchema": "Data/Demo.xsd"
      }
    },
    "Relations": {
      "0": {
        "Name": "Employees",
        "ChildColumns": {
          "0": "ReportsTo"
        },
        "ParentColumns": {
          "0": "EmployeeID"
        },
        "NameInSource": "EmployeesEmployees",
        "Alias": "Employees",
        "ParentSource": "Employees",
        "ChildSource": "Employees"
      },
      "1": {
        "Name": "Products",
        "ChildColumns": {
          "0": "ProductID"
        },
        "ParentColumns": {
          "0": "ProductID"
        },
        "NameInSource": "ProductsOrder_Details",
        "Alias": "Products",
        "ParentSource": "Products",
        "ChildSource": "Order Details"
      },
      "2": {
        "Name": "Orders",
        "ChildColumns": {
          "0": "OrderID"
        },
        "ParentColumns": {
          "0": "OrderID"
        },
        "NameInSource": "OrdersOrder_Details",
        "Alias": "Orders",
        "ParentSource": "Orders",
        "ChildSource": "Order Details"
      },
      "3": {
        "Name": "Customers",
        "ChildColumns": {
          "0": "CustomerID"
        },
        "ParentColumns": {
          "0": "CustomerID"
        },
        "NameInSource": "CustomersOrders",
        "Alias": "Customers",
        "ParentSource": "Customers",
        "ChildSource": "Orders"
      },
      "4": {
        "Name": "Shippers",
        "ChildColumns": {
          "0": "ShipVia"
        },
        "ParentColumns": {
          "0": "ShipperID"
        },
        "NameInSource": "ShippersOrders",
        "Alias": "Shippers",
        "ParentSource": "Shippers",
        "ChildSource": "Orders"
      },
      "5": {
        "Name": "Employees",
        "ChildColumns": {
          "0": "EmployeeID"
        },
        "ParentColumns": {
          "0": "EmployeeID"
        },
        "NameInSource": "EmployeesOrders",
        "Alias": "Employees",
        "ParentSource": "Employees",
        "ChildSource": "Orders"
      },
      "6": {
        "Name": "Categories",
        "ChildColumns": {
          "0": "CategoryID"
        },
        "ParentColumns": {
          "0": "CategoryID"
        },
        "NameInSource": "CategoriesProducts",
        "Alias": "Categories",
        "ParentSource": "Categories",
        "ChildSource": "Products"
      },
      "7": {
        "Name": "Suppliers",
        "ChildColumns": {
          "0": "SupplierID"
        },
        "ParentColumns": {
          "0": "SupplierID"
        },
        "NameInSource": "SuppliersProducts",
        "Alias": "Suppliers",
        "ParentSource": "Suppliers",
        "ChildSource": "Products"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiPage",
      "Name": "Page1",
      "Guid": "1bbc1ab1b607416bad7fa7eb3b60df7a",
      "Interaction": {
        "Ident": "StiInteraction"
      },
      "Border": ";;2;;;;;solid:Black",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiPageFooterBand",
          "Name": "PageFooterBand2",
          "Guid": "8b753b3932e344fb8e317eda78801654",
          "ClientRectangle": "0,27.3,19,0.4",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text5",
              "Guid": "b8f2488d92d14b0fb16baea1e12e98aa",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "6.8,0,12.2,0.4",
              "ComponentStyle": "Footer1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{PageNofM}"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": ";193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38"
            }
          }
        },
        "1": {
          "Ident": "StiReportTitleBand",
          "Name": "ReportTitleBand1",
          "Guid": "7f6fabeb40ae497594242d42e0aa7deb",
          "ClientRectangle": "0,0.4,19,1.8",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text20",
              "Guid": "7a9756a6ba0a42c389e82db7193f16ee",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "9.4,0,9.6,0.8",
              "ComponentStyle": "Title1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Stimulsoft"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";19;;",
              "Border": "Bottom;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:193,152,89",
              "Type": "Expression"
            },
            "1": {
              "Ident": "StiText",
              "Name": "Text23",
              "Guid": "df5a73b62e9e437da8ecd7086d777c61",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,9.4,0.8",
              "ComponentStyle": "Title1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Simple Group"
              },
              "VertAlignment": "Center",
              "Font": ";19;;",
              "Border": "Bottom;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:193,152,89",
              "Type": "Expression"
            },
            "2": {
              "Ident": "StiText",
              "Name": "Text7",
              "Guid": "9b62606fcda649db8334690e728b9529",
              "CanGrow": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,1,14.6,0.8",
              "ComponentStyle": "Title2",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{ReportDescription}"
              },
              "Font": ";9;;",
              "Border": ";102,77,38;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              },
              "Type": "Expression"
            },
            "3": {
              "Ident": "StiText",
              "Name": "Text18",
              "Guid": "f4a34689309d4d78821cdddb8045c019",
              "CanGrow": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "14.6,1,4.4,0.8",
              "ComponentStyle": "Title2",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Date: {Today.ToString(\"Y\")}"
              },
              "HorAlignment": "Right",
              "Font": ";9;;",
              "Border": ";102,77,38;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              },
              "Type": "Expression"
            }
          }
        },
        "2": {
          "Ident": "StiGroupHeaderBand",
          "Name": "GroupHeaderBand1",
          "ClientRectangle": "0,3,19,1.8",
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "Bookmark": {
            "Value": "{Customers.CompanyName.Substring(0, 1)}"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text8",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0.4,19,0.8",
              "ComponentStyle": "Header1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Customers.CompanyName.Substring(0, 1)}"
              },
              "VertAlignment": "Center",
              "Font": ";19;;",
              "Border": ";193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:193,152,89"
            },
            "1": {
              "Ident": "StiText",
              "Name": "Text11",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "6.8,1.2,5.2,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Address"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89"
            },
            "2": {
              "Ident": "StiText",
              "Name": "Text10",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,1.2,6.8,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Company"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89"
            },
            "3": {
              "Ident": "StiText",
              "Name": "Text12",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "12,1.2,3,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Phone"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89"
            },
            "4": {
              "Ident": "StiText",
              "Name": "Text13",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "15,1.2,4,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Contact"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89"
            }
          },
          "KeepGroupTogether": true,
          "Condition": {
            "Value": "{Customers.CompanyName.Substring(0, 1)}"
          }
        },
        "3": {
          "Ident": "StiDataBand",
          "Name": "DataBand1",
          "ClientRectangle": "0,5.6,19,0.6",
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "Bookmark": {
            "Value": "{Customers.CompanyName}"
          },
          "Border": "Left, Right;193,152,89;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text2",
              "CanGrow": true,
              "GrowToHeight": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "6.8,0,5.2,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Customers.Address}"
              },
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              }
            },
            "1": {
              "Ident": "StiText",
              "Name": "Text4",
              "CanGrow": true,
              "GrowToHeight": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "12,0,3,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Customers.Phone}"
              },
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              }
            },
            "2": {
              "Ident": "StiText",
              "Name": "Text3",
              "CanGrow": true,
              "GrowToHeight": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "15,0,4,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Customers.ContactTitle}"
              },
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left, Right;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              }
            },
            "3": {
              "Ident": "StiText",
              "Name": "Text1",
              "CanGrow": true,
              "GrowToHeight": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,6.8,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Line}.{Customers.CompanyName}"
              },
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              },
              "Type": "Expression"
            }
          },
          "DataSourceName": "Customers",
          "EvenStyle": "Data2",
          "Sort": {
            "0": "ASC",
            "1": "CompanyName"
          }
        },
        "4": {
          "Ident": "StiGroupFooterBand",
          "Name": "GroupFooterBand1",
          "ClientRectangle": "0,7,19,0.6",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text9",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,19,0.6",
              "ComponentStyle": "Footer1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Count: {Count()}"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38"
            }
          }
        },
        "5": {
          "Ident": "StiFooterBand",
          "Name": "FooterBand1",
          "ClientRectangle": "0,8.4,19,0.2",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text6",
              "Guid": "943687c2821a4aaa9808df3d1c463697",
              "CanGrow": true,
              "GrowToHeight": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,19,0.2",
              "ComponentStyle": "Footer1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": ";193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              }
            }
          },
          "PrintOnAllPages": true
        }
      },
      "PageWidth": 21.0,
      "PageHeight": 29.7,
      "Watermark": {
        "TextBrush": "solid:50,0,0,0"
      },
      "Margins": {
        "Left": 1.0,
        "Right": 1.0,
        "Top": 1.0,
        "Bottom": 1.0
      }
    }
  }
}