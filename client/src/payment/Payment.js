import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar, FaLock } from 'react-icons/fa';
import {
    WiSunrise
} from 'react-icons/wi';
import {
    GiModernCity,
    GiGreekTemple,
    GiDoor,
    GiTreeBranch,
    GiMountainCave,
    GiBarrel,
    GiTempleGate,
    GiStoneBlock,
    GiGears
} from 'react-icons/gi';
import {
    IoMdCamera
} from 'react-icons/io';
import { FaGamepad, FaBox } from 'react-icons/fa';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const asset = location.state?.asset;

    // Icon mapping function
    const getIconComponent = (iconName) => {
        const icons = {
            'WiSunrise': <WiSunrise />,
            'GiModernCity': <GiModernCity />,
            'FaGamepad': <FaGamepad />,
            'GiGreekTemple': <GiGreekTemple />,
            'GiDoor': <GiDoor />,
            'GiGears': <GiGears />,
            'GiTreeBranch': <GiTreeBranch />,
            'IoMdCamera': <IoMdCamera />,
            'GiMountainCave': <GiMountainCave />,
            'GiBarrel': <GiBarrel />,
            'GiTempleGate': <GiTempleGate />,
            'GiStoneBlock': <GiStoneBlock />
        };
        return icons[iconName] || <FaBox />;
    };

    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        email: '',
        billingAddress: '',
        city: '',
        zipCode: '',
        country: ''
    });

    const [processing, setProcessing] = useState(false);

    if (!asset) {
        return (
            <div className="payment-page">
                <div className="payment-container">
                    <div className="error-message">
                        <h2>No Asset Selected</h2>
                        <p>Please select an asset to purchase.</p>
                        <button onClick={() => navigate('/assets')} className="back-btn">
                            Back to Assets
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setProcessing(false);
            alert('Payment successful! Your download will begin shortly.');
            navigate('/assets');
        }, 2000);
    };

    return (
        <div className="payment-page">
            <div className="payment-container">
                {/* Header */}
                <div className="payment-header">
                    <button onClick={() => navigate('/assets')} className="back-link">
                        ← Back to Assets
                    </button>
                    <h1>Complete Your Purchase</h1>
                </div>

                <div className="payment-content">
                    {/* Order Summary */}
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <div className="asset-summary">
                            <div className="asset-summary-image">
                                <span className="summary-icon">{getIconComponent(asset.image)}</span>
                            </div>
                            <div className="asset-summary-info">
                                <h3>{asset.name}</h3>
                                <p className="summary-seller">by {asset.seller}</p>
                                <div className="summary-meta">
                                    <span className="summary-rating"><FaStar /> {asset.rating}</span>
                                    <span className="summary-category">{asset.category}</span>
                                </div>
                            </div>
                        </div>

                        <div className="price-breakdown">
                            <div className="price-row">
                                <span>Subtotal</span>
                                <span>${asset.price}</span>
                            </div>
                            <div className="price-row">
                                <span>Tax (10%)</span>
                                <span>${(asset.price * 0.1).toFixed(2)}</span>
                            </div>
                            <div className="price-row total">
                                <span>Total</span>
                                <span>${(asset.price * 1.1).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="included-info">
                            <h4>What's Included</h4>
                            <ul>
                                <li>✓ Full source files</li>
                                <li>✓ Lifetime access</li>
                                <li>✓ Free updates</li>
                                <li>✓ Commercial license</li>
                                <li>✓ Email support</li>
                            </ul>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="payment-form-section">
                        <form onSubmit={handleSubmit} className="payment-form">
                            <div className="form-section">
                                <h3>Payment Information</h3>

                                <div className="form-group">
                                    <label htmlFor="cardNumber">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        placeholder="1234 5678 9012 3456"
                                        value={formData.cardNumber}
                                        onChange={handleInputChange}
                                        maxLength="19"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cardName">Cardholder Name</label>
                                    <input
                                        type="text"
                                        id="cardName"
                                        name="cardName"
                                        placeholder="John Doe"
                                        value={formData.cardName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="expiryDate">Expiry Date</label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            name="expiryDate"
                                            placeholder="MM/YY"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            maxLength="5"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cvv">CVV</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            placeholder="123"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            maxLength="4"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Billing Information</h3>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="billingAddress">Address</label>
                                    <input
                                        type="text"
                                        id="billingAddress"
                                        name="billingAddress"
                                        placeholder="123 Main Street"
                                        value={formData.billingAddress}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="New York"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zipCode">ZIP Code</label>
                                        <input
                                            type="text"
                                            id="zipCode"
                                            name="zipCode"
                                            placeholder="10001"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="CA">Canada</option>
                                        <option value="AU">Australia</option>
                                        <option value="DE">Germany</option>
                                        <option value="FR">France</option>
                                        <option value="JP">Japan</option>
                                        <option value="IN">India</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="security-notice">
                                <span className="lock-icon"><FaLock /></span>
                                <p>Your payment information is secure and encrypted</p>
                            </div>

                            <button
                                type="submit"
                                className="submit-payment-btn"
                                disabled={processing}
                            >
                                {processing ? 'Processing...' : `Pay $${(asset.price * 1.1).toFixed(2)}`}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
