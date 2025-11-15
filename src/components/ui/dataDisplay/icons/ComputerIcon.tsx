'use client';

import React from 'react';

export default function ComputerIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            className={`h-5 w-5 flex self-center text-inherit ${props.className ?? ''}`}
            viewBox="0 0 22 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 14.0002H2V2.00024H22C22 0.896244 21.104 0.000244141 20 0.000244141H2C0.896 0.000244141 0 0.895244 0 2.00024V14.0002C0 15.1042 0.896 16.0012 2 16.0012H8V18.0002H5V20.0002H17V18.0002H14V16.0012H20C21.104 16.0012 22 15.1052 22 14.0002V8.00124H20V14.0002ZM12 18.0002H10V16.0012H12V18.0002ZM20 6.00024H22V4.00124H20V6.00024ZM8 9.00124V7.00124H6V9.00124H8ZM12 9.00124V7.00124H10V9.00124H12ZM16 9.00124V7.00124H14V9.00124H16Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="22" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
