/**
 * show-config
 * @usage
 *  peon show-config
 * @param grunt
 * @returns {*}
 */
/*global module*/
module.exports = function (grunt) {
    "use strict";
    var desc = "Prints the Grunt configuration object.\nCan optionally add a argument :task to show that task's configuration";
    grunt.registerTask('show-config', desc, function (task) {
        var configObject;
        configObject = grunt.config.get();
        if (task) {
            if (configObject[task]) {
                configObject = configObject[task];
            } else {
                grunt.fatal(task + ' does not have any configurations');
            }
        }
        grunt.log.writeln(JSON.stringify(configObject, null, 4));
    });
};