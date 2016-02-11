System.register(['angular2/platform/browser', 'angular2/http', './todo/components/todo_cmp'], function(exports_1) {
    var browser_1, http_1, todo_cmp_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (todo_cmp_1_1) {
                todo_cmp_1 = todo_cmp_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todo_cmp_1.TodoCmp, [http_1.HTTP_PROVIDERS]);
        }
    }
});
