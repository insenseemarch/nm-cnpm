jQuery("#simulation")
  .on("click", ".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Path_55 svg" ],
                    "attributes": {
                      "path-background-color": "#B4B4B8",
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c9b78908-5c64-4221-a732-ead989ecc4cd"
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
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/df84e86b-a109-4afb-8be6-d00cf9eedf2e",
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
    } else if(jFirer.is("#s-Hotspot_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d9e97b55-9653-443c-a8d6-d31f69399e68",
                    "transition": {
                      "type": "slideright",
                      "duration": 500
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
    } else if(jFirer.is("#s-Subtraction_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_17" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Subtraction_5" ],
                    "attributes": {
                      "opacity": "0.7"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Subtraction_5" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    }
  })
  .on("click", ".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a .toggle", function(event, data) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_2 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_9")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_5 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_5 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_10")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_6 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_6 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_1")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_4 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_4")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_12 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_12 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_2")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_8 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_8 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_3")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_9 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_9 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_12")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_10 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_13")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_11 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_11 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_14")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_13 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_13 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_16")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_15 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_15 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_15")) {
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
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_14 > .backgroundLayer > .colorLayer" ],
                      "attributes": {
                        "background-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_14 > .borderLayer" ],
                      "attributes": {
                        "border-top-color": "#2A1617",
                        "border-right-color": "#2A1617",
                        "border-bottom-color": "#2A1617",
                        "border-left-color": "#2A1617"
                      }
                    },{
                      "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Rectangle_14 span" ],
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
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("focusin", ".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Input_17 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#0A84FF",
                      "border-right-color": "#0A84FF",
                      "border-bottom-color": "#0A84FF",
                      "border-left-color": "#0A84FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Subtraction_5" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
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
  .on("focusout", ".s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-818f79fb-660f-40e6-9ff2-1fb479fb7a9a #s-Input_17 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Subtraction_5" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
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
  });