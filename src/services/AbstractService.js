/*
    A Git service is any service that allows for the remote storage of code repositories.
    Said Git service must have an API (or an easy means of accessing the required information).
    Any Git service added to this component must extend this class.

    The following functionality must be found in all added services:
    - Retreival of user profiles (function: getUserProfile)
    - Retreival of user repositories (function: getUserRepository)
    - Retreival of streams of user actions, such as commits (function: getUserStream)

    As Javascript lacks the ability to provide abstract classes that force method implementation, the below is the best that can be done.
*/

export default class AbstractService {
    constructor() {
        if (this.constructor == AbstractService) {
            throw new Error("You cannot initialise this class.");
        }
        if (this.getUserProfile == undefined || this.getUserRepository == undefined || this.getUserStream == undefined) {
            throw new Error("You need to initialise all the required methods");
        }
    }
}