import { Logistics } from "../models/traveledList.model.js";
import { User } from "../models/user.model.js";

export const addTraveledDetails = async (req, res) => {
  try {
    console.log('it started !!!')
    const { sourceLocation, destinationLocation, vehicleType, cargoWeight } = req.body;
      console.log(req.body)
    // Check if all required fields are provided
    if (!sourceLocation || !destinationLocation || !vehicleType || !cargoWeight) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    console.log('all field has filled')
    // Create a new logistics entry
    const newTravel = new Logistics({
      sourceLocation,
      destinationLocation,
      vehicleType,
      cargoWeight,
    });

    // Save logistics data in the database
    const savedTravel = await newTravel.save();
    console.log('saved Tooo')
//For adding in specific data in specific user

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        travelList: {
          sourceLocation: sourceLocation,
          destinationLocation: destinationLocation,
          vehicleType:vehicleType,
          cargoWeight:cargoWeight,
          createdAt: new Date(),
        }
      }
    })


    // Update the User's traveledList by adding this travel ID
    // await User.findByIdAndUpdate(userId, { $push: { traveledList: savedTravel._id } });
    return res.status(201).json({
      success: true,
      message: "Travel details added successfully!",
      data: savedTravel,
    });

  } catch (error) {
    console.error("Error --->", error.meesage);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
