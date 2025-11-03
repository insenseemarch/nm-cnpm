jQuery("#simulation")
  .on("click", ".s-2d764a38-35d1-4287-bca8-933f342c87d6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Path_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/df84e86b-a109-4afb-8be6-d00cf9eedf2e"
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c0f325eb-95cc-411a-8ff3-271e7a5e6b9c"
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
  .on("focusin", ".s-2d764a38-35d1-4287-bca8-933f342c87d6 .focusin", function(event, data) {
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_1 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_7" ]
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_8" ]
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_9" ]
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_5" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_10" ]
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_6" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_6 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_11" ]
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_7" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_12" ]
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_10 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_16" ]
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
    } else if(jFirer.is("#s-Select_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Select_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.5px",
                      "border-top-color": "#000000",
                      "border-right-width": "1.5px",
                      "border-right-color": "#000000",
                      "border-bottom-width": "1.5px",
                      "border-bottom-color": "#000000",
                      "border-left-width": "1.5px",
                      "border-left-color": "#000000"
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
  .on("focusout", ".s-2d764a38-35d1-4287-bca8-933f342c87d6 .focusout", function(event, data) {
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_1 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "10.5pt",
                      "font-weight": "300"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_1 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "300"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_3" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "10.5pt",
                      "font-weight": "300"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_3 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "300"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_4" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "10.5pt",
                      "font-weight": "300"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_4 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "300"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_5" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "10.5pt",
                      "font-weight": "300"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_4 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_5 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "300"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_6" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_6 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "10.5pt",
                      "font-weight": "300"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_5 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_6 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "300"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_7" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "10.5pt",
                      "font-weight": "300"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_6 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_7 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "300"
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "23.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_10 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "10.5pt",
                      "font-weight": "300"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Input_text_7 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#B8BDC3",
                      "border-right-width": "1.0px",
                      "border-right-color": "#B8BDC3",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#B8BDC3",
                      "border-left-width": "1.0px",
                      "border-left-color": "#B8BDC3"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Text_10 span" ],
                    "attributes": {
                      "color": "#686868",
                      "font-family": "'Poppins_21.0.0_google',Arial",
                      "font-size": "9.0pt",
                      "font-weight": "300"
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
    } else if(jFirer.is("#s-Select_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Select_1",
                  "property": "jimGetSelectedValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Select_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#C4C4C4",
                      "border-right-width": "1.0px",
                      "border-right-color": "#C4C4C4",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#C4C4C4",
                      "border-left-width": "1.0px",
                      "border-left-color": "#C4C4C4"
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
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 .s-Select_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-2d764a38-35d1-4287-bca8-933f342c87d6 #s-Select_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#C4C4C4",
                      "border-right-width": "1.0px",
                      "border-right-color": "#C4C4C4",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#C4C4C4",
                      "border-left-width": "1.0px",
                      "border-left-color": "#C4C4C4"
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
  });