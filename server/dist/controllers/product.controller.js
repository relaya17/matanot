import { ProductModel } from '../models/Product.model.js';
export const getAllProducts = async (req, res) => {
    try {
        const { q, category, page = '1', limit = '20', sort = '-createdAt' } = req.query;
        const query = {};
        if (q && typeof q === 'string') {
            query.$text = { $search: q };
        }
        if (category && typeof category === 'string') {
            query.categories = category;
        }
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const skip = (pageNum - 1) * limitNum;
        const products = await ProductModel
            .find(query)
            .sort(sort)
            .skip(skip)
            .limit(limitNum);
        const total = await ProductModel.countDocuments(query);
        res.json({
            products,
            pagination: {
                page: pageNum,
                limit: limitNum,
                total,
                pages: Math.ceil(total / limitNum)
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
export const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
};
export const createProduct = async (req, res) => {
    try {
        const product = new ProductModel(req.body);
        await product.save();
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to create product' });
    }
};
export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json(product);
    }
    catch (error) {
        res.status(400).json({ error: 'Failed to update product' });
    }
};
export const deleteProduct = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
        res.json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};
//# sourceMappingURL=product.controller.js.map