const Skin = require("../Models/Skin");
const SlinkShot = require("../Models/SlinkShot");
const UserDetails = require("../Models/UserDetails");


//Rendering UI
// exports.getHome = (req, res) => {
//   res.sendFile("/Resorces/main.html", { root: "." });
// };

// exports.getAbout = (req, res) => {
//   res.sendFile("/Resorces/about.html", { root: "." });
// };




exports.getAllSkins= async (req, res) => {
  try {
      const skin =Skin
      .find({})
      .then(skins => {
      res.status(200).json({
        status: 200,
        skins,
      });
      });

 
    if(skin==null){
      res.status(500).json({
        status: 500,
        data: skin
    });
    }

   } catch (error) {
     res.status(400).json({
       status: 400,
       error,
     });
   }
  };

  exports.getAllSlinkShots = async (req, res) => {
  try {
    const slinkShot  =SlinkShot 
    .find({}).populate("User")
    .then(slinkShots => {
    res.status(200).json({
      status: 200,
      slinkShots,
    });
    });


  if(slinkShot==null){
    res.status(500).json({
      status: 500,
      data: slinkShot
  });
  }

 } catch (error) {
   res.status(400).json({
     status: 400,
     error,
   });
 }
  };


exports.newSkin = async (req, res) => {
  try {
    const skin = await Skin.create({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      createdDate:req.body.createdDate
    });

    res.status(200).json({
      status: 200,
      skin,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      msg: "please check skin cells",
      error,
    });
  }
};


exports.newSlinkShot = async (req, res) => {
  try {
    const slinkShot = await SlinkShot.create({
      name: req.body.name,
      user:req.body.user,
      description: req.body.description,
      videoUrl: req.body.videoUrl,
      like: req.body.like,
      viewNumber:req.body.viewNumber,
      createdDate:req.body.createdDate
    });

    res.status(200).json({
      status: 200,
      slinkShot,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      msg: "please check Slink Shot cells",
      error,
    });
  }
};


exports.newUserDetails = async (req, res) => {
  try {

    const userDetails = await UserDetails.create({
      user: req.body.user,
      name: req.body.name,
      image: req.body.image,
      bio: req.body.bio,
      channel:req.body.channel,
      followers:req.body.followers,
      slinkshots:req.body.slinkshots,
      createdDate:req.body.createdDate
    });
    res.status(200).json({
      status: 200,
      userDetails,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      msg: "please check User Detals cells",
      error,
    });
  }
};


exports.getUserDetailsById= async (req, res) => {
  try {
    const nullStatus = "Couldn't Find UserDetails";
    UserDetails.findById(
      req.body._id
    ).exec().then(userDetails=>{
      if(userDetails==null){
        res.status(500).json({
          status: 500,
          nullStatus,
        });
      }
      res.status(200).json({
        status: 200,
        userDetails,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
//   try {
//     const userDetails  =UserDetails 
//     .findById(
//       req.body._id
//     ).populate("User")
//     .populate("SlinkShot")
//     .then(userDetails => {
//     res.status(200).json({
//       status: 200,
//       userDetails,
//     });
//     });

//   if(userDetails==null){
//     res.status(500).json({
//       status: 500,
//       data: userDetails
//   });
//   }

//  } catch (error) {
//    res.status(400).json({
//      status: 400,
//      error,
//    });
//  }
  };




exports.newFollowerForUserDetails = async (req, res) => {
  try {
    const updated = await UserDetails.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { followers: req.body.follower } }
    );
    const updatedStatus = "UserDetails  added Saccessfully";
    const notUpdatedStatus = "UserDetails addition Failed";

    if(updated!=null){
      res.status(200).json({
        status: 200,
        updatedStatus,
        updated
      });
    }else{
      res.status(500).json({
        status: 500,
        notUpdatedStatus
      });
    }
   
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};



exports.newSlinkShotForUserDetails = async (req, res) => {
  try {
    const updated = await UserDetails.findOneAndUpdate(
      { _id: req.body._id },
      { $push: { slinkshots: req.body.slinkshot } }
    );
    const updatedStatus = "slinkshot added Saccessfully";
    const notUpdatedStatus = "slinkshot addition Failed";

    if(updated!=null){
      res.status(200).json({
        status: 200,
        updatedStatus,
        updated
      });
    }else{
      res.status(500).json({
        status: 500,
        notUpdatedStatus
      });
    }
   
  } catch (error) {
    res.status(400).json({
      status: 400,
      error,
    });
  }
};