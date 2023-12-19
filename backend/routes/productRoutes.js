const express=require('express');
const router= express.Router();

router.get('/', (reg, res) => {
    res.status(200).json({
        message:'respense of type get from route /api/products get ',
    });
});

router.post('/', (reg, res) => {
    res.status(200).json({
        message:'respense of type get from route /api/products post ',
    });
});

router.put(':id/', (reg, res) => {
    res.status(200).json({
        message:'respense of type get from route /api/products put ',
    });
});

router.delete('/:id', (reg, res) => {
    res.status(200).json({
        message:'respense of type get from route /api/products controlleur delete ',
    });
});

module.exports = router ;