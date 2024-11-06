import React from "react";
import "./Books.css";

const books = [
    {
        id: 1,
        title: "Pakistan se Bahir Kese Jain? (1)",
        image: "/assets/Pakistan-se-bahir-kese-jain-1-510x768-1.webp",
    },
    {
        id: 2,
        title: "Pakistan se Bahir Kese Jain? (2)",
        image: "/assets/Pakistan-se-Bahir-1-510x773-1.webp",
    },
    {
        id: 3,
        title: "Pakistan se Bahir Kese Jain? (3)",
        image: "/assets/PK-1-1018x1536-1-679x1024.webp",
    },
    {
        id: 4,
        title: "Sukkur to Florida",
        image: "/assets/Aik-fulbright-fellow-Final-2-510x796-1.webp",
    },
    {
        id: 5,
        title: "Sukkur to Georgia",
        image: "/assets/Sakhar_Final-3-510x764-1.webp",
    },
    {
        id: 6,
        title: "Experiencing America",
        image: "/assets/Experience-510x799-1.webp",
    },
    {
        id: 7,
        title: "Scholars of Pakistan",
        image: "/assets/Scholars-of-Pakistan-2-510x763-1.webp",
    }
];

const Books = () => {
    return (
        <div className="book-gallery">
            <section className="books">
                {books.map(book => (
                    <div className="book" key={book.id}>
                        <img src={book.image} alt={book.title} />
                        <h2>{book.title}</h2>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Books;
