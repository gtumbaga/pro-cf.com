import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <h1>Centrifugal Force Productions</h1>
        <div className="pod">
            <h2>Who We Are</h2>
            <p>We are a group of fun-loving individuals who all have day jobs, and do DJing on the side. DJing is one of our many passions, and we would love to share our passions with you! We would like to assist you and your guests in getting your "groove on"!</p>
        </div>
        <div className="pod">
            <h2>What We Do</h2>
            <p>We offer DJ services, that could range anywhere from two hours, to six hours. We have music ranging from Hip-Hop, R&B, Pop, Top 40, and some latin ballroom dance. We have experience DJing for wedding receptions, cotillions, birthdays, graduations, school dances, lounges, house parties, as well as other family events.</p>
        </div>
        <div className="pod">
            <h2>Looking for a DJ?</h2>
            <p>You've come to the right place. We can provide you with DJ services and totally rock your event! We are based in the Bay Area, and have been providing DJ services since 2003. We have experience in a wide range of events, and look forward to working with you!</p>
            <p>We offer competitive rates to fit your budget. For more information, please <a href="/djs">Contact Us!</a></p>
        </div>
    </div>
  );
}
