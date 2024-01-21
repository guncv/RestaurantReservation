/**
* @swagger
* components:
*   schemas:
*     Restaurant:
*       type: object
*       required:
*         - name
*         - address
*         - foodtype
*         - province
*         - postalcode
*         - picture
*       properties:
*         name:
*           type: string
*           description: Name of the restaurant
*         address:
*           type: string
*           description: House No., Street, Road
*         foodtype:
*           type: string
*           description: Type of Food
*         province:
*           type: string
*           description: province
*         postalcode:
*           type: string
*           description: 5-digit postal code 
*         tel:
*           type: string
*           description: telephone number
*         picture:
*           type: string
*           description: picture
*/

const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurants");

/**
* @swagger
* tags:
*   name: Restaurants
*   description: The restaurants managing API
*/

// Include other resource routers
const bookingRouter = require("./bookings");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");

// Re-route into other resource routers

/**
* @swagger
* /restaurants:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Create a new restaurant
*     tags: [Restaurants]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Restaurant'
*     responses:
*       201:
*         description: The restaurant was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Restaurant'
*       500:
*         description: Some server error
*/

/**
* @swagger
* /restaurants:
*   get:
*     summary: Returns the list of all the restaurants
*     tags: [Restaurants]
*     responses:
*       200:
*         description: The list of the restaurants
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*               $ref: '#/components/schemas/Restaurant'
*/
router.use("/:restaurantId/bookings", bookingRouter);
router
  .route("/")
  .get(getRestaurants)
  .post(protect, authorize("admin"), createRestaurant);

/**
* @swagger
* /restaurants/{id}:
*   get:
*     summary: Get the restaurant by id
*     tags: [Restaurants]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The restaurant id
*     responses:
*       200:
*         description: The restaurant description by id
*         contents:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Restaurant'
*       404:
*         description: The restaurant was not found
*/

/**
* @swagger
* /restaurants/{id}:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update the restaurant by id
*     tags: [Restaurants]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The restaurant id
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Restaurant'
*     responses:
*       200:
*         description: The restaurant was successfully updated
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Restaurant'
*       500:
*         description: Some server error
*/

/**
* @swagger
* /restaurants/{id}:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete the restaurant by id
*     tags: [Restaurants]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The restaurant id
*     responses:
*       200:
*         description: The restaurant was successfully deleted
*         contents:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Restaurant'
*       404:
*         description: The restaurant was not found
*/
router
  .route("/:id")
  .get(getRestaurant)
  .put(protect, authorize("admin"), updateRestaurant)
  .delete(protect, authorize("admin"), deleteRestaurant);

module.exports = router;
