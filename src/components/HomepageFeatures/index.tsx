import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  imageAlt: string;
  imagePath: string;
  description: ReactNode;
  internalLink?: string;
  externalLink?: string;
};

const FeatureList: FeatureItem[] = [
  {
    imageAlt: "UnifiedUI",
    imagePath: "img/logo/unified_ui_logo_full_color@0.5x.png",
    description: (
      <>
        A Hytale mod to expand on the current user interface. Allowing players,
        server admins, and modder's to inject custom menu options or commands.
      </>
    ),
    internalLink: "/hytale-unified-ui/quick-start/configuration",
    externalLink: "https://github.com/deez-mods",
  },
  {
    imageAlt: "Emerald Craft",
    imagePath: "img/logo/emerald_craft_logo.png",
    description: (
      <>
        Enhance your Vanilla Minecraft experience with this add-on, a carefully
        balanced addon designed to keep you engaged from the early game to the
        epic late stages.
      </>
    ),
    externalLink:
      "https://www.curseforge.com/minecraft-bedrock/addons/emerald-craft",
  },
];

function Feature(props: FeatureItem) {
  const { imageAlt, imagePath, description, internalLink, externalLink } =
    props;

  const showLinks = internalLink || externalLink;

  return (
    <div className={clsx("col col--4", styles.featureCard)}>
      <div className="text--center">
        <img
          alt={imageAlt}
          src={imagePath}
          className={styles.featureImg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md flex--grow">
        <p>{description}</p>
      </div>
      {showLinks && (
        <div className="display--flex flex--justify-center gap--1">
          {internalLink && (
            <a className="button button--secondary" href={internalLink}>
              View Project
            </a>
          )}
          {externalLink && (
            <a
              className="button button--primary"
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Addon
            </a>
          )}
        </div>
      )}
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
