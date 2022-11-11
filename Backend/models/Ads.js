
const mongoose = require('mongoose');

const AdsSchema = mongoose.Schema({
    _id:Number,
    companyId:Number,
    primartText:String,
    headline:String,
    description:String,
    CTA:String,
    imageUrl:String,

},
{
    collection:'Ads'
}
);

module.exports= mongoose.model("Ads",AdsSchema);