const Routes = require('express')
const router = new Routes()
const products_Router = require('./productsRouter')

router.use('/products',products_Router)

module.exports = router
