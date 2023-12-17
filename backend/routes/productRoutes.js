const express=require('express');
const router= express.Router();

router.route('/', (reg, res) => {
    res.status(200).json({
        message:'respense of type get from route /api/products',
    });
});

module.exports=router ;