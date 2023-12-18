const express=require('express');
const router= express.Router();

router.route('/login', (reg, res) => {
    res.status(200).json({
        message:'login',
    });
});

router.route('/register', (reg, res) => {
    res.status(200).json({
        message:'login',
    });
});

module.exports=router ;