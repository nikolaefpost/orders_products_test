import React from 'react';

const myData = [
    { text: "email: yemelyanov.eduard@gmail.com", isLink: false, url: "" },
    { text: "github: https://github.com/nikolaefpost", isLink: true, url: "https://github.com/nikolaefpost" },
    { text: "linkedIn: https://www.linkedin.com/in/eduard-yemelyanov-586a96204//", isLink: true, url: "https://www.linkedin.com/in/eduard-yemelyanov-586a96204/" },
    { text: "Ukraine, Odesa", isLink: false, url: "" },
    { text: "phone: +38 (093) 656-27-80", isLink: false, url: "" },
    { text: "skype: live:45689e144640a3e", isLink: false, url: "" },
    { text: "telegram: @Eduard_7", isLink: false, url: "" },
    { text: "my site: https://yemelyanov-eduardfrontend.netlify.app", isLink: true, url: "https://yemelyanov-eduardfrontend.netlify.app" }
];

const renderItem = ({ text, isLink, url }: { text: string, isLink: boolean, url: string }): React.ReactNode => {
    if (isLink && url) {
        // Render as a clickable link
        return (
            <a className="text-decoration-underline text-primary" href={url} target="_blank" rel="noopener noreferrer">
                {text}
            </a>
        );
    }
    // Render as plain text
    return text;
};

const Home: React.FC = () => {
    return (
        <main className='h-100 d-flex justify-content-center align-items-center flex-column'>
            <h2 className="my-5">Тестовый проект Orders & Products</h2>
            <h3 className="mb-1">выполнил: Эдуард Емельянов</h3>
            <h5 className="mb-4">FRONTEND DEVELOPER | REACT | NEXT | TYPESCRIPT | OPENAI API</h5>

            <ul>
                {myData.map((item, index) => (
                    <li key={index}>{renderItem(item)}</li>
                ))}
            </ul>
        </main>
    );
}

export default Home;
