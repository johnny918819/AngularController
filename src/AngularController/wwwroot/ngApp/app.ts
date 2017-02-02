namespace AngularController {
    angular.module(`AngularController`, []);

    class HomeController {
        public message: string = `hello, world!`;//the controller must be linked to the module, like this^
    }

    angular.module(`AngularController`, ).controller(`HomeController`, HomeController); //the dot controller method requires two arguments, one is the name of the controller and the second is the construct it is stored in. 
}