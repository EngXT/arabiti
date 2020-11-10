module.exports = mongoose => {
  const Governorate = mongoose.model(
    "governorate",
    mongoose.Schema(
      {
        governorateId: Number,        
        governorateName: String,     
        cities: Array   
      },
      { timestamps: false }
    )
  );

  return Governorate;
};