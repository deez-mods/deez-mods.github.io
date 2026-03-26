import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  name: string;
  imagePath: string;
  description: ReactNode;
  internalLink?: string;
  externalLink?: string;
};

const FeatureList: FeatureItem[] = [
  {
    name: "UnifiedUI",
    imagePath: "img/logo/unified_ui_logo_square_color_plain@0.5x.png",
    description: (
      <>
        A Hytale mod to expand on the current user interface. Allowing players,
        server admins, and modder's to inject custom menu options or commands.
      </>
    ),
    internalLink: "/hytale-unified-ui/introduction/summary",
    externalLink: "https://www.curseforge.com/hytale/mods/unifiedui",
  },
  {
    name: "UnifiedUI: Admin Essentials",
    imagePath:
      "img/logo/unified_ui_admin_essentials_logo_square_color@0.5x.png",
    description: (
      <>
        An extension for UnifiedUI that adds a collection of useful features for
        server administrators.
      </>
    ),
    internalLink: "/hytale-unified-ui/official-extensions/admin-essentials",
    externalLink:
      "https://www.curseforge.com/hytale/mods/unifiedui-admin-essentials",
  },
];

function Feature(props: FeatureItem) {
  const { name, imagePath, description, internalLink, externalLink } = props;

  const showLinks = internalLink || externalLink;

  return (
    <div className={clsx("col col--4", styles.featureCard)}>
      <div className="display--flex flex--justify-center flex--align-center">
        <div className="text--center">
          <img
            alt={name}
            src={imagePath}
            className={styles.featureImg}
            role="img"
          />
        </div>
        {showLinks && (
          <div className="display--flex flex--column flex--grow flex--justify-center">
            {internalLink && (
              <a
                className="button button--secondary"
                href={internalLink}
                style={{ marginBottom: "0.5em" }}
              >
                View Project
              </a>
            )}
            {externalLink && (
              <a
                className="button button--primary"
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "0.5em" }}
              >
                Get Addon
              </a>
            )}
          </div>
        )}
      </div>
      <h2 className="text--center padding-horiz--md flex--grow">{name}</h2>
      <div className="text--center padding-horiz--md flex--grow">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row flex--justify-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
