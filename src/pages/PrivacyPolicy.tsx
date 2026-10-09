import { EmailLink, Layout, Prose } from '../components/Layout.tsx'
import { site } from '../site.ts'

// Keep in line with the Data safety form (Google Play) and the App Privacy
// answers (App Store). The day the app ships real in-app purchases
// ("Remove ads"), add the Purchases section below and update the date.
export function PrivacyPolicy() {
  return (
    <Layout page="privacy">
      <Prose title="Privacy Policy" subtitle={`${site.fullName} · Last updated 7 October 2026`}>
        <div className="callout">
          <p>
            <strong>In short:</strong> GearCraft does not collect personal data itself. The game needs no account and
            keeps your progress, settings and machines only on your device. It shows ads from Google AdMob, which may
            use your device’s advertising identifier and IP address to show and measure them; where the law requires
            it, the game asks for your consent first.
          </p>
        </div>

        <h2>Who we are</h2>
        <p>
          {site.fullName} (“GearCraft”, “the app”) is made by {site.developer}. You can reach us at <EmailLink />.
        </p>

        <h2>What stays on your device</h2>
        <p>To let you continue where you left off, the app saves on your device:</p>
        <ul>
          <li>
            your progress: completed levels, stars, best results, hints you revealed and the machine you were building
            in each level;
          </li>
          <li>your hint tokens and achievements;</li>
          <li>the machines you build in Free Build;</li>
          <li>your settings, such as language, sound, haptics and accessibility options.</li>
        </ul>
        <p>
          This data never leaves your device: we do not receive it, and nobody else does either. There is no account
          and no sign-in.
        </p>

        <h2>Anonymous gameplay statistics</h2>
        <p>
          Settings contains a “Share anonymous gameplay statistics” switch, which is off unless you turn it on. When it
          is on, the app notes gameplay events such as “level started” or “hint opened”. In this version nothing is
          sent even then: those notes stay in the app’s memory on your device and are discarded when it closes.
        </p>

        <h2>What we do not collect</h2>
        <p>
          The app itself does not ask for or collect your name, email address, contacts, precise location, photos,
          camera, microphone or any other personal information.
        </p>

        <h2>Advertising</h2>
        <p>
          GearCraft shows ads served by Google AdMob: a video you can choose to watch for a hint token, and now and then
          a full-screen ad between levels. To show and measure ads and to protect them against fraud, Google may
          collect and process information such as your device’s advertising identifier, your IP address (which
          reveals an approximate location), information about your device and the app, and how ads are viewed and
          tapped. Google’s use of this data is described at{' '}
          <a href="https://policies.google.com/technologies/partner-sites">
            policies.google.com/technologies/partner-sites
          </a>
          .
        </p>
        <p>
          In the European Economic Area, the United Kingdom and Switzerland, the game asks for your consent with
          Google’s consent message before ads may be personalised, and Settings › Privacy › Ad privacy choices lets you
          change your choice at any time. Everywhere, you can reset your advertising identifier or limit personalised
          ads in your device settings.
        </p>

        <h2>Children</h2>
        <p>
          GearCraft is a puzzle game for a general audience and is not directed at children under 13. It does not
          knowingly collect personal information from anyone, including children.
        </p>

        <h2>Deleting your data</h2>
        <p>
          You can erase your progress at any time in Settings › Data › Reset progress. Uninstalling the app removes
          everything it saved on your device.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If the app starts handling data differently, we will update this page before that version is released and
          change the date at the top.
        </p>

        <h2>This website</h2>
        <p>
          This website uses no cookies, no analytics and no third-party scripts or fonts. Your browser only downloads
          its pages and images.
        </p>

        <hr />
        <p className="muted">
          Questions? Write to <EmailLink />.
        </p>
      </Prose>
    </Layout>
  )
}
