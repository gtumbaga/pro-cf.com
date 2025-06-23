import styles from './djs.module.css';

export default function Djs() {
  return (
    <div className={styles.djs}>
        <div>
            <h1>Meet the DJs</h1>
        </div>
        <div className="pod">
            <p>
                Originating as a DJ scratch crew, we started taking on DJ gigs in order to earn money to support being scratch DJ&apos;s. Somewhere along the way, we changed genre&apos;s, and are now mobile DJ&apos;s. Although scratching is fun, and we still sometimes do it, we now mostly concentrate on getting people to shake their groove thang!
            </p>
            <p>
                We have more than 12 years experience in DJing, for company events, wedding receptions, school dances, cotillions, birthdays, house-parties, as well as clubs and lounges.
            </p>
            <p>
                We&apos;ve DJ&apos;d for a wide range of people and companies, ranging from family and firends, to store events for companies such as T-Mobile, Victoria Secret (Pink), Game Stop, and Holiday parties for companies such as East Bay Mud, Kaiser Permanente, DMV, Stanford Court, and John Muir.
            </p>
        </div>

        <h3 className="mt-4 mb-1">Any of us can be contacted via our info below:</h3>
        <div id="dj-gtraxx" className="pod limit">
            <h2 className="text-left">DJ gTraxx</h2>
            <div className="business-card-holder">
                <img src="/cards/card-gabe-med.jpg" alt="DJ gTraxx business card" />
            </div>
            <div className="portrait-holder">
                <img src="/portraits/gtraxx.png" alt="DJ gTraxx portrait" />
            </div>
            <div className="button-holder">
                <a className="button" href="/cards/card-gabe-med.jpg" download>Save Business Card</a>
                <a className="button" href="/cards/gabe.vcf">Save Contact</a>
            </div>
        </div>

        <div id="dj-soloquest" className="pod limit">
            <h2 className="text-left">DJ SoloQuest</h2>
            <div className="business-card-holder">
                <img src="/cards/card-johnny-med.jpg" alt="DJ SoloQuest business card" />
            </div>
            <div className="portrait-holder">
                <img src="/portraits/soloquest.png" alt="DJ SoloQuest portrait" />
            </div>
            <div className="button-holder">
                <a className="button" href="/cards/card-johnny-med.jpg" download>Save Business Card</a>
                <a className="button" href="/cards/johnny.vcf">Save Contact</a>
            </div>
        </div>

        <div id="dj-babaloo" className="pod limit">
            <h2 className="text-left">DJ Babaloo</h2>
            <div className="business-card-holder">
                <img src="/cards/card-alex-med.jpg" alt="DJ Babaloo business card" />
            </div>
            <div className="portrait-holder">
                <img src="/portraits/babaloo.png" alt="DJ Babaloo portrait" />
            </div>
            <div className="button-holder">
                <a className="button" href="/cards/card-alex-med.jpg" download>Save Business Card</a>
                <a className="button" href="/cards/alex.vcf">Save Contact</a>
            </div>
        </div>

        <div id="dj-boboy" className="pod limit">
            <h2 className="text-left">DJ Boboy</h2>
            <div className="business-card-holder">
                <img src="/cards/card-grayson-med.jpg" alt="DJ Boboy business card" />
            </div>
            <div className="portrait-holder">
                <img src="/portraits/boboy.png" alt="DJ Boboy portrait" />
            </div>
            <div className="button-holder">
            </div>
        </div>
    </div>
  );
}