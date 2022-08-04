const componentMap = {
    "1": require("../component-1"),
    "2": require("../component-2"),
    "3": require("../component-3")
}

module.exports = function(componentName){
    return componentMap[componentName];
}