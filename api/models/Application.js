/**
 * Application.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

        mort_id: {
            type: 'string',
            required: true,
            unique: true,
            maxLength: 200,
            example: 'uuid'
        },
        name: {
            type: 'string',
            required: true,
            maxLength: 200,
            example: 'BOB'
        },
        addr: {
            type: 'string',
            required: true,
            maxLength: 300
        },
        phone_no: {
            type: 'number',
            required: true
        },
        employee_id: {
            type: 'number',
            required: true
        },
        employer_name: {
            type: 'string',
            maxLength: 200,
            required: true
        },

        mortgageValue: {
            type: 'number',
            required: true,
            example: '800.50'
        },
        m1sid: {
            type: 'string',
            required: true,
            maxLength: 200,
            example: 'XYZKLMN'
        }

        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    },

};

