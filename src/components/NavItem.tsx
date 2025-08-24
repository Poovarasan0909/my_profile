import React from 'react';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    sectionId: string;
    activeSection: string;
    onClick: (id: string) => void;
}

const NavItem = ({ icon, label, sectionId, activeSection, onClick }: NavItemProps) => (
    <button
        onClick={() => onClick(sectionId)}
        className={`nav-button ${activeSection === sectionId ? 'active' : 'inactive'}`}
        aria-label={label}
    >
        {icon}
        <span className="nav-button-label">
            {label}
        </span>
    </button>
);

export default NavItem;
