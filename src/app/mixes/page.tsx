import styles from './mixes.module.css';

export default function Contact() {
  return (
    <div className={styles.mixes}>
        <h1>DJ Mixes</h1>
        <div className="pod limit">
            <h2 className="text-left">DJ SoloQuest</h2>

            <div className="mix-holder">
                <h3>Dance Mix 1</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/SoloQuest_Dance_Mix_1.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>

            <div className="mix-holder">
                <h3>SQ Mix</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/soloquest-SQMix.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>

            <div className="mix-holder">
                <h3>Flashback Mix</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/soloquest-flashback.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>
        </div>

        <div className="pod limit">
            <h2 className="text-left">DJ gTraxx</h2>

            <div className="mix-holder">
                <h3>Oldschool 90&apos;s Mix 01</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/gtraxx-Mix02_mixdown.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>

            <div className="mix-holder">
                <h3>Gangnam vs Locked Out of Heaven vs Cat Daddy</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/Gangnam_vs_Locked_Out_of_Heaven_vs_Cat_Daddy.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>

            <div className="mix-holder">
                <h3>Freestyle Mix</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/gtraxx-freestyle2010.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>

            <div className="mix-holder">
                <h3>&apos;08 R&B Mix</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/gt-slowmix-2008.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>
        </div>

        <div className="pod limit">
            <h2 className="text-left">DJ Babaloo</h2>

            <div className="mix-holder">
                <h3>Sample Heem Mix</h3>
                <div className="mix-control-holder">
                  <audio controls preload="none">
                      <source src="/mixes/alex-mix.mp3" type="audio/mpeg" />
                          Your browser does not support the audio element.
                  </audio>
                </div>
            </div>
        </div>
    </div>
  );
}