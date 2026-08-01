import { Request, Response } from 'express';
import Memory from '../../models/memory.model';

// @desc    Delete a memory (Admin)
// @route   DELETE /api/memories/:id
// @access  Public (for now)
export const deleteMemory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const deletedMemory = await Memory.findByIdAndDelete(id);

        if (!deletedMemory) {
            res.status(404).json({ error: 'Memory not found' });
            return;
        }

        res.json({
            message: 'Memory deleted successfully',
            data: deletedMemory
        });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};
