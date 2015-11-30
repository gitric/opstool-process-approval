steal(
        'appdev',
        'opstools/ProcessApproval/models/base/PARequest.js'
).then( function(){

    // Namespacing conventions:
    // AD.Model.extend('[application].[Model]', {static}, {instance} );  --> Object
    AD.Model.extend('opstools.ProcessApproval.PARequest', {

        useSockets: true,

/*
        findAll: 'GET /opstool-process-approval/parequest',
        findOne: 'GET /opstool-process-approval/parequest/{id}',
        create:  'POST /opstool-process-approval/parequest',
        update:  'PUT /opstool-process-approval/parequest/{id}',
        destroy: 'DELETE /opstool-process-approval/parequest/{id}',
        describe: function() {},   // returns an object describing the Model definition
        fieldId: 'id',             // which field is the ID
        fieldLabel:'actionKey'      // which field is considered the Label
*/
    },{

        lock:function() {
            return AD.comm.socket.get({ url: '/opstool-process-approval/parequest/lock/'+this.getID() });
        }, 

        unlock:function() {
            return AD.comm.socket.get({ url: '/opstool-process-approval/parequest/unlock/'+this.getID() });
        }
/*
        // Already Defined:
        model: function() {},   // returns the Model Class for an instance
        getID: function() {},   // returns the unique ID of this row
        getLabel: function() {} // returns the defined label value
*/
    });


});