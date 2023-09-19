/**
 * Handles the incoming request and sends a JSON response with a greeting message.
 * @param {Object} req - The incoming request object.
 * @param {Object} res - The outgoing response object.
 */
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello! (via Page Router)' })
}