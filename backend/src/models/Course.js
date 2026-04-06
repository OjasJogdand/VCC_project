import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    semester: {
      type: String,
      required: true,
      trim: true,
    },
    enrollStatus: {
      type: String,
      required: true,
      enum: ['Open', 'Closed', 'Waitlist'],
      default: 'Open',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Course', courseSchema);
