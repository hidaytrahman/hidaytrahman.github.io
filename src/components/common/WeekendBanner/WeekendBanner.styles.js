import styled from 'styled-components';

export const WeekendBannerContainer = styled.div`
    width: 100%;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    animation: slideDown 0.5s ease-out;

    .banner-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: white;
        text-align: center;
    }

    .quote {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0;
        line-height: 1.5;
    }

    .emoji {
        font-size: 1.5rem;
        animation: bounce 2s infinite;
    }

    @keyframes slideDown {
        from {
            transform: translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 768px) {
        .quote {
            font-size: 1rem;
        }
        .emoji {
            font-size: 1.25rem;
        }
    }
`;