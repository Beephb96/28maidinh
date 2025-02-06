import React, { useEffect, useState } from "react";

const Test = () => {
    const [count, setCount] = useState(0);
    const [messages, setMessages] = useState<string[]>([]); // State lưu danh sách dòng chữ

    useEffect(() => {
        console.log('Render useEffect')
        setMessages((prevMessages) => [...prevMessages, `Count đã thay đổi: ${count}`]);
    }, [count]); // useEffect chạy khi count thay đổi

    return (
        <div>
            {console.log('Render')}
            <p>đã thêm {count} dòng</p>
            <button onClick={() => setCount(count + 1)}>Thêm 1</button>

            <div>
                <h3>Lịch sử thay đổi:</h3>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default Test;
