import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import  {convertToHTML, postRequest} from '../helper/helper';
import AiLauncher from './AiLauncher';
import React from 'react';
import { v4 as uuidv4 } from "uuid";
import '../css/AIChatbot.css';


const AIChatBot = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const [aiConversations, setAIConversations] = useState<Array<{ role: string; content?: string; error?: string | undefined }>>([]);
    const [isAIThinking, setIsAIThinking] = useState(false);
    const [isShowChatBot, setIsShowChatBot] = useState(false);

     useEffect(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
     }, [aiConversations]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleOnSend();
        }
    }

    const handleOnClickChip = (text: string) => {
        if (textareaRef.current) {
            textareaRef.current.value = text;
            setTimeout(() => {
               handleOnSend();
            }, 300)
        }
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        const scrollHeight = textarea.scrollHeight;
        textarea.style.height = `${scrollHeight - 16}px`;
        const maxHeight = 19 * 3;
        if (scrollHeight > maxHeight) {
            textarea.style.height = `${maxHeight}px`;
            textarea.style.overflowY = 'auto'; // Show scrollbar when max is reached
        } else {
            textarea.style.overflowY = 'hidden'; // Hide scrollbar otherwise
        }
    };

    const handleOnSend = () => {
        if (textareaRef.current && !isAIThinking) {
            const userInput = textareaRef.current.value;
            if(userInput.trim() === '') return;
        
            textareaRef.current.style.height = "19px";
            textareaRef.current.value = '';
            setAIConversations(prev => [...prev, { role: 'user', content: userInput }]);
            setIsAIThinking(true);
            postRequest('/generate', { userPrompt: userInput })
                .then(data => {
                    console.log('AI Response fetched:', data);
                    setAIConversations(prev => [...prev, { role: 'model', content: data.result }]);
                }).catch(error => {
                    console.error('Error fetching AI Response:', error.message);
                    setAIConversations(prev => [...prev, { role: 'model', error: error.message }]);
                }).finally(() => {
                    setIsAIThinking(false);
                });
        }
    };

    return (
        isShowChatBot ?
            (<Box className="ai-chatbot">
                <div className="ai-chatbot-cancel" onClick={() => setIsShowChatBot(false)} >
                    X
                </div>
                {aiConversations.length === 0 && !isAIThinking && (
                    <div className="ai-chatbot-welcome">
                        <h3>👋 Hi, I’m Poovarasan’s AI assistant.</h3>
                        <p>Ask me anything about this portfolio.</p>
                        <div className="ai-chatbot-welcome-tip">
                            <div className='ai-chatbot-chip' onClick={() => handleOnClickChip("How to contact Poovarasan?")}>How to contact Poovarasan?</div>
                            <div className='ai-chatbot-chip' onClick={() => handleOnClickChip("What technologies are used in this portfolio?")}>What technologies are used in this portfolio?</div>
                            <div className='ai-chatbot-chip' onClick={() => handleOnClickChip("Show me Poovarasan's experience.")}>Show me Poovarasan's experience.</div>
                            <div className='ai-chatbot-chip' onClick={() => handleOnClickChip("What technologies does he know?")}>What technologies does he know?</div>
                            <div className='ai-chatbot-chip' onClick={() => handleOnClickChip("Can I see his resume?")}>Can I see his resume?</div>
                        </div>
                    </div>
                )}
                 {/* <canvas id="particle-canvas"></canvas> */}
                <div className="ai-chatbot-messages">
                    {aiConversations.map((conv, index) => (
                        <React.Fragment key={index}>
                            <div key={index} ref={index === aiConversations.length - 1 ? lastMessageRef : null}
                                className={`ai-chatbot-message ${conv.role} ${conv.error ? 'error' : ''}`}>
                                {conv.error ? <span>⚠️{conv.error}</span> :
                                    <div dangerouslySetInnerHTML={{ __html: convertToHTML(conv.content) }} />}
                            </div>
                            {isAIThinking && index === aiConversations.length - 1 && (
                                <div className="ai-chatbot-typing-indicator">AI is typing...</div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className='ai-chatbot-prompt'>
                    <textarea
                        ref={textareaRef}
                        rows={1}
                        className='ai-prompt-input'
                        onKeyDown={handleKeyDown}
                        onChange={(e) => handleOnChange(e)}
                        placeholder='Ask me anything about Poovarasan...' />
                    <Send onClick={handleOnSend} className='ai-prompt-button' />
                </div>
            </Box>) :
            (
                <AiLauncher onClickFunction={() => setIsShowChatBot(true)} />
            )
    )
}
export default AIChatBot;




// Okay, let's try to find ways to contact Poovarasan. It's tricky because "Poovarasan" isn't a universally known public figure. Here's a breakdown of possibilities and how to approach them, depending on *which* Poovarasan you're trying to reach. I'll cover the most likely scenarios and provide resources. **1. Poovarasan (Tamil Film Director/Writer)** This is the most prominent "Poovarasan" likely to come up in searches. He's a Tamil film director and writer known for films like *Altiha Oliyilla* and *Kuttram Seidhaayam*. * **Facebook:** He has a verified Facebook page: [https://www.facebook.com/poovarasan.director/](https://www.facebook.com/poovarasan.director/) This is probably the *best* way to try and reach him directly. You can send him a message through Messenger. Be respectful and concise in your message. * **Instagram:** He has an Instagram account: [https://www.instagram.com/poovarasan_director/](https://www.instagram.com/poovarasan_director/) You can try sending a direct message (DM) there. * **Twitter (X):** He has a Twitter account: [https://twitter.com/poovarasan_dir](https://twitter.com/poovarasan_dir) You can try sending a direct message (DM) there. * **IMDb:** His IMDb page is here: [https://www.imdb.com/name/nm4944641/](https://www.imdb.com/name/nm4944641/) IMDb doesn't usually provide contact information, but it's a good place to verify you have the right person. * **Production Companies:** Finding out which production companies he's worked with might lead to contact information, but it's less direct. (See section 5 below for how to research this). **2. Other Individuals Named Poovarasan** If you're *not* trying to reach the film director, you'll need to be more specific. Here's how to proceed: * **Do you know their profession?** (e.g., doctor, engineer, teacher, business owner) * **Do you know their location?** (City, State, Country) * **Do you have any other identifying information?** (e.g., company they work for, school they attended) With more information, I can give you more targeted advice. Here are some general approaches: * **LinkedIn:** Search for "Poovarasan" on LinkedIn ([https://www.linkedin.com/](https://www.linkedin.com/)). Filter by location and industry to narrow down the results. You can send a connection request and a message. * **Google Search:** Use very specific search terms. For example: "Poovarasan [profession] [city]" or "Poovarasan [company name]". * **Social Media Search:** Search on other platforms like Facebook, Instagram, and Twitter, using the same specific search terms. * **Online Directories:** Depending on their profession, there might be online directories (e.g., for doctors, lawyers, etc.). * **WhitePages/People Search:** Websites like WhitePages ([https://www.whitepages.com/](https://www.whitepages.com/)) or ZabaSearch ([https://www.zabasearch.com/](https://www.zabasearch.com/)) *might* have information, but privacy concerns mean results are often limited. (Be aware of the ethical implications of using these sites.) **3. If You Have a Specific Reason for Contacting Him** * **For Film-Related Inquiries (Director Poovarasan):** If you're a journalist, producer, or have a professional inquiry related to his films, your chances of getting a response are higher. Clearly state your purpose in your message. * **For Personal Reasons:** Be very respectful and mindful of his privacy. A brief, polite message explaining why you're trying to reach him is best. Don't be overly demanding. **4. Important Considerations & Etiquette** * **Be Respectful:** Always be polite and respectful in your communication. * **Be Concise:** Get straight to the point. People are busy. * **Be Patient:** Don't expect an immediate response. It may take days or weeks to get a reply, or you may not get a reply at all. * **Privacy:** Respect his privacy. Don't ask for personal information that isn't relevant to your reason for contacting him. * **Don't Spam:** Don't send multiple messages on different platforms. Choose one method and stick with it. **5. Researching Production Companies (for the Director)** To find production companies he's worked with: * **IMDb:** Look at the filmography on his IMDb page ([https://www.imdb.com/name/nm4944641/](https://www.imdb.com/name/nm4944641/)). The "Company Credits" section will list production companies involved in his films. * **Google Search:** Search for "[Film Title] production company" (e.g., "Altiha Oliyilla production company"). * **Wikipedia:** Sometimes Wikipedia pages for films will list production companies. Once you find a production company, you can try to find contact information on their website. **To help me narrow down the search and give you more specific advice, please tell me:** * **Which Poovarasan are you trying to reach?** (If you know anything about him, please share it.) * **What is your reason for contacting him?** * **Do you know his location?** (City, State, Country) I'll do my best to assist you further with more information.