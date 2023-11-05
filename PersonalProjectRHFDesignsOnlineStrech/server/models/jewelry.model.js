const mongoose = require('mongoose')
const { Ratio } = require('react-bootstrap')

const JewelrySchema = new mongoose.Schema(
    {
        itemNumber: {
            type: String,
            required: [true, "Item Number is required"],
            minlength: [4, "Item Number must have more than 3 characters"]
        },
        itemDescription: {
            type: String,
            required: [true, "Item Description is required"],
            minlength: [6, "Item Description must be more than 5 characters!"],
        },
        medium: {
            type: String,
            enum: ['Lace', 'Wood', 'Leather', 'Metal', 'Pearls'],
            required: [true, "Medium selection is required"],
        },
        hardware: {
            type: String,
            enum: ['Silver - Surgical Steel', 'Silver', '18K Gold Plated', '14K Gold Plated', 'Clip-Ons'],
            required: [true, "Hardware selection is required"],
        },
        quantity: {
            type: Number,
            required: [true, "Number selection is required"],
            min: [-1, "Quantity must be more than zero!"],
        },
        cost: {
            type: Number,
            required: [true, "Number selection is required"],
            min: [-1, "Quantity must be more than zero!"],
        },
        file: {
            type: String,
            required: [false],
        },
    }, 
    {timestamps: true}
)

const Jewelry = mongoose.model('Jewelry', JewelrySchema)
module.exports = Jewelry


