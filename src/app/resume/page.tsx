"use client";

import "../resume.css";
import React from 'react';
import ResumeSidebar from '@/components/ResumeSidebar';
import ResumeMainContent from '@/components/ResumeMainContent';

export default function Resume() {
    return (
        <div className="resum-body">
            <div className="resume-container">
                <ResumeSidebar />
                <ResumeMainContent />
            </div>
        </div>
    );
}