module.exports = {


    friendlyName: 'Status',


    description: 'Status mortgage.',


    inputs: {
        mortId: {
            type: 'string',
            description: 'mortgage id.',
            required: true
        },
    },


    exits: {
        success: {
            statusCode: 200,
            description: 'Status of application'
        },
        invalid: {
            statusCode: 400,
            description: 'Invalid input'
        }
    },


    fn: async function (inputs, exits) {
        let application = await Application.findOne({ mort_id: inputs.mortId });
        if (application) {
            let employeeInfo = await Employeeinfo.findOne({ application: application.id });
            let insuranceInfo = await Insuranceinfo.findOne({ application: application.id });
            application.employeeInfo = employeeInfo;
            application.insuranceInfo = insuranceInfo;
            return exits.success({ status: application, message: 'Application found' })
        } else {
            return exits.invalid({ message: 'Unable to find application. Please check the mortgage id' })
        }
        return;
    }


};
