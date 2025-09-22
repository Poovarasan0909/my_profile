import Box from '@mui/material/Box';
import { Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import  {convertToHTML, postRequest} from '../helper/helper';
import AiLauncher from './AiLauncher';
import React from 'react';
import '../css/AIChatbot.css';
import AiCancel from './animations/AiCancel';


const AIChatBot = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const [aiConversations, setAIConversations] = useState<Array<{ role: string; content?: string; error?: string | undefined }>>([]);
    const [isAIThinking, setIsAIThinking] = useState(false);
    const [isShowChatBot, setIsShowChatBot] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("ai-conversations") && aiConversations.length === 0) {
            setAIConversations(JSON.parse(sessionStorage.getItem("ai-conversations") || '[]'));
        }
    }, [aiConversations]);

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
            const convers = [...aiConversations, { role: 'user', content: userInput }];
            postRequest('/generate', { userPrompt: JSON.stringify(convers), sessionID: sessionStorage.getItem("sessionID") })
                .then(data => {
                    console.log('AI Response fetched:', data);
                    setAIConversations(prev => [...prev, { role: 'model', content: data.result }]);
                    convers.push({ role: 'model', content: data.result });
                }).catch(error => {
                    console.error('Error fetching AI Response:', error.message);
                    setAIConversations(prev => [...prev, { role: 'model', error: error.message }]);
                    convers.push({ role: 'model', error: error.message });
                }).finally(() => {
                    setIsAIThinking(false);
                    if(sessionStorage.getItem("sessionID")) {
                        sessionStorage.setItem("ai-conversations", JSON.stringify(convers));
                    }
                });
        }
    };

    return (
        isShowChatBot ?
            (<Box className="ai-chatbot">
                {/* <div className="ai-chatbot-cancel" onClick={() => setIsShowChatBot(false)} >
                    X
                </div> */}
                <AiCancel onClickFunction={() => setIsShowChatBot(false)}/>
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
                                {/* <div> {conv.role === 'user' ? 'You' : 'AI'}:</div> */}
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