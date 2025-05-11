'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Button = ({ children, className, appName }) => {
    const fetchLinks = async () => {
        try {
            return await (await fetch('/links')).json();
            // return await (await fetch('http://localhost:3000/links')).json();
        }
        catch (_) {
            return [];
        }
    };
    const onClickHandler = async () => {
        console.log('Button clicked');
        const links = await fetchLinks();
        // () => alert(`Hello from your ${appName} app!`);
        console.log('Fetched links:', links);
        // Handle the links as needed
        // For example, you could set them
    };
    return (<button className={className} onClick={onClickHandler}>
      {children}
    </button>);
};
exports.Button = Button;
