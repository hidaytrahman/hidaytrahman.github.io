import React from 'react';
import { WeekendBannerContainer } from './WeekendBanner.styles';
import { isWeekend } from '../../../core/utils';

const weekendQuotes = [
    "Time to debug your weekend with some coffee and code! ☕",
    "Weekend: When bugs become features and pajamas become work attire",
    "Keep calm and git push your weekend goals",
    "Weekend mode: {coding: true, stress: false}",
    "sudo apt-get install weekend-fun",
    "while(weekend){ code.enjoy(); }"
];

function WeekendBanner() {
    if (!isWeekend()) return null;

    const randomQuote = weekendQuotes[Math.floor(Math.random() * weekendQuotes.length)];

    return (
        <WeekendBannerContainer>
            <div className="banner-content">
                <span className="emoji">🎉</span>
                <p className="quote">{randomQuote}</p>
                <span className="emoji">💻</span>
            </div>
        </WeekendBannerContainer>
    );
}

export default WeekendBanner;