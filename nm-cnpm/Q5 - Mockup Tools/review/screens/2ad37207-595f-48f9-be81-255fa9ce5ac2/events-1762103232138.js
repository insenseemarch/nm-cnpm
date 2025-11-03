jQuery("#simulation")
  .on("click", ".s-2ad37207-595f-48f9-be81-255fa9ce5ac2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c9b78908-5c64-4221-a732-ead989ecc4cd",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_9 svg" ],
                    "attributes": {
                      "path-background-color": "#B32C1A",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_11 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_10 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_12 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_13 svg" ],
                    "attributes": {
                      "path-background-color": "#E4E7EB",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_10 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_9 svg" ],
                    "attributes": {
                      "path-background-color": "#B32C1A",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_11 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_12 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_13 svg" ],
                    "attributes": {
                      "path-background-color": "#E4E7EB",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_11 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_10 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_9 svg" ],
                    "attributes": {
                      "path-background-color": "#B32C1A",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_12 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_13 svg" ],
                    "attributes": {
                      "path-background-color": "#E4E7EB",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_11 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_10 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_12 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_9 svg" ],
                    "attributes": {
                      "path-background-color": "#B32C1A",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_13 svg" ],
                    "attributes": {
                      "path-background-color": "#E4E7EB",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_11 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_10 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_12 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_13 svg",
                  "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Path_9 svg" ],
                    "attributes": {
                      "path-background-color": "#B32C1A",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FE7F42"
                    }
                  },{
                    "target": [ "#s-2ad37207-595f-48f9-be81-255fa9ce5ac2 #s-Button_1 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d9e97b55-9653-443c-a8d6-d31f69399e68",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-2ad37207-595f-48f9-be81-255fa9ce5ac2 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimHide",
                    "parameter": {
                      "target": [ "#s-Path_8" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Union_1" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  });