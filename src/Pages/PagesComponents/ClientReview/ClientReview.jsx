import React from 'react';
import ClientBanner from './ClientBanner';
import ReviewFrom from './ReviewFrom';

const ClientReview = () => {
    return (
        <div className="dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:text-white">
            <ClientBanner />
            <ReviewFrom/>
        </div>
    );
};

export default ClientReview;