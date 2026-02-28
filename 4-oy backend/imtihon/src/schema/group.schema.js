
import { model, Schema, Types } from "mongoose";

const groupSchema = new Schema({
    name: { type: String, required: true, unique: true },
    course: { type: Types.ObjectId, ref: 'Courses', required: true },
    teacher: { type: Types.ObjectId, ref: 'Teachers', required: true },
    startDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true }
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

groupSchema.virtual('students', {
  ref: 'Students',
  localField: '_id',
  foreignField: 'group'
});

export default model('Groups', groupSchema)