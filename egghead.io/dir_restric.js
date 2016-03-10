var app = angular.module("superhero", [])

app.directive("superman", function () {

    return {
        restrict: "E", // Element
        template: "<div>Here I am to save the day!</div>"
    }
});

app.directive("ironman", function () {

    return {
        restrict: "A", // Attribute
        template: "<div>I'm Iron Man</div>"
    }
});

app.directive("batman", function () {

    return {
        restrict: "C", // Class
        link: function () {
            alert("I'm Batman");
        }
    }
});

app.directive("wonderwoman", function () {

    return {
        restrict: "M", // coMentario
        link: function () {
            alert("I'm Wonder Woman");
        }
    }
});

