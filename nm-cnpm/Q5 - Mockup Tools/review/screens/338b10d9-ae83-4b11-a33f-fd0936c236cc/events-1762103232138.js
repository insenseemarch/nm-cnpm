jQuery("#simulation")
  .on("click", ".s-338b10d9-ae83-4b11-a33f-fd0936c236cc .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Email sign in"
                  },"Ok" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Password sign in"
                  },"Ok" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_text_3",
                      "property": "jimGetValue"
                    },"@" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_3",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#F24541",
                      "border-right-width": "1.5px",
                      "border-right-color": "#F24541",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#F24541",
                      "border-left-width": "1.5px",
                      "border-left-color": "#F24541"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Email sign in" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Email sign in" ],
                    "value": ""
                  },
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#F24541",
                      "border-right-width": "1.5px",
                      "border-right-color": "#F24541",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#F24541",
                      "border-left-width": "1.5px",
                      "border-left-color": "#F24541"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#F24541",
                      "border-right-width": "1.5px",
                      "border-right-color": "#F24541",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#F24541",
                      "border-left-width": "1.5px",
                      "border-left-color": "#F24541"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Password sign in" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Password sign in" ],
                    "value": ""
                  },
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
                    "target": "screens/d9e97b55-9653-443c-a8d6-d31f69399e68"
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Input_text_2" ]
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_text_2" ]
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
    } else if(jFirer.is("#s-Text_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Email sign up"
                  },"Ok" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Password sign up"
                  },"Ok" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
                  },
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
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_5",
                    "property": "jimGetValue"
                  },"" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_4",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#F24541",
                      "border-right-width": "1.5px",
                      "border-right-color": "#F24541",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#F24541",
                      "border-left-width": "1.5px",
                      "border-left-color": "#F24541"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#F24541",
                      "border-right-width": "1.5px",
                      "border-right-color": "#F24541",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#F24541",
                      "border-left-width": "1.5px",
                      "border-left-color": "#F24541"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Password sign up" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Password sign up" ],
                    "value": ""
                  },
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
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_text_6",
                      "property": "jimGetValue"
                    },"@" ]
                  } ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_6",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#F24541",
                      "border-right-width": "1.5px",
                      "border-right-color": "#F24541",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#F24541",
                      "border-left-width": "1.5px",
                      "border-left-color": "#F24541"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Email sign up" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Email sign up" ],
                    "value": ""
                  },
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
                    "target": "screens/d9e97b55-9653-443c-a8d6-d31f69399e68"
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Input_text_5" ]
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_text_5" ]
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
  .on("keyup.jim", ".s-338b10d9-ae83-4b11-a33f-fd0936c236cc .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_4",
                    "property": "jimGetValue"
                  } ]
                },"4" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_4",
                    "property": "jimGetValue"
                  } ]
                },"7" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_4",
                    "property": "jimGetValue"
                  } ]
                },"12" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_5",
                    "property": "jimGetValue"
                  } ]
                },"4" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_5",
                    "property": "jimGetValue"
                  } ]
                },"7" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_text_5",
                    "property": "jimGetValue"
                  } ]
                },"12" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-338b10d9-ae83-4b11-a33f-fd0936c236cc .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer",
                  "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_1","#s-Input_text_2","#s-Input_text_3" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
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
  .on("focusin", ".s-338b10d9-ae83-4b11-a33f-fd0936c236cc .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "2.0px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "2.0px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "2.0px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "2.0px",
                      "border-left-color": "#FDCC31"
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
    } else if(jFirer.is("#s-Input_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
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
    } else if(jFirer.is("#s-Input_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_7" ]
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
    } else if(jFirer.is("#s-Input_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "2.0px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "2.0px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "2.0px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "2.0px",
                      "border-left-color": "#FDCC31"
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
    } else if(jFirer.is("#s-Input_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_13" ]
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
    } else if(jFirer.is("#s-Input_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_15" ]
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
    } else if(jFirer.is("#s-Input_text_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#FDCC31",
                      "border-right-width": "1.5px",
                      "border-right-color": "#FDCC31",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#FDCC31",
                      "border-left-width": "1.5px",
                      "border-left-color": "#FDCC31"
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
  .on("focusout", ".s-338b10d9-ae83-4b11-a33f-fd0936c236cc .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_1",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_2",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
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
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_3",
                  "property": "jimGetValue"
                },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_4",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_4",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_5",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_4" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_text_5",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
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
              "condition": {
                "action": "jimRegExp",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_6",
                  "property": "jimGetValue"
                },"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_15" ]
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
    } else if(jFirer.is("#s-Input_text_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_text_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
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
  .on("panelactive", ".s-338b10d9-ae83-4b11-a33f-fd0936c236cc .panelactive", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  },{
                    "target": [ "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_6 > .borderLayer",
                  "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_4 > .borderLayer",
                  "#s-338b10d9-ae83-4b11-a33f-fd0936c236cc #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#F1F6F9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#F1F6F9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#F1F6F9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#F1F6F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_6","#s-Input_text_5","#s-Input_text_4","#s-Input_text_7" ],
                    "value": ""
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
  });