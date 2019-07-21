const uuid = require('uuid/v5');

module.exports = {


    friendlyName: 'Application',


    description: 'Application mortgage.',


    inputs: {
        name: {
            type: 'string',
            description: 'Name of the customer. E.g. BOB',
            required: true
        },
        addr: {
            type: 'string',
            description: 'Current address of customer. E.g. 7364, Peprell St',
            required: true
        },
        phone_no: {
            type: 'number',
            description: 'Phone of the customer',
            required: true
        },
        employee_id: {
            type: 'number',
            description: 'Employee id of the customer. E.g. 678406',
            required: true
        },
        employer_name: {
            type: 'string',
            description: 'Name of the employer. E.g. Infosys',
            required: true
        },
        mortgageValue: {
            type: 'number',
            description: 'money required as a loan',
            required: true
        },
        m1sid: {
            required: true,
            type: 'string',
            description: 'id to identify the house'
        }
    },


    exits: {
        success: {
            statusCode: 200,
            description: 'Application Submitted'
        },
    },


    fn: async function (inputs, exits) {
        let appId = uuid(inputs.name, uuid.DNS)

        let appDetails = {
            mort_id: appId,
            name: inputs.name,
            addr: inputs.addr,
            phone_no: inputs.phone_no,
            employee_id: inputs.employee_id,
            employer_name: inputs.employer_name,
            mortgageValue: inputs.mortgageValue,
            m1sid: inputs.m1sid
        }
        let application = await Application.create(appDetails);
        return exits.success({ appDetails, message: 'Application sucessfully created.' });
    }


};
