export const postRequest = async (url, data) => {
    const baseURL = 'http://127.0.0.1:8787';
    console.log("API URL:", process.env.NODE_ENV);
    const isdevelopment = process.env.NODE_ENV === 'development';
    if (!isdevelopment) {
        baseURL = 'https://genai-api.poovarasanm0909.workers.dev';
    }
    const response = await fetch(baseURL + url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.NEXT_PUBLIC_API_TOKEN
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export const convertToHTML = (text) => {
    let html = text
        .replace(/^\*+\s+(.*)$/gm, '<li>$1</li>')
        .replace(/\n\n\n\n/g, '<br/><br/>')
        .replace(/\n/g, '<br/>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(?!\s)(.*?)\*/g, '<em>$1</em>')
        .replace(/__(.*?)__/g, '<u>$1</u>')
        .replace(/~~(.*?)~~/g, '<del>$1</del>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
        .replace(/\/Poovarasan_Resume_cv.pdf/g, '<a href="/Poovarasan_Resume_cv.pdf" target="_blank">Poovarasan_Resume_cv.pdf</a>')
        .replace(/poovarasanm0909@gmail.com/g, '<a href="mailto:poovarasanm0909@gmail.com" target="_blank">poovarasanm0909@gmail.com</a>')
        .replace(/github.com\/Poovarasan0909/g,'<a href="https://github.com/Poovarasan0909" target="_blank">github.com/Poovarasan0909</a>')
        .replace(/https:\/\/my-profile-d8z.pages.dev\//g,'<a href="https://my-profile-d8z.pages.dev/" target="_blank">my-profile-d8z.pages.dev/</a>')
        .replace(/www.linkedin.com\/in\/poovarasan-m-50341b20b/g, '<a href="https://www.linkedin.com/in/poovarasan-m-50341b20b" target="_blank">linkedin.com/in/poovarasan-m-50341b20b</a>')
    // Wrap all <li> in a <ul>
    if (html.includes("<li>")) {
        html = html.replace(/(<li>[\s\S]*<\/li>)/g, '<ul>$1</ul>');
    }

    return html;

}

export const getDateFormateYYYYMMDD  = () => { 
    let yyyy = new Date().getFullYear();
    let mm = String(new Date().getMonth() + 1).padStart(2, '0');
    let dd = String(new Date().getDate()).padStart(2, '0');

    let hh = new Date().getHours();
    let min = String(new Date().getMinutes()).padStart(2, '0');
    let ss = String(new Date().getSeconds()).padStart(2, '0');
    let ampm = hh >= 12 ? 'PM' : 'AM';
    hh = hh % 12;
    hh = hh ? hh : 12; // the hour '0' should be '12'
    let strTime = `${String(hh).padStart(2, '0')}:${min}:${ss} ${ampm}`;
    let localDateTime = `${yyyy}-${mm}-${dd} ${strTime}`;
    return localDateTime;
}

export const getBrowerName = () => {
    let userAgent = navigator.userAgent;
    let browserName;

    if(userAgent.includes("Chrome") && !userAgent.includes("Edg")) { 
        browserName = "Chrome";
    } else if ( userAgent.includes("Firefox")) {
        browserName = "Firefox";
    } else if( userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        browserName = "Safari";
    } else if(userAgent.includes("Edg")) {
        browserName = "Edge";
    } else if(userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browserName = "Opera";
    } else {
        browserName = "Unknown";
    }
    return browserName;
}

export const detectDeviceType = () => {
    const width = screen.width

    if (width <= 480) {
        return "Mobile"
    } else if(width > 480 && width <= 768) {
        return "Tablet / Foldable Mobile"
    } else if(width > 768 && width <= 1366) {
        return "Laptop"
    } else if(width > 1366 && width <= 1920) {
        return "Desktop"
    } else if(width > 1920) {
        return "Projector / Large Screen"
    } else {
        return "Unknown"
    }
}
