export interface LibType {
  packageName: string;
  label: string;
  logo?: string;
  logoColor?: string;
  labelColor?: string;
  link?: string[];
  link2?: string[];
  tag?: string;
  a11y?: boolean;
  href?: string;
  img: {
    src: string;
    alt: string;
  };
  download_color: string;
  version_color: string;
  desc: string;
  source: {
    url: string;
    label: string;
  };
  repo: string;
  docs: string;
}

export interface Versions {
  latest: string | undefined;
  v1Latest: string | undefined;
}

export interface PackageVersions {
  [packageName: string]: Versions;
}

export interface PageData {
  versions: {
    [packageName: string]: {
      v1: string | undefined;
      v2: string | undefined;
    };
  };
  error?: string;
}
