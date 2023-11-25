const express = require('express');

const {
  getAllTours,
  addTour,
  getTour,
  updateTour,
  removeTour,
  top5Cheap,
} = require(`./../controllers/tourController`);
const router = express.Router();

router.route('/top-5-cheap').get(top5Cheap, getAllTours);
router.route('/').get(getAllTours).post(addTour);
router.route('/:id').get(getTour).patch(updateTour).delete(removeTour);

module.exports = router;
