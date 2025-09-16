export const postRequest = async (url, data) => {
    const baseURL = 'http://127.0.0.1:8787';
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