import type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
};

/**
 * Projeto
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Título — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Data — `date`
   *
   *
   */
  date?: string;

  /**
   * Imagem — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Imagem com scroll — `boolean`
   *
   *
   */
  isImageScrollable?: boolean;

  /**
   * Descrição — `text`
   *
   *
   */
  description?: string;

  /**
   * URL do site — `url`
   *
   *
   */
  url?: string;

  /**
   * Função — `array`
   *
   *
   */
  role?: Array<string>;
}

/**
 * Tecnologia
 *
 *
 */
export interface Technology extends SanityDocument {
  _type: "technology";

  /**
   * Nome — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "logo";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Tipo — `reference`
   *
   *
   */
  type?: SanityReference<TechnologyType>;

  /**
   * Website — `url`
   *
   *
   */
  website?: string;
}

/**
 * Tipos de tecnologia
 *
 *
 */
export interface TechnologyType extends SanityDocument {
  _type: "technologyType";

  /**
   * Título — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Descrição — `string`
   *
   *
   */
  description?: string;
}

export type Documents = Project | Technology | TechnologyType;
