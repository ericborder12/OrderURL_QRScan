// QR Code Generator API

const express = require("express");
const QRCode = require("qrcode");
const router = express.Router();
let qrCodes = [];

// Generate QR

router.post("/generate",
async(req,res)=>{
    try {
        const {
            restaurant_id,
            table_number
        } = req.body;

        // Customer ordering URL
      
        const url =
        `https://yourdomain.com/order/${restaurant_id}/${table_number}`;

        // Generate QR image
        const qrImage =
        await QRCode.toDataURL(url);
        const qr = {
            id:
            qrCodes.length + 1,
            restaurant_id,
            table_number,
            url,
            image:
            qrImage
        };
      
        qrCodes.push(qr);
        res.json({
            message:"QR created",
            qr:qr
        });
    }

    catch(error){
        res.status(500).json({
            message:"QR generation failed",
            error:error.message
        });
    }
});

// Get QR list

router.get("/:restaurant_id",(req,res)=>{
    const result =
    qrCodes.filter(
        qr =>
        qr.restaurant_id ==
        req.params.restaurant_id
    );
    res.json(result);
});

module.exports = router;
