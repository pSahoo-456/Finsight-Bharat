import mongoose from 'mongoose'
const LogisticsSchema = new mongoose.Schema(
  {
    sourceLocation: {
      type:String,
      required: true,
    },
    destinationLocation: {
      type:String,
      required: true,
    },
    vehicleType: {
        type: String,
        enum: [
          "Tata Prima",
          "BharatBenz",
          "Mahindra Blazo X 55",
          "Ashok Leyland Partner",
          "Eicher",
        ], // Allowed vehicle types
        required: true,
    },
    cargoWeight: {
      type: Number,
      required: true,
      min: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const Logistics = mongoose.model("Logistics", LogisticsSchema);
