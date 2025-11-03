(function(window, undefined) {
  var dictionary = {
    "93c53e9d-b0cd-4512-9c02-9b2bd6caf734": "Details Not User Bidding",
    "a6efc21c-9ba7-4d54-bb67-9be1dd853861": "BidFail",
    "c0f325eb-95cc-411a-8ff3-271e7a5e6b9c": "Homepage seller 2",
    "2ad37207-595f-48f9-be81-255fa9ce5ac2": "Reviews",
    "c9b78908-5c64-4221-a732-ead989ecc4cd": "Delivery State",
    "006057f6-f14a-4706-9537-aefbecdd2d88": "Payment Screen User",
    "d998e6cd-fa72-40df-a006-3c8e281ef660": "Details User Bidding",
    "d6401984-3a6f-4869-a05d-b0655aca3756": "BidSuccess",
    "5d8ec431-0196-4c5c-ab89-4232ef707d50": "Homepage seller 4",
    "8bf2b23b-a86d-411f-a8d8-6198e3f59f71": "Details Seller Extending",
    "de608a4e-25b9-42df-9de3-919da0cab721": "Details Seller Min Price",
    "d9e97b55-9653-443c-a8d6-d31f69399e68": "Homepage buyer",
    "338b10d9-ae83-4b11-a33f-fd0936c236cc": "Sign In / Sign Up",
    "6bd39655-47aa-4f00-a572-c57bcff7c78a": "Bidding Screen",
    "818f79fb-660f-40e6-9ff2-1fb479fb7a9a": "Advanced Search",
    "647df7b0-d9d6-4702-b227-31273bf4408b": "Details Seller Bidding 2",
    "de9af6f2-0485-4601-920c-85426e62a7fc": "Payment Screen Seller 1",
    "2d764a38-35d1-4287-bca8-933f342c87d6": "Add Product",
    "827e76fa-8e21-43e1-b3b0-1e947ecfe2af": "Payment Screen Seller 2",
    "e42bd8c0-3cee-4072-b79a-8d8e14a57f93": "Details Seller Bidding 1",
    "ee5c530f-dffe-4156-93bf-0b32f5a502eb": "Homepage seller 3",
    "03ceacc5-853d-40e3-a85b-82902c985950": "Shopping Cart",
    "df84e86b-a109-4afb-8be6-d00cf9eedf2e": "Homepage seller 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);