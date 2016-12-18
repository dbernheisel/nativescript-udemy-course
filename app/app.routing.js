"use strict";
var page1_component_1 = require("./components/page1/page1.component");
var page2_component_1 = require("./components/page2/page2.component");
var page3_component_1 = require("./components/page3/page3.component");
exports.AppRoutes = [
    { path: "", component: page1_component_1.Page1Component },
    { path: "page2", component: page2_component_1.Page2Component },
    { path: "page3", component: page3_component_1.Page3Component }
];
exports.AppComponents = [
    page1_component_1.Page1Component,
    page2_component_1.Page2Component,
    page3_component_1.Page3Component
];
//# sourceMappingURL=app.routing.js.map