module.exports = {


    friendlyName: 'Employment',


    description: 'Employment confirmation.',


    inputs: {
        mortId: {
            type: 'string',
            description: 'mortgage id.',
            required: true
        },
        employeeId: {
            type: 'number',
            description: 'Employee id of the user.',
            required: true
        },
        name: {
            type: "string",
            required: true
        },
        address: {
            type: "string",
            description: "Type in address of employee."
        },
        salary: {
            type: "number",
            description: "Salary of the employee."
        },
        yearsOfEmployment: {
            type: "number",
            description: "Years of employment."
        }
    },


    exits: {
        success: {
            statusCode: 200,
            description: 'Employment profile updated'
        },
        invalid: {
            statusCode: 400,
            description: 'Invalid input'
        }
    },


    fn: async function (inputs, exits) {
        let application = await Application.findOne({ mort_id: inputs.mortId, employee_id: inputs.employeeId });
        if (application) {
            await Employeeinfo.create({
                application: application.id,
                salary: inputs.salary,
                yearsOfEmployment: inputs.yearsOfEmployment
            });
            return exits.success({ message: 'Employment details added.' })
        } else {
            return exits.invalid({ message: 'No application for the given mortid and employee id.' })
        }
    }
};
