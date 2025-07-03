'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports' , [
          
           {
            name:'Kempegowda International Airport Bengaluru',
            cityId:5,
            createdAt: new Date(),
            updatedAt: new Date()
           },
           {
            name:'Indira Gandhi International Airport New Delhi',
            cityId:3,
            createdAt: new Date(),
            updatedAt: new Date()
           },
           {
            name:'Jay Prakash Narayan International Airport',
            cityId:4,
            createdAt: new Date(),
            updatedAt: new Date()
           },
           {
            name:'Chhatrapati Shivaji Maharaj International Airport',
            cityId:1,
            createdAt: new Date(),
            updatedAt: new Date()
           },
           {
            name:'Netaji Subhash Chandra Bose International Airport',
            cityId:2,
            createdAt: new Date(),
            updatedAt: new Date()
           }
            

    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
