import Image from "next/image";
import { FaNewspaper, FaRss } from "react-icons/fa";
import "./LatestNews.css";

const news = [
  {
    id: 1,
    title: "Space Viking Saga Enters Final Testing Phase",
    excerpt:
      "Our Norse mythology-inspired space adventure is preparing for its epic launch. Here's what to expect in the coming months.",
    date: "2024-02-15",
    category: "Development Update",
    readTime: "4 min",
    image: "/static/news1.webp",
  },
  {
    id: 2,
    title: "Fennonauts at Nordic Game Conference",
    excerpt:
      "Join us at NGC 2024 where we'll showcase our latest projects and share insights about Finnish game development.",
    date: "2024-02-10",
    category: "Events",
    readTime: "3 min",
    image: "/static/news1.webp",
  },
  {
    id: 3,
    title: "The Making of Cosmic Sauna Simulator",
    excerpt:
      "Deep dive into our creative process and the unique challenges of bringing Finnish sauna culture to space.",
    date: "2024-02-01",
    category: "Behind the Scenes",
    readTime: "6 min",
    image: "/static/news1.webp",
  },
];

export default function LatestNews() {
  return (
    <section className="relative py-24 latest-news" id="news">
      <div className="absolute inset-0 opacity-50">
        <div className="signal-waves" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="cosmic-badge mx-auto w-fit">
            <FaNewspaper className="mr-2" />
            <span>SPACE TRANSMISSIONS</span>
          </div>
          <h2 className="cosmic-text text-5xl md:text-6xl font-bold mt-8">
            Latest Intel
          </h2>
        </div>

        <div className="news-container">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="news-transmission group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="transmission-card">
                <div className="transmission-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="transmission-content">
                  <div className="signal-indicator">
                    <span className="signal-dot" />
                    <span className="signal-text">INCOMING TRANSMISSION</span>
                  </div>

                  <div className="content-main">
                    <div className="meta-info">
                      <span className="news-category cosmic-badge">
                        {item.category}
                      </span>
                      <time className="news-date">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>

                    <h3 className="news-heading">{item.title}</h3>
                    <p className="news-excerpt">{item.excerpt}</p>
                  </div>

                  <div className="transmission-footer">
                    <span className="read-duration">{item.readTime}</span>
                    <button className="read-more">
                      Decode Transmission
                      <span className="decode-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="cosmic-button-secondary group">
            <FaRss className="mr-2" />
            <span>Subscribe to Transmissions</span>
          </button>
        </div>
      </div>
    </section>
  );
}
