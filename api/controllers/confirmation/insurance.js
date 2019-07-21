module.exports = {


    friendlyName: 'Insurance',


    description: 'Insurance confirmation.',


    inputs: {
        m1sid: {
            type: 'string',
            description: 'Special identifier for the property',
            required: true
        },
        mortid: {
            type: 'string',
            description: 'Mort id given by MBR',
            required: true
        },
        insuredValue: {
            type: 'number',
            description: 'Insured value by insurance company.'
        },
        deductible: {
            type: 'number',
            description: 'Deductible value by insurance company.'
        },
    },


    exits: {
        success: {
            statusCode: 200,
            description: 'Insurance profile updated'
        },
        invalid: {
            statusCode: 400,
            description: 'Invalid input'
        }
    },


    fn: async function (inputs, exits) {
        let application = await Application.findOne({ mort_id: inputs.mortid, m1sid: inputs.m1sid });
        if (application) {
            await Insuranceinfo.create({
                application: application.id,
                insuredValue: inputs.insuredValue,
                deductible: inputs.deductible
            });
            return exits.success({ message: 'Insurance details added.' })
        } else {
            return exits.invalid({ message: 'No application for the given m1sid and mortid' })
        }
    }


};
