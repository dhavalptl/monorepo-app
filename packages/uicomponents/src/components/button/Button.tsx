import React from 'react';

export type ButtonProps = {
    title: string;
    onClick: () => void
};
export const Button: React.FC<ButtonProps> = ({title, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick}>{title}</button>
    );
}